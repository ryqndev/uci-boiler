const request = require('request');
const express = require('express');
const app = express();
const port = 3000;


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', (req, res) =>{
    res.send("Hello!");
});
app.get('/users', (req, res) =>{
    getUsers(res);
});

/**
 * @function getUsers - simulates a backend calling a database to get list of
 * users which then gets returned to the frontend that calls through the default
 * route
 * @param {@} res 
 */
function getUsers(res){
    request('https://n161.tech/api/dummyapi/user', function (error, response, body) {
        res.send(body);
    });
}


app.listen( port, () => console.log(`Backend server listening on port ${port}!`) );