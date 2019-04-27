const mysql = require('mysql');

var connection;

exports.connect = () => {
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'root',
        database : 'pet',
        typeCast: function castField( field, useDefaultTypeCasting ) {
            // We only want to cast bit fields that have a single-bit in them. If the field
            // has more than one bit, then we cannot assume it is supposed to be a Boolean.
            if ((field.type === "BIT") && (field.length === 1)) {
                var bytes = field.buffer();
                // A Buffer in Node represents a collection of 8-bit unsigned integers.
                // Therefore, our single "bit field" comes back as the bits '0000 0001',
                // which is equivalent to the number 1.
                return( bytes[0] === 1 );
            }
            return( useDefaultTypeCasting() );
        }
    });

    connection.connect(function(err) {
        if (err) {
        console.error('Database connection error: ' + err.stack);
        return;
        }  
        console.log('Connected as id ' + connection.threadId);
    });
};

exports.createPetsTable = () => {
    let createPetsTableString = `CREATE TABLE pets (  
            id VARCHAR(30) NOT NULL,
            name VARCHAR(30), 
            type VARCHAR(30),  
            PRIMARY KEY (id) 
        )`;
    connection.query(createPetsTableString);
    console.log("Pets table created");
};

exports.getPets = () => {
    return new Promise((resolve, reject) => {
        let getPetsQueryString = `
            SELECT *
            FROM pets
        `;
        connection.query(getPetsQueryString, (error, result, fields) => {
            if (error) {
                console.log(error);
                return reject(error);
            }
            return resolve(result);
        });
    });
};

exports.getSinglePet = (id) => {
    return new Promise((resolve, reject) => {
        let singlePetString = `SELECT * 
        FROM pets
        WHERE id = ?`;
        connection.query(singlePetString, [id], (error, result, fields) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            if (result.length === 0)
                resolve(false);
            else 
                resolve(result[0]);
        });
    });
};

exports.savePet = async (pet) => {
    try {
        let savePetString = `INSERT INTO pets 
        VALUES (?, ?, ?)`;
        connection.query(savePetString, [pet.id, pet.name, pet.type], (error, result, fields) => {
            if (error) {
                console.log(error);
                return false;
            }
            console.log("Pet correctly added");
            return true;
        });
    } catch (error) {
        console.log(error);
        return false;
    }
};

exports.updatePet = (pet) => {
    try {
        let updatePetQueryString = `
            UPDATE pets 
            SET
                name = ?,
                type = ?
            WHERE id = ?
        `;
        connection.query(updatePetQueryString, [pet.name, pet.type, pet.id], (error, result, fields) => {
            if (error) {
                console.log(error);
                return false;
            }
            console.log("Pet correctly edited");
            return true;
        });
    } catch (error) {
        console.log(error);
        return false;
    }
};

exports.findExistingPet = (id) => {
    return new Promise((resolve, reject) => {
        let findPetString = `SELECT * 
        FROM pets
        WHERE id = ?`;
        connection.query(findPetString, [id], (error, result, fields) => {
            if (error) {
                console.log(error);
                reject(error);
            }
            if (!result || result.length === 0) {
                resolve(false);
            } else {
                resolve(result[0]);
            }
        });
    });
};

exports.deletePet = (id) => {
    return new Promise((resolve, reject) => {
        let deletePetQueryString = `
            DELETE
            FROM pets
            WHERE id = ?
        `;
        connection.query(deletePetQueryString, [id], (error, result, fields) => {
            if (error) {
                console.log(error);
                return reject(error);
            }
            return resolve(result);
        });
    });
};

