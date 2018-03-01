var http = require('http');
   

 var serevr = http.createServer(function(req,res)
 {
     res.write("hello arun?");
     res.end();
 }).listen(9000,function()
 {
     console.log("running:");
 });

