var express = require('express'); 
var app = express();
var path = require('path');
var http = require('http').Server(app);
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


let server = http.listen(3000, function(){
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server Running");
    console.log("Server listing: " + host + "port: " + port);
})

require('./routes/api-login.js')(app, path);
