// const os = require("os");
// console.log(os.type());
// console.log(os.version());
// console.log(__dirname);
// //dirname is always with 2 underscores - __dirname
// const path = require("path");
// const myMath = require("./math");
// console.log(path.parse(__filename));
// console.log(myMath.add(2, 3));

// const fs = require("fs");
// fs.readFile("./files/intro.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
console.log("node");
const http = require("http");
const server = http.createServer((req, res) => {
  res.write("hello node");
  res.end();
});

server.listen(3000);
