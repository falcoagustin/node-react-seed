let express = require('express');
let router = express.Router();

let fs = require('fs');
fs.readdirSync(__dirname).forEach(function(file) {
  let fullPath = __dirname + '/' + file;
  if (fs.lstatSync(fullPath).isDirectory()) {
    require('./' + file + '/routes')(router);
  }
});

module.exports = router;
