import http from "http";
var http = require('http').Server(app);
let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server Running");
    console.log("Server listing: " + host + "port: " + port);
})