require("dotenv").config()

const Turn = require('node-turn');

const port = process.env.TURN_PORT || 3478;
const realm = 'myRealm';
const username = process.env.TURN_USERNAME || "myusername"
const password = process.env.TURN_PASSWORD || "mypassword"

const server = new Turn({
  listeningPort: port,
  authMech: 'long-term',
  credentials: {
    [username]: password
  },
  realm: realm,
  debugLevel: 'ALL',
  minPort: 49152,
  maxPort: 65535,
  // listeningIps: ['127.0.0.1', '192.168.1.7'],
});

server.start(function () {
  console.log('Turn server is running on port', server.getPort());
});

server.on('error', function (err) {
  console.error('Error starting turn server', err);
});

// Check if turn server is running
setInterval(function () {
  if (server.connections > 0) {
    console.log('Turn server is being used by', server.connections, 'connections');
  } else {
    console.log('Turn server is not being used');
  }
}, 5000);