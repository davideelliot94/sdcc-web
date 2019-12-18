function signUpUser(userVal,emailVal,pswVal,nameVal,surnameVal,roleVal) {

    console.log('called sign up user');

    //MODIFICARE PER AWS
    var uri = "http://localhost:8080/users/registration";
    //var uri = "http://54.175.201.140:8080/users/registration";



    //console.log("makePostNameFunc; uri: " + JSON.stringify(uri));
    console.log("params: " + JSON.stringify(userVal)+ "  " + JSON.stringify(emailVal) + "   " + JSON.stringify(pswVal)+
        "   " + JSON.stringify(nameVal) + "   " + JSON.stringify(surnameVal)+ "   " + JSON.stringify(roleVal));
    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            username: userVal,
            email: emailVal,
            psw: pswVal,
            name: nameVal,
            surname: surnameVal,
            role: roleVal}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log('RES: ' + JSON.stringify(response));
        window.location='/login.html'
    }).catch(function(error) {
        console.log("error is: " + error);
        throw error;
    });;
};