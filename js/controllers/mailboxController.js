console.log('trying prova');

//prova();
var msg_ip="http://34.226.82.190:8080";
var uriRec = msg_ip+"/msgs/receive/";
const uriDel = msg_ip+"/msgs/delete/";
var uriRead = msg_ip+"/msgs/read/";



function loadFromQueue(){

    var results= [];

    uriRec = uriRec + sessionStorage.getItem('logged');
    console.log('uri is: ' + uriRec);

    return fetch(uriRec, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.text().then(function (text) {
        console.log('text is: ' + text);
        console.log('tyie is: ' + typeof text);

        var nweText = JSON.parse(text);
        nweText.Items.forEach(function(element, index, array) {
            //console.log(element.Title.S + " (" + element.Subtitle.S + ")");
            var msg =[];

            msg.push(element.RECEIVER_NAME.S);
            msg.push(element.SENDER_NAME.S);
            msg.push(element.TOPIC_NAME.S);
            msg.push(element.MSGTEXT.S);
            msg.push(element.MSG_TIMESTAMP.S);
            msg.push(element.MESSAGE_ID);
            console.log('msg is: ' + msg);
            results.push(msg);

        });

        return results;
    }));

};


function readFromQueue(){

    var results= [];

    uriRead = uriRead + sessionStorage.getItem('logged');
    console.log('uri is: ' + uriRead);

    return fetch(uriRead, {
        method: 'POST',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

        }
    }).then(res => res.text().then(function (text) {
        console.log('text is: ' + text);
        console.log('tyie is: ' + typeof text);

        if (res.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + res.status);
            if(res.status === 401)
                window.location='/login.html';

            return;
        }


    }));

};




function deleteFromQueue(idList) {


    fetch(uriDel, {
        method: 'POST',
        body: JSON.stringify({
		msgs: idList         
	}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log('RES: ' + JSON.stringify(response));
        //window.location='/login.html'
    }).catch(function(error) {
        console.log("error is: " + error);
        throw error;
    });	

}
