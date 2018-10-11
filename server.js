// require('rootpath')();
// const morgan = require('morgan');
// const startupDebugger = require('debug')('app:startup');
// const dbDebugger = require('debug')('app:db');
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const jwt = require('./server/helpers/jwt');
// const errorHandler = require('./server/helpers/error-handler');
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());


// echo %NODE_ENV%
// if (app.get('env') === 'development') {
// app.use(morgan('tiny')); // Logs http requests
// startupDebugger('Morgan Enabled');
//}

// const corsOptions = {
//   origin: 'http://localhost:4200',
//   optionsSuccessStatus: 200
// };

// console.log(`process.env.NODE_ENV: ${ process.env.NODE_ENV }`);
// app.use(cors(corsOptions));

// Configuring the database
// const dbConfig = require('./server/config/mongodb.config.js');
// const mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
//
//
// // // // Connecting to the database
// mongoose.connect(dbConfig.url)
//   .then(() => {
//     console.log("Successfully connected to MongoDB.");
//   }).catch(err => {
//   console.log('Could not connect to MongoDB.');
//   process.exit();
// });


// use JWT auth to secure the api
//app.use(jwt());

// api routes
// app.use('/users', require('./server/controllers/users.controller'));
// require('./server/routes/picture.routes.js')(app);

// global error handler
// app.use(errorHandler);


// // Create a Server
// const server = app.listen(8080, function () {
//   let host = server.address().address;
//   let port = server.address().port;
//   console.log("App listening at http://%s:%s", host, port);
// });

