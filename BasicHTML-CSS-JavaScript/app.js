var http=require('http');
// Create a Server Object 
http.createServer(function(req,res){
    res.write("Hello World");
    res.end();
}).listen(8080);

