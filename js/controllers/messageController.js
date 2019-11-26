var uri = "https://54.175.201.140:3001/msgs/send";

function sendToQueue(msgTxt) {
    //console.log('msg text is: ' + msgTxt);


    var QueueUrl = 'https://sqs.us-east-1.amazonaws.com/770463927875/sdcc_queue';


    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            msgTxt: msgTxt
        }),
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
}