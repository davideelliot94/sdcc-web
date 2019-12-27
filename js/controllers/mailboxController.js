console.log('trying prova');

//prova();
var uri = "http://3.86.24.197:8080/msgs/receive/";
const uriDel = "http://3.86.24.197:8080/msgs/delete/";



function loadFromQueue(){

    var results= [];

    uri = uri + sessionStorage.getItem('logged');
    console.log('uri is: ' + uri);

    return fetch(uri, {
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
            msg.push(element.MSGTEXT.S);
            msg.push(element.MSG_TIMESTAMP.S);
            msg.push(element.MESSAGE_ID);
            console.log('msg is: ' + msg);
            results.push(msg);

            console.log('ayns results: ' + results);

        });

        return results;
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
