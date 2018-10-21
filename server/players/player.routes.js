module.exports = function(app) {
  const players = require('./player.controller.js');
  app.post('/api/players', players.create);
  app.get('/api/players', players.findAll);
  app.get('/api/players/:playerId', players.findOne);
  app.put('/api/players', players.update);
  app.delete('/api/players/:playerId', players.delete);
};
