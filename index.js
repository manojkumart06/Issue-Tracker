const express = require('express');
const port = 8000;
const app = express();
const http = require('http');

const server = http.createServer(app);
const expresslayout = require('express-ejs-layouts');
app.use(expresslayout);

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//use middleware
app.use(express.urlencoded({extended: true }));
app.use('/',require('./routes'));

server.listen(port, function (err) {
    if (err) {
        console.log("Error in running server:", err);
    }
    console.log("Server is up and running on port", port);
});

app.get('/',function(req,res){
    res.send('Hello issue tracker');
});

// app.listen(port,function(err){
//     if(err){console.log(`Error in running server:${err}`)};
//     console.log(`Server running on port:${port}`);
// });

