const PetController = require('../app/controllers/pet');

module.exports = (app) => {

    app.get('/loadAllPets', PetController.getPetsList);

    app.get('/loadSinglePet/:id', PetController.getSinglePet);

    app.post('/addPet', PetController.addPet);

    app.post('/updatePet', PetController.updatePet);

    app.delete('/deletePet/:id', PetController.deletePet);
}