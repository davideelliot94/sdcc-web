//var uri = "http://54.175.201.140:8080/msgs/send";
var uri = "http://54.226.244.88:8080/msgs/send/";
//var uri = "http://ec2-54-175-201-140.compute-1.amazonaws.com:3000/msgs/send";



function sendToQueue(msgTxt,topicName,topicArn) {

    console.log('msg text is: ' + msgTxt);

    var msgSender = sessionStorage.getItem('logged');

    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            msg: msgTxt,
	    topicN: topicName,
	    topicA: topicArn,
            sender: msgSender}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log("getting response :  " +JSON.stringify(response));
        console.log('RES status: ' + JSON.stringify(response.status));
        console.log('status:' + response.status);

//            if(response.status === 200)

            window.location='/dashboard_2.html?email=';
    }).catch(function (e) {
        window.location='/dashboard_2.html?email=';

        console.log('There was an error');
    });




}
