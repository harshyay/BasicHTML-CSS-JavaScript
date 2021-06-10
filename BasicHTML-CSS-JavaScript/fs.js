var http=require('http');
var fs=require('fs');
const { listenerCount } = require('process');
http.createServer(function(req,res){
    fs.readFile('exp1.html', function(err,data)
    {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.write("Hello World");
        res.end();
    
    });
}).listen(8080);
