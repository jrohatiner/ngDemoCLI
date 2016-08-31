var fs = require('fs'),
  angularCliConfig = JSON.parse(fs.readFileSync('./angular-cli.json', 'utf8'));


var child = require("child_process");
var path = require("path");

function copy(from, to) {
  from = path.join(angularCliConfig.apps[0].root, from.replace(/\//gim, "\\"));
  to = path.join(angularCliConfig.apps[0].outDir, to.replace(/\//gim, "\\"));
  child.exec("xcopy /y /q \"" + from + "\\*\" \"" + to + "\\\"");
}


copy('api', 'api');
copy('images', 'images');
