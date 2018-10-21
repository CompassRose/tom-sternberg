const Player = require('./player.model.js');


// POST a Player
exports.create = (req, res) => {
  // Create a player
  const player = new Player(req.body);
  // Save a playerId in the MongoDB
  player.save()
    .then(data => {
      res.json(data);
    }).catch(err => {
    res.status(500).json({
      msg: err.message
    });
  });
};



// FETCH all players
exports.findAll = (req, res) => {
  console.log('******findAll');
  Player.find()
    .then(player => {
      res.json(player);
    }).catch(err => {
    res.status(500).send({
      msg: err.message
    });
  });
};


// FIND a player
exports.findOne = (req, res) => {
  console.log('findOne ', res);
  Player.findById(req.params.playerId)
    .then(player => {
      if(!player) {
        return res.status(404).json({
          msg: "player not found with id " + req.params.playerId
        });
      }
      res.json(player);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).json({
        msg: "player not found with id " + req.params.playerId
      });
    }
    return res.status(500).json({
      msg: "Error retrieving player with id " + req.params.playerId
    });
  });
};

// UPDATE a Customer
exports.update = (req, res) => {
  // Find customer and update it
  Player.findByIdAndUpdate(req.body._id, req.body, {new: true})
    .then(player => {
      if(!player) {
        return res.status(404).json({
          msg: "player not found with id " + req.params.playerId
        });
      }
      res.json(player);
    }).catch(err => {
    if(err.kind === 'ObjectId') {
      return res.status(404).json({
        msg: "player not found with id " + req.params.playerId
      });
    }
    return res.status(500).json({
      msg: "Error updating player with id " + req.params.playerId
    });
  });
};

// DELETE a player
exports.delete = (req, res) => {
  Player.findByIdAndRemove(req.params.playerId)
    .then(player => {
      if(!player) {
        return res.status(404).json({
          msg: "player not found with id " + req.params.playerId
        });
      }
      res.json({msg: "player deleted successfully!"});
    }).catch(err => {
    if(err.kind === 'ObjectId' || err.name === 'NotFound') {
      return res.status(404).json({
        msg: "player not found with id " + req.params.playerId
      });
    }
    return res.status(500).json({
      msg: "Could not delete player with id " + req.params.playerId
    });
  });
};
