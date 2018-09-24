const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const http = require('http');
// init app variable
const app = express();


// API file for interacting with MongoDB
const api = require('./server/routes/api');

//Middleware for CORS
app.use(cors());

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  console.log('__dirname ', __dirname);
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


//Set Port
const port = process.env.PORT || '3000';

//app.set('port', port);

const server = http.createServer(app);

// const server = http.createServer((req, res) => {
//   if(req.url === '/api/users'){
//     res.write(JSON.stringify([1,2,3]));
//       res.end();
//   }
// });


// console.log('server ',server);
server.listen( port, () => console.log(`Running on localhost:${port}`));


