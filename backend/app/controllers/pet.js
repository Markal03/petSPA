const db = require('./database');

exports.getPetsList = async (req, res) => {
    try {
        let pets = await db.getPets();
        return res.status(200).send({ results: pets });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Database error", error: error });
    }
};

exports.getSinglePet = async (req, res) => {
    try {
        let pet = await db.getSinglePet();
        return res.status(200).send({ results: pet });
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Database error", error: error });
    }  
};

exports.addPet = async (req, res, next) => {
    const id = req.body.id;
    const name = req.body.name;
    const type = req.body.type;

    if (!id) {
        return res.status(422).send({message: 'Id field necessary'});
    }
    if (!name) {
        return res.status(422).send({message: 'Name field necessary'});
    }
    if(!type){
        return res.status(422).send({message: 'Type field necessary'});
    }

    try {
        let existingPet = await db.findExistingPet(id);
        if (existingPet || existingPet.length > 0) {
            return res.status(422).send({message: 'A pet with the same id has already been inserted into the database'});
        }
        const pet = {
            id: id,
            name: name,
            type: type
        };

        if (db.savePet(pet)) {
            res.status(200).send({message: "Pet added correctly"});
        } else {
            res.status(400).send({message: "There was an error in adding the pet"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({message: "There was an error in adding the pet"});
    }
};

exports.updatePet = async (req, res) => {
    let pet = req.body;
    try {
        if (db.updatePet(pet)) {
                res.status(400).send({message: "There was an error in editing the pet"});
        } else {
            res.status(200).send({message: "Pet edited correctly"});
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: "Database error", error: error});
    }
}

exports.deletePet = async (req, res) => {
    let id = req.params.id;
    try {
        let deleteResult = await db.deletePet(id);
        if (deleteResult) {
            res.status(200).send({message: "Pet deleted"});
        }
    } catch (error) {
        console.log(error);
        res.status(400).send({message: "Error deleting pet"});
    }
    
};