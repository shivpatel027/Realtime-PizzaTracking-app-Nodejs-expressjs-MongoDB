const express = require('express');
const app = express();
const path = require('path');
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');

//Assets

app.use(express.static('public'))

//set Templets
app.use(expressLayout)
app.set('views', path.join(__dirname + '/resources/views'))
app.set('view engine', 'ejs')

//routs
require('./routes/web')(app);


app.listen(3000, function(req, res) {
    console.log("Server is runnig on port 3000");
})