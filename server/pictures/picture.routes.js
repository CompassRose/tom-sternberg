module.exports = function(app) {
  const pictures = require('./picture.controller.js');
  app.post('/api/pictures', pictures.create);
  app.get('/api/pictures', pictures.findAll);
  app.get('/api/pictures/:pictureId', pictures.findOne);
  app.put('/api/pictures', pictures.update);
  app.delete('/api/pictures/:pictureId', pictures.delete);
};
