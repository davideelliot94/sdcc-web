var username,name,surname,email;

function loadUser(emailVal,jwtToken) {
    console.log('called sign up user');


// Load the AWS SDK for Node.js
    var AWS = require('aws-sdk');
// Set the region
    AWS.config.update({region: 'REGION'});

    var QueueUrl = 'https://sqs.us-east-1.amazonaws.com/770463927875/sdcc_queue';


    //MODIFICARE PER AWS
    var uri = "http://localhost:8080/users/profile/"+emailVal;
    var results;

    fetch(uri, {
        method: 'GET',
        headers: {
            'Authorization': jwtToken,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log('RES: ' + JSON.stringify(response));


        response.text().then(function (text) {


            var nweText = text;
            this.name = JSON.parse(nweText).name;
            console.log('text is: ' + name);
            this.username = JSON.parse(nweText).username;
            console.log('username is: ' + username);
            this.surname = JSON.parse(nweText).surname;
            console.log('surame is:' + surname);
            this.email = JSON.parse(nweText).email;


        });
    }).catch(function(error) {
        console.log("error is: " + error);
       // var date = new Date();
        //var curDate = null;
        //do { curDate = new Date(); }
        //while(curDate-date < 5000)
        return error;
    });

    console.log('ended fetch!Results: ' + results);


};

function getName(){
    //console.log('my array is: ' + JSON.stringify(myArray));
    console.log('name is: ' + this.name);
    return this.name;
}

function getSurname() {
    console.log('surname is: ' + this.surname);
    return this.surname;

}

function getUsername(){
    return this.username;
}

function getEmail(){
    return this.email;
}

function submitData(email,newpsw,newname,newsurname){

    console.log('submitting');
    var uri = "http://localhost:8080/users/profile/save";


    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            psw: newpsw,
            name: newname,
            surname: newsurname}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        if(response.status == 200) {
            console.log('RES: ' + JSON.stringify(response));
            window.location = '/dashboard_2.html?email=' + email;
        }
    });
    
    nameFunc(email,func);
}


function deleteUserAccount(email){
    var uri = "http://localhost:8080/users/delete";

    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            email: email
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        if(response.status == 200) {
            console.log('RES: ' + JSON.stringify(response));
            window.location = '/login.html';
        }
    });

}