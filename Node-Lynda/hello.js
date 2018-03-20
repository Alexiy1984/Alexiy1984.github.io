var http = require('http');
var myServer = http.createServer(function(request, response){
  response.writeHead(200, {"Content-type": "text/html"});
  response.write("<p>Hello world!<p>");
  response.end();
});

myServer.listen(3000);

console.log("Зайдите на http://localhost:3000 в вашем браузере");
