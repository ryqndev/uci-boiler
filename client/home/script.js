function displayUsers(){
    let url = `http://localhost:3000/users`;
    fetch(url).then(response => {
        return response.json();
    }).then(response => {
        display(response.data);
    })
}

function display(userArray){
    console.log(userArray);
    document.getElementById('user-holder').innerHTML = '';
    userArray.forEach(userObject => {
        let userHTML = `
        <div>
        <img src=${userObject.image} />
        ${userObject.firstName}
        </div>
        `;
        document.getElementById('user-holder').innerHTML += userHTML;         
    });
}