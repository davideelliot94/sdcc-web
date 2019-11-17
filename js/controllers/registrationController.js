function signUpUser(userVal,emailVal,pswVal,nameVal,surnameVal) {

    console.log('called sign up user');

    //MODIFICARE PER AWS
    const uri = "http://localhost:8080/users/registration";

    //console.log("makePostNameFunc; uri: " + JSON.stringify(uri));
    console.log("params: " + JSON.stringify(userVal)+ "  " + JSON.stringify(emailVal) + "   " + JSON.stringify(pswVal)+
        "   " + JSON.stringify(nameVal) + "   " + JSON.stringify(surnameVal));
    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            username: userVal,
            email: emailVal,
            psw: pswVal,
            name: nameVal,
            surname: surnameVal}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log('RES: ' + JSON.stringify(response));
    });
};