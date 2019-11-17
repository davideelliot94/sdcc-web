var username,name,surname,email;

function loadUser(emailVal) {
    console.log('called sign up user');

    //MODIFICARE PER AWS
    var uri = "http://localhost:8080/users/profile/"+emailVal;
    var results;

    fetch(uri, {
        method: 'GET',
        headers: {
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
        var date = new Date();
        var curDate = null;
        do { curDate = new Date(); }
        while(curDate-date < 5000)
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