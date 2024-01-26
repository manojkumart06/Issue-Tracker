const express = require('express');
const port = 8000;
const app = express();
const http = require('http');
const server = http.createServer(app);

const expresslayout = require('express-ejs-layouts');
app.use(expresslayout);
app.set('layout', './layouts/main')
app.use(express.static(__dirname + '/assets'));
const path = require('path');

//DB connection
const connectDb = require('./configs/dbconnection');
connectDb();

//set up view engine
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'))

//use middleware
app.use(express.urlencoded({extended: true }));
app.use('/',require('./routes/index'));

server.listen(port, function (err) {
    if (err) {
        console.log("Error in running server:", err);
    }
    console.log("Server is up and running on port", port);
});

// app.listen(port,function(err){
//     if(err){console.log(`Error in running server:${err}`)};
//     console.log(`Server running on port:${port}`);
// });

