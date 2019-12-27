console.log('trying prova');

var uri_creating = "http://3.86.24.197:8080/msgs/listcreate/";
var uri = "http://3.86.24.197:8080/msgs/send/";


function createTopic(topic) {

    console.log('topic is: ' + topic);

    fetch(uri_creating, {
        method: 'POST',
        body: JSON.stringify({
            username: sessionStorage.getItem('logged'),
            topicName: topic}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log("getting response:  " + response);
    	var start = new Date().getTime();
    	while (new Date().getTime() < start + delay);

//            if(response.status === 200)

           // window.location='/dashboard_2.html?email=';
    }).catch(function (e) {
//        window.location='/dashboard_2.html?email=';

        console.log('There was an error');
    });




}


function loadAllLists(username){

    var uri_lists = "http://54.164.38.3:8080/users/lists/";

    console.log('got username list: ' + username);
    uri_lists = uri_lists+username;
    var series=[];

    return fetch(uri_lists, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.text().then(function (text) {


        console.log('text1 is: ' + text);
        var nweText = JSON.parse(text);
        console.log('text is: ' + nweText);

       /* nweText.forEach(function (element, index, array) {
            //console.log(element.Title.S + " (" + element.Subtitle.S + ")");
            var lists = [];

            lists.push(element);
            series.push(lists);
            console.log('lists is: ' + lists);
            console.log('series is: ' + series);


        });*/
        return nweText;
    }))

}




function loadAllLists2(username){

    var uri_lists2 = "http://54.164.38.3:8080/users/lists2/";


    console.log('got username list: ' + username);
    uri_lists2 = uri_lists2+username;
    var series=[];

    return fetch(uri_lists2, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.text().then(function (text) {


        var nweText = JSON.parse(text);
        console.log('text is: ' + nweText);

       /* nweText.forEach(function (element, index, array) {
            //console.log(element.Title.S + " (" + element.Subtitle.S + ")");
            var lists = [];

            lists.push(element);
            series.push(lists);
            console.log('lists is: ' + lists);
            console.log('series is: ' + series);


        });*/
        return nweText;
    }))

}





var uri_associate = "http://54.164.38.3:8080/users/associate";


function associateUser(topicName,topicArn){
    fetch(uri_associate, {
        method: 'POST',
        body: JSON.stringify({
            topic: topicName,
	    usern: sessionStorage.getItem('logged'),
	    url: topicArn
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(
            function(response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                response.text().then(function (text) {
                    console.log('text is: ' + text);

                });
            }
        )
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}



function createAndAssociate(topicName){
	
	console.log('topic name is: ' + topicName);
	var topicArn = createTopic(topicName);
	//associateUser(topicName,topicArn);

}

var uri_subscribe = "http://3.86.24.197:8080/msgs/subscribe/";

function subscribeToTopic(topicN,username,topicA) {

    console.log('topicName is: ' + topicN);
    console.log('topicArn is: ' + topicA);

    fetch(uri_subscribe, {
        method: 'POST',
        body: JSON.stringify({
            topicName: topicN,
            usern: username,
            topicArn: topicA
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log("getting response:  " + response);
        var start = new Date().getTime();
        while (new Date().getTime() < start + delay);

//            if(response.status === 200)

        // window.location='/dashboard_2.html?email=';
    }).catch(function (e) {
//        window.location='/dashboard_2.html?email=';

        console.log('There was an error');
    });




}
