let connection;

const handleUserInput = (data) => {
  console.log("Keyboard says: ", data);
  if (data === '\u0003') {
    process.exit();
  } else if (data === "w") {
    connection.write("Move: up")
    console.log("Move: up")
  } else if (data === "s") {
    connection.write("Move: down")
    console.log("Move: down")
  } else if (data === "a") {
    connection.write("Move: left")
    console.log("Move: left")
  } else if (data === "d") {
    connection.write("Move: right")
    console.log("Move: right")
  } else if (data === "q") {
    connection.write("Say: Beep Beep")
  }
}

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};


module.exports = {
  setupInput
}