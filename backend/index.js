const express = require('express');
const db = require('./app/controllers/database');
const app = express();

require('./config/routes')(app);

function listen() {
    server = app.listen(3000);
    console.log('Connected to server on port 3000')

    db.connect();
    
    //db.createPetsTable(); called only once to create mysql table
}

listen();