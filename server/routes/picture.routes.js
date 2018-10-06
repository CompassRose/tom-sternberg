module.exports = function(app) {
 
    const pictures = require('../controllers/picture.controller.js');
 
    // Create a new Customer
    app.post('/api/pictures', pictures.create);
 
    // Retrieve all Customer
    app.get('/api/pictures', pictures.findAll);
 
    // Retrieve a single Customer by Id
    app.get('/api/pictures/:pictureId', pictures.findOne);
 
    // Update a Customer with Id
    app.put('/api/pictures', pictures.update);
 
    // Delete a Customer with Id
    app.delete('/api/pictures/:pictureId', pictures.delete);
};