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

            if(response.status === 200){

                response.text().then(function (text) {
                    console.log('text is: ' + text);

                    var nweText = text;
                    var name = JSON.parse(nweText).name;
                    var jwtToken = JSON.parse(nweText).token;

                    /****************setting authinfo************/
                    sessionStorage.setItem('logged',name);
                    sessionStorage.setItem(name,jwtToken);
                    /********************************************/

                    console.log('token is: ' + sessionStorage.getItem(name));


                    window.location='/dashboard_2.html?email='+text;

                });
                console.log('not 200');
                window.location='/login.html';

            }console.log('not 200');
        });

        console.log('ended');
};



