const genhash = require("./hash.js");
const args = process.argv.slice(2);
path = args[0];
const fs = require("fs");
const res = fs.statSync(path);
if (res.isFile()) {
  getFileData(path);
}
if (res.isDirectory()) {
  getDirectoryData(path);
}
function getDirectoryData(patharg) {
  mypath = patharg;
  fs.readdir(mypath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      temppath = mypath + "/" + file;
      const resu = fs.statSync(temppath);
      if (resu.isFile()) {
        getFileData(temppath);
      }
      if (resu.isDirectory()) {
        getDirectoryData(temppath);
      }
    });
  });
}
function getFileData(filename) {
  const result = fs.readFile(filename, (err, data) => {
    if (err) {
      console.log("error", err);
      return;
    }
    console.log(filename + " :  " + data.toString());
    genhash.generateHash(filename);
  });
}
