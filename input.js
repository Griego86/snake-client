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


  const handleUserInput = (connection) => {
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
      if (connection === message) {
          conn.write(`Say: ${messages[key]}`);
      }
    }
  };

  stdin.on("data", handleUserInput);
  return stdin;

};

module.exports = {
  setupInput
};