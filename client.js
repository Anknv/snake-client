const net = require("net");
const { IP, PORT } = require("./constants")

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT 
  });

  return conn;
}



module.exports = {
  connect
}