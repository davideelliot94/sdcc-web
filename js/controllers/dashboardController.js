var users_ip="http://107.23.104.59:8080";
var numberUri=users_ip+"/users/all/";
var teachersUri = users_ip+"/users/teachers/";


function getAllData(){
    var data = [];
    data.push(getNumberUsers());
    data.push(getTotalTeachers());
    return data;
}



function getNumberUsers(/*jwtToken*/) {
    console.log('called number users');

    //MODIFICARE PER AWS
    //console.log('jwtToken is: ' + JSON.stringify(jwtToken));
    return fetch(numberUri, {
        method: 'GET',
        headers: {
            //'Authorization': jwtToken,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

        }
    }).then(res => res.text().then(function (text) {

        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            if(res.status === 401)
                window.location='/login.html';

            return;
        }

        console.log('text is: ' + text);
        console.log('tyie is: ' + typeof text);
        var nweText = text;
        var count = 0;
        count = JSON.parse(nweText).number;
        console.log('number users is: ' + count);

        return count;

    }));

};




function getTotalTeachers() {

    console.log('called total teachers');
    //MODIFICARE PER AWS
    var uri = "http://18.212.71.167:8080/users/teachers/";
//    var uri = "http://localhost:8080/users/teachers/";

    //console.log('jwtToken is: ' + JSON.stringify(jwtToken));
    return fetch(teachersUri, {
        method: 'GET',
        headers: {
            //'Authorization': jwtToken,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

        }
    }).then(res => res.text().then(function (text) {
        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            if(res.status === 401)
                window.location='/login.html';

            return;
        }
        console.log('text is: ' + text);
        console.log('tyie is: ' + typeof text);
        var nweText = text;
        var count = 0;
        count = JSON.parse(nweText).number;
        console.log('number teachers is:  ' + count);

        return count;

    }));


};
