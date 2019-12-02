console.log('trying prova');

//prova();
const uri = "http://3.84.38.91:8080/msgs/receive/";




async function loadFromQueue(){

    console.log('loading');


/*    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);
    return await data;
*/

    return await fetch(uri, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(res => res.text().then(function (text) {
        console.log('text is: ' + text);
        console.log('tyie is: ' + typeof text);
        var nweText = text;
        var msg = JSON.parse(nweText).text;
        console.log('msg is: ' + msg);
        var messages = [];
        var listMsgs = [];
        messages.push(msg);
        listMsgs.push(messages);
        var messages2 = listMsgs;
        console.log('this.messages: ' + this.messages);
        return listMsgs;
    }));
    /*
    console.log("getting response ");
        //resolve(response);
        //console.log('result: ' + JSON.stringify(response))

        response.text().then(function (text) {
            console.log('text is: ' + text);
            console.log('tyie is: ' + typeof text);
            var nweText = text;
            var msg = JSON.parse(nweText).text;
            console.log('msg is: ' + msg);
            var messages = [];
            messages.push(msg);
            var messages2 = messages;
            console.log('this.messages: ' + this.messages);
            return messages2;
        });



    });*/

};


