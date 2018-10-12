require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('./server/_helpers/jwt');
const errorHandler = require('./server/_helpers/error-handler');
const morgan = require('morgan');
app.use(morgan('tiny')); // Logs http requests
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/users', require('./server/users/users.controller'));
require('./server/pictures/picture.routes.js')(app);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 4000;
const server = app.listen(port, function () {
  console.log('Server listening on port ' + port);
});
