const config = require('config.json');
const mongoose = require('mongoose');
mongoose.connect(config.connectionString);
mongoose.Promise = global.Promise;

module.exports = {
  User: require('../users/user.model'),
  Picture: require('../pictures/picture.model'),
  Player: require('../players/player.model')
};
