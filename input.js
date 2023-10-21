// setup interface to handle user input from stdin

let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (connection) {
  if (connection === '\u0003') { //equal to ctrl + C
    process.exit();
  }
  if (connection === 'w') {
    setTimeout(() => {
      conn.write("Move: up");
    }, 1000);
  }
  if (connection === 'a') {
    setTimeout(() => {
      conn.write("Move: left");
    }, 1000);
  }
  if (connection === 's') {
    setTimeout(() => {
      conn.write("Move: down")
    }, 1000);
  }
  if (connection === 'd') {
    setupInput(() => {
      conn.write("Move: right")
    }, 1000);
  }
};

module.exports = {
  setupInput
};