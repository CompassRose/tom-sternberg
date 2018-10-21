const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
  playerName: String,
  cashInBank: Number,
  cashInHand: Number,
  startDate: Date,
  betHistory: [Number],
  lastTen: [Number]
});

module.exports = mongoose.model('Player', PlayerSchema);
