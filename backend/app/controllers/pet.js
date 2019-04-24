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