console.log('trying prova');

var msg_ip="http://52.90.14.133:8080";
var users_ip="http://18.233.159.214:8080";

var uri_creating = msg_ip+"/msgs/listcreate/";
var uri_send = msg_ip+"/msgs/send/";
var uri_lists = users_ip+"/users/lists/";
var uri_lists2 = users_ip+"/users/lists2/";
var uri_associate = users_ip+"/users/associate";
var uri_subscribe = msg_ip+"/msgs/subscribe/";

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
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')
        }
    }).then(function (response) {
        console.log("getting response:  " + response);
           // window.location='/dashboard_2.html?email=';
    }).catch(function (e) {
//        window.location='/dashboard_2.html?email=';

        console.log('There was an error');
    });




}


function loadAllLists(username){


    console.log('got username list: ' + username);
    uri_lists = uri_lists+username;
    var series=[];
    console.log('got username list: ' + sessionStorage.getItem('token'));

    return fetch(uri_lists, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')
        }
    }).then(res => res.text().then(function (text) {

        uri_lists = users_ip+"/users/lists/";
        console.log('text1 is: ' + text);
        var nweText = JSON.parse(text);
        console.log('text is: ' + nweText);

        return nweText;
    })
);

}




function loadAllLists2(username){


    console.log('got username list: ' + username);
    uri_lists2 = uri_lists2+username;
    var series=[];

    return fetch(uri_lists2, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

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
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

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
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

        }
    }).then(function (response) {
        console.log("getting response:  " + response);

        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            if(response.status === 401)
                window.location='/login.html';
        }

        // window.location='/dashboard_2.html?email=';
    }).catch(function (e) {
//        window.location='/dashboard_2.html?email=';

        console.log('There was an error');
    });




}
