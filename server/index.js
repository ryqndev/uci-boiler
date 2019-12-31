const request = require('request');
const express = require('express');
const app = express();
const port = 3000;

const LA_WOEID = 2442047;
let appData = {
    weather: {
        temp: 'N/A'
    }
}
function init(){
    getWeather();
}
function getWeather(){
    request('https://www.metaweather.com/api/location/' + LA_WOEID, function (error, response, body) {
        appData.weather.temp = body['consolidated_weather'][0]['the_temp'];
    });
}
init();


app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/', (req, res) =>{
    res.send("Yes");
});

app.get('/weather', (req, res) =>{
    res.send({data: "too cold"});
});

app.listen( port, () => console.log(`Backend server listening on port ${port}!`) );