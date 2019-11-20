console.log('trying prova');
//prova();

var uri_userLogin = "http://localhost:8080/users/login";

function postNameFunc(val1,val2){



    console.log('inside postNameFunc; uri is:' + uri_userLogin);
        //console.log("makePostNameFunc; uri: " + JSON.stringify(uri));
    fetch(uri_userLogin, {
            method: 'POST',
            body: JSON.stringify({
                em: val1,
                pass: val2
            }),
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            console.log("getting response:  " +JSON.stringify(response));
            console.log('RES status: ' + JSON.stringify(response.status));
            console.log('status:' + response.status);

//            if(response.status === 200){

                response.text().then(function (text) {
                    console.log('text is: ' + text);


                    var nweText = text;
                    var name = JSON.parse(nweText).name;
                    var jwtToken = JSON.parse(nweText).token;
                    var email = JSON.parse(nweText).email;
                    var username = JSON.parse(nweText).username;
                    var surname = JSON.parse(nweText).surname;
                    var role = JSON.parse(nweText).role;

                    console.log('got name: ' + name);
                    console.log('username: ' + username);
                    console.log('email:' + email);
                    console.log('surname: ' + surname);
                    console.log('role: ' + role);

                    /****************setting authinfo************/

                    //if(name !== null && name != undefined) {
                        sessionStorage.setItem('logged', username);
                        sessionStorage.setItem(username, jwtToken);
                        sessionStorage.setItem('email',email);
                        console.log('setted email: ' + sessionStorage.getItem('email'));
                        sessionStorage.setItem('name',name);
                        sessionStorage.setItem('surname',surname);
                        sessionStorage.setItem('role',role);

                        var start = new Date().getTime();
                        while (new Date().getTime() < start + 3000);
                    //}

                    /********************************************/


                    //console.log('token is: ' + sessionStorage.getItem('logged'));

                });

            console.log('going to dashboard: ' + email);

      //      var start = new Date().getTime();
      //      while (new Date().getTime() < start + 3000);

            window.location='/dashboard_2.html?email='+sessionStorage.getItem('email');
            return false;

            //}
        }).catch(function (e) {
            console.log('There was an error');
        });

    /*var start = new Date().getTime();
    while (new Date().getTime() < start + 3000);*/
    console.log('ended');

    //var start = new Date().getTime();
    //while (new Date().getTime() < start + 3000);

    return false;
};



