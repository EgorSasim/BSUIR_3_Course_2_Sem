const net = require("net");

const port = 8888;
const server = net.createServer(onClientConnection);

server.listen(port, function () {
  console.log(`Server started on port ${port}`);
});

function onClientConnection(sock) {
  console.log(`${sock.remoteAddress}:${sock.remotePort} Connected`);

  sock.on("data", function (data) {
    console.log(`>> data received : ${data} `);

    let serverResp = "Hello from the server";
    sock.write(serverResp);

    sock.end();
  });

  sock.on("close", function () {
    console.log(`${sock.remoteAddress}:${sock.remotePort} Connection closed`);
  });

  sock.on("error", function (error) {
    console.error(
      `${sock.remoteAddress}:${sock.remotePort} Connection Error ${error}`
    );
  });
}
