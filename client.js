// establishes a connection with the game server
const net = require("net");
const { IP, PORT } = require("./constant");

const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server"),
      conn.write("Name: DAA") //game username
  });

  conn.on("data", (data) => {
    console.log(data);
    process.exit();
  });



  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = {
  connect
};