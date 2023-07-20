const express = require("express");
const app = express();
const PORT1 = 5000;
const net = require("net");

// const client = new net.Socket();
const host = "103.233.79.43"; // replace with the IP address of the destination host
const port = 3000; // replace with the port number of the destination host

let data = { name: "Nalin", DC: "CD" };
// let json = JSON.stringify(data);

// if (true) {
//   client.connect(port, host, () => {
//     console.log("Connected to server");
//     // let data1 = data.toString();
//     client.write("Hello, server!", json);
//   });

//   client.on("data", (data) => {
//     console.log("Received data:", data.toString());
//     client.destroy(); // close the connection
//   });

//   client.on("close", () => {
//     console.log("Connection closed");
//   });
// }

// const net = require('net');

let count = 0;

// const obj = {
//   data: "$,NR,01,L,2.8,358943052850277,1,13062023,015423,12.956027,N,077.637123,E,05,20,001.7,1,C,12.5,1,00.3,0000.0,00.0,0107080000010000,NA,0001020000010000,NA,NA,NA,0202030000040000,0405060000070000,NA,NA,0507080000140000,NA,NA,0007080000010000,NA,NA,NA,NA,NA,NA,NA,NA,NA,NA,080808080808080808,NA,000000000,NA, 0043 0043 0043 0043 0044 0043 0042 0042 0043 0043, 0014 0014 0013 0014 0014 0012 0013 0014 0014 0013, 0111 0112 0111 0111 0112 0112 0111 0111 0112 0111,0003000000000004001500000000003900000000,0000000000460000000000370006002500240000,0000000000000003004700040019002800000000,2,BSNL MO,0,0,028145,86,* ",
// };
let a = () => {
  let json = JSON.stringify(data);
  // let json = JSON.stringify(obj);
  count += 1;
  let client = net.createConnection({ host: "127.0.0.1", port: 3000 }, () => {
    console.log("connected to server!");
    client.write(json); // write the JSON string to the server
  });

  client.on("data", (data) => {
    console.log(data.toString()); // print the response from the server
  });

  client.on("end", () => {
    console.log("disconnected from server");
  });
  // client.end();

  if (count <= 1000) {
    // a();
    setTimeout(a, 100);
  }
};

a();

app.get("/", (req, res) => {
  res.send("Nalin's sender");
});

app.listen(PORT1, () => {
  // console.log(obj.toString());
  // console.log(typeof obj);
  console.log("PORTO RICKO");
});
