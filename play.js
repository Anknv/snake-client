const { connect } = require("./client")

console.log("Connecting ...");

const conn = connect();

conn.setEncoding("utf8");

conn.on('data', (data) => {
  console.log('Server says: ', data);
});

conn.on('connect', () => {
  console.log('Successfully connected to game server');
  conn.write("Name: ANK")
});
