var uri = "http://52.91.86.127:8080/msgs/send/";



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
            'Content-Type': 'application/json',
            'Authorization': sessionStorage.getItem('token')

        }
    }).then(function (response) {


        console.log("getting response :  " +JSON.stringify(response));
        console.log('RES status: ' + JSON.stringify(response.status));
        console.log('status:' + response.status);

        if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            if(response.status === 401)
                window.location='/login.html';

            return;
        }


            window.location='/mail_compose.html';
    }).catch(function (e) {
        window.location='/dashboard_2.html?email='+sessionStorage.getItem('email');

        console.log('There was an error');
    });




}
