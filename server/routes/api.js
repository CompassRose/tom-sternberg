const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const EventEmitter = require('events');
const Logger = require('../../logger');

const logger = new Logger();

logger.on('messageLogged', (arg) => {
  console.log('Listener Called', arg)
});
//logger.log('Hi Thomas');

const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
// console.log(`total: ${totalMemory}`);
// console.log(`free: ${freeMemory}`);

// Connect
// mongodb://localhost:27017/mean
// mongodb://TSternberg:VCParriott@19070@ds031842.mlab.com:31842/prog219_sternberg
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/mean', (err, client) => {
    if (err) return console.log(err);

    let db = client.db('mean');
    console.log('db ',db);
    closure(db);
  });
};


// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get users
router.get('/pictures', (req, res) => {
  connection((db) => {
    db.collection('pictures')
      .find()
      .toArray()
      .then((pictures) => {
        response.data = pictures;
      // console.log('response.data ', response.data);
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

router.post('/pictures', function (req, res) {
  console.log('req.data ', req, ' res ', res);
  connection((db) => {
    db.collection('pictures');
    res.send(req);
  })
});

// Get users
router.get('/users', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;
       // console.log('response.data ', response.data);
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});




// Get single sort by
router.get('/users/:name', (req, res) => {
  res.send(req.query.name);
});

module.exports = router;
