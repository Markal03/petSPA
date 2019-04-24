module.exports = (app) => {

    app.get('/loadAllPets');

    app.get('/loadSinglePet/:id');

    app.post('/addPet');

    app.post('/updatePet/:pet');

}