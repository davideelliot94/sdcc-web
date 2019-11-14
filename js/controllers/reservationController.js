var uri = "http://localhost:3000/api/v1/saveBooking";

const submitReservation(val1,jwtToken) {
    console.log("makeGetBookingFunc; uri: " + JSON.stringify(uri));
    fetch(uri, {
        method: 'POST',
        body: JSON.stringify({
            token: jwtToken,
            value: val1
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

