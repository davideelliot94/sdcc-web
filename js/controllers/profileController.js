function loadUser(emailVal) {

    console.log('called sign up user');

    //MODIFICARE PER AWS
    const uri = "http://localhost:8080/users/profile/"+emailVal;


    fetch(uri, {
        method: 'GET',
        /*body: JSON.stringify({
            email: emailVal}),*/
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })/*.then(function (response) {
        console.log('RES: ' + response);
    })*/.catch(function(error) {
        console.log("error is: " + error);
    });
};