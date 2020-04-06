var crypto = require("crypto");
var shaAlgorithm = "sha1";
var mdAlgorithm = "md5";
const fs = require("fs");
function generateHash(filename) {
  s = fs.ReadStream(filename);
  var shasum = crypto.createHash(shaAlgorithm);
  var mdsum = crypto.createHash(mdAlgorithm);
  s.on("data", function (data) {
    shasum.update(data);
    mdsum.update(data);
  });
  s.on("end", function () {
    var shash = shasum.digest("hex");
    var mhash = mdsum.digest("hex");
    var buff = filename + "  " + shash + "  " + mhash + "\n";
    fs.appendFile("write.txt", buff, function (err) {
      if (err) throw err;
      console.log(filename + " hash saved!");
    });
  });
}
module.exports = {
  generateHash: generateHash,
};
