var uri = "http://localhost:3000/api/v1/saveBooking";

function submitReservation(jwtToken,date,clockTime,college,room,course) {
    console.log("makeGetBookingFunc; uri: " + JSON.stringify(uri));
    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            jwtToken: jwtToken,
            id:0,               //messo per prova
            timestamp: 0,        //messo per prova
            date: date,
            start: 0,            //messo per prova
            end: 0,
            //clockTime: clockTime,
            //college: college,
            room: room,
            teaching: 0
            //course: course
        }),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }).then(function (response) {
        console.log('RES: ' + JSON.stringify(response));
    });
};






