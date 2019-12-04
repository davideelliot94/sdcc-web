function getAllData(){
    var data = [];
    data.push(getNumberUsers());
    data.push(getTotalTeachers());
    return data;
}



function getNumberUsers(/*jwtToken*/) {
    console.log('called number users');

    //MODIFICARE PER AWS
    var uri = "http://54.175.201.140:8080/users/all/";
//    var uri = "http://localhost:8080/users/all/";

    //console.log('jwtToken is: ' + JSON.stringify(jwtToken));
    return fetch(uri, {
        method: 'GET',
        headers: {
            //'Authorization': jwtToken,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.text().then(function (text) {
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
    var uri = "http://54.175.201.140:8080/users/teachers/";
//    var uri = "http://localhost:8080/users/teachers/";

    //console.log('jwtToken is: ' + JSON.stringify(jwtToken));
    return fetch(uri, {
        method: 'GET',
        headers: {
            //'Authorization': jwtToken,
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.text().then(function (text) {
        console.log('text is: ' + text);
        console.log('tyie is: ' + typeof text);
        var nweText = text;
        var count = 0;
        count = JSON.parse(nweText).number;
        console.log('number teachers is: ' + count);

        return count;

    }));


};