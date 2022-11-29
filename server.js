const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(__dirname);
//dirname is always with 2 underscores - __dirname
const path = require("path");
const myMath = require("./math");
console.log(path.parse(__filename));
console.log(myMath.add(2, 3));
