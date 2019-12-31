/**
 * @function redirect - redirects the webpage to the url passed 
 * into the function as a parameter
 * @param {string} url - the url to which to change to 
 */
function redirect(url){
    window.location = url;
}


/**
 * NETWORK/BACKEND CALLS
 */

const backendUrl = 'localhost:3000';

function getWeather(){
    console.log("Sending request to weather endpoint...");

    fetch('http://127.0.0.1:3000/weather')
    .then(response => {
        console.log("Received response: ", response);
        return response.json();
    }).then(response => {
        console.log("Parsed response: ", response);
    }).catch(error => {
        console.log("Something went wrong. Data not received.");
    });
}