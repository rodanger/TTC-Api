const express = require('express');
const app = express();
const fs = require('fs');


// Endpoint to Get a list of users
app.get('/', function(req, res){
    fs.readFile(__dirname + "/" + "ttc.json", 'utf8', function(err,data){
        console.log(data);
        res.end(data); //
    });
})

const server = app.listen(3000, function(){ 
    const host = server.address().address
    const port = server.address().port
    console.log("REST API demo app listening at http://127.0.0.1:3000", host, port)
})
