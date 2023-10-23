// setup interface to handle user input from stdin

const { messages, movingKeys} = require("./constant");

// TCP connection
let connection;

const setupInput = function (conn) {
  connection = conn;
  
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput = (connection) => {
    //equal to ctrl + C
    if (connection === '\u0003') { 
      console.log("Thanks for playing.");
      process.exit();
    }

    for (let key in movingKeys) {
      if (connection === key) {
        conn.write(`Move: ${movingKeys[key]}`);
      }
    }

    for (let key in messages) {
      if (connection === key) {
          conn.write(`Say: ${messages[key]}`);
      }
    }
  });
  return stdin;
};

module.exports = {
  setupInput
};