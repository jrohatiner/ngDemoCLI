var child=require("child_process");


function copy(from,to){
  from=from.replace(/\//gim,"\\");
  to=to.replace(/\//gim,"\\");
  child.exec("xcopy /y /q \""+from+"\\*\" \""+to+"\\\"");
}



copy('./src/api', './dist/api');
copy('./src/images', './dist/images');
