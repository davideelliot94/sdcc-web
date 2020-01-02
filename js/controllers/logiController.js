


console.log('trying prova');

//prova();
var uri_userLogin = "http://54.146.131.119:8080/users/login";
//ivar uri_userLogin = "http://54.175.201.140:8080/users/login";


function nameFunc(val1,val2){

    console.log('nameFunc!');

    var nweText;
    var name;
    var email;
    var username;
    var surname;
    var role;
    var jwtToken;
    var qUrl;


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
    })
        .then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.text().then(function (text) {
                    console.log('text is: ' + text);

                    nweText = text;
                    name = JSON.parse(nweText).name;
                    jwtToken = JSON.parse(nweText).token;
                    email = JSON.parse(nweText).email;
                    username = JSON.parse(nweText).username;
                    surname = JSON.parse(nweText).surname;
                    role = JSON.parse(nweText).role;
                    qUrl = JSON.parse(nweText).token;

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
                    sessionStorage.setItem('name',name);
                    sessionStorage.setItem('surname',surname);
                    sessionStorage.setItem('role',role);
                    sessionStorage.setItem('token',jwtToken);
                    sessionStorage.setItem('qUrl',qUrl);
                    /***********************************************************************/

                    var start = new Date().getTime();
                    while (new Date().getTime() < start + 3000);


                    window.location='/dashboard_2.html?email='+email;


                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });

}