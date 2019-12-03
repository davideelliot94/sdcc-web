console.log('trying prova');

//prova();
//var uri_userLogin = "http://localhost:8080/users/login";
var uri_userLogin = "http://54.175.201.140:8080/users/login";

function nameFunc(val1,val2){

    console.log('nameFunc!');

    var nweText;
    var name;
    var email;
    var username;
    var surname;
    var role;
    var jwtToken;


   // var x = 0;

    //if(x === 0) {
      //  console.log('x is 0');
       // window.location = '/dashboard_2.html?email=';
    //}


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

            nweText = text;
            name = JSON.parse(nweText).name;
            jwtToken = JSON.parse(nweText).token;
            email = JSON.parse(nweText).email;
            username = JSON.parse(nweText).username;
            surname = JSON.parse(nweText).surname;
            role = JSON.parse(nweText).role;
            jwtToken = JSON.parse(nweText).token;

            console.log('got name: ' + name);
            console.log('username: ' + username);
            console.log('email:' + email);
            console.log('surname: ' + surname);
            console.log('role: ' + role);
            console.log('token: ' + jwtToken);


            //SETTING AUTHINFO
            /************************************************************************/
            sessionStorage.setItem('logged', username);
            sessionStorage.setItem(username, jwtToken);
            sessionStorage.setItem('email',email);
            console.log('setted email: ' + sessionStorage.getItem('email'));
            sessionStorage.setItem('name',name);
            sessionStorage.setItem('surname',surname);
            sessionStorage.setItem('role',role);
            sessionStorage.setItem('token',jwtToken);
            /***********************************************************************/

            //var start = new Date().getTime();
            //while (new Date().getTime() < start + 3000);


            window.location='/dashboard_2.html?email='+email;


        });


    }).catch(function (e) {
        console.log('There was an error');
    });



    console.log('inside postNameFunc; uri is:' + uri_userLogin);

    //var start = new Date().getTime();
    //while (new Date().getTime() < start + 3000);
    //return false;
};



