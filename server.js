
require('dotenv').config();

var Turn = require('node-turn');

const username = process.env.USERNAME
const password = process.env.PASSWORD
const port = process.env.PORT

var server = new Turn({
  // set options
  authMech: 'long-term',
  credentials: {
    username: username,
    password: password
    
  },
  listeningPort: port
});
server.start();