const express = require('express');

const app = express();



app.get('/', function(req, res) {
    res.send("Hello")
})


app.listen(3000, function(req, res) {
    console.log("Server is runnig on port 3000");
})