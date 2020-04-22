var crypto = require("crypto");
const fs = require("fs");

var shaAlgorithm = "sha1";
var mdAlgorithm = "md5";

function generateHash(filename, callback) {
  s = fs.ReadStream(filename);
  var shasum = crypto.createHash(shaAlgorithm);
  var mdsum = crypto.createHash(mdAlgorithm);
  s.on("data", function (data) {
    shasum.update(data);
    mdsum.update(data);
  });
  s.on("end", function () {
    var shaHash = shasum.digest("hex");
    var mdHash = mdsum.digest("hex");
    var buff = filename + "  " + shaHash + "  " + mdHash + "\n";
    callback(buff);
  });
}
module.exports = {
  generateHash: generateHash,
};
