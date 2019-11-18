function getNumberUsers(emailVal) {
    console.log('called number users');

    //MODIFICARE PER AWS
    var uri = "http://localhost:8080/users/all/";
    var results;
    var count;

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

            console.log('text is: ' + text);

            var nweText = text;
            this.count = JSON.parse(nweText).number;
            console.log('number is: ' + this.count);
            return this.count;
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
