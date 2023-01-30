const net = require("net");

const port = 8888;

const client1 = new net.Socket();

client1.connect(port, () => {
  console.log(`Client 1 :Connected to server on port ${port}`);

  client1.write("Hi from the client 1");
});

client1.on("data", (data) => {
  console.log(`Client 1 received from server : ${data}`);
});

client1.on("close", () => {
  console.log("Client 1 : Connection Closed");
});

client1.on("error", (error) => {
  console.error(`Connection Error ${error}`);
});

const client2 = new net.Socket();

client2.connect(port, () => {
  console.log(`Client 2 : Connected to server on port ${port}`);

  client2.write("Hi from the client 2");
});

client2.on("data", (data) => {
  console.log(`Client 2 received from server : ${data}`);
});

client2.on("close", () => {
  console.log("Client 2 : Connection Closed");
});

client2.on("error", (error) => {
  console.error(`Connection Error ${error}`);
});
