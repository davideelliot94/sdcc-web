var username,name,surname,email;
var ip="http://54.146.131.119:8080";


function loadUser(emailVal,jwtToken) {
    console.log('called sign up user');

    //MODIFICARE PER AWS
    var uriLoad = ip+"/users/profile/"+emailVal;
    //var uri = "http://localhost:8080/users/profile/"+emailVal;
    var results;

    return fetch(uriLoad, {
        method: 'GET',
        headers: {
            'Authorization': jwtToken,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }).then(res => res.text().then(function (response) {
        console.log('RES: ' + JSON.stringify(response));

        var nweText = response;
        this.name = JSON.parse(nweText).name;
        console.log('text is: ' + name);
        this.username = JSON.parse(nweText).username;
        console.log('username is: ' + username);
        this.surname = JSON.parse(nweText).surname;
        console.log('surame is:' + surname);
        this.email = JSON.parse(nweText).email;
        var logData = [name,surname,username,email];
        return logData;

    }));

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
    var uriSub = ip+"/users/profile/save";


    fetch(uriSub, {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            psw: newpsw,
            name: newname,
            surname: newsurname}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

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
    var uriDelete = ip+"/users/delete";

    fetch(uriDelete, {
        method: 'POST',
        body: JSON.stringify({
            email: email
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

        }
    }).then(function (response) {
        if(response.status == 200) {
            console.log('RES: ' + JSON.stringify(response));
            window.location = '/login.html';
        }
    });

}