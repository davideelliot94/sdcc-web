//var uri = "http://54.175.201.140:8080/msgs/send";
var uri = "http://localhost:3000/msgs/send/";
//var uri = "http://ec2-54-175-201-140.compute-1.amazonaws.com:3000/msgs/send";



function sendToQueue(msgTxt) {

    console.log('msg text is: ' + msgTxt);

    var QueueUrl = 'https://sqs.us-east-1.amazonaws.com/770463927875/sdcc_queue';

    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            msg: msgTxt}),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log('RES: ' + JSON.stringify(response));
    }).catch(function(error) {
        console.log("error is: " + error);

        return error;
    });
    ;


}