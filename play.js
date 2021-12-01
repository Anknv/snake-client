const { connect } = require("./client")

const { setupInput } = require("./input")

console.log("Connecting ...");

const conn = connect();
const stdin = setupInput(conn);

conn.setEncoding("utf8");

conn.on("data", (data) => {
  console.log("Server says: ", data);
});

[1,2,3].filter((x) => x % 2 === 0)

conn.on("connect", () => {
  console.log('Successfully connected to game server');
  conn.write("Name: ANK")
  // for (let i = 1; i <= 5; i++) {
  //   conn.write("Move: up")
  //   setTimeout(() => conn.write("Move: up"), 100 * i)
  // }
});