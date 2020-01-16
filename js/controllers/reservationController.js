var uri = "http://3.214.93.75:4000/api/v1/makeBooking";
var ruri= "http://34.197.9.50:3001/api/v1/rooms"
var suri = "http://34.197.9.50:3000/api/v1/search";
var bbruri = "http://3.214.93.75:4000/api/v1/bookingsByRoomName";
var idburi = "http://3.214.93.75:4000/api/v1/bookingsByUserId";
var turi = "http://34.197.9.50:3002/api/v1/teachingsByStudent";
var buri =  "http://3.214.93.75:4000/api/v1/bookings";
var eraseuri = "http://3.214.93.75:4000/api/v1/deleteOld";

//elastik booking 3.214.93.75
//elastik img 34.195.247.230
// elastik rooms 34.197.9.50


function submitReservation(jwtToken,date,interval,room,course,micro,project) {
    console.log("makeGetBookingFunc; uri: " + JSON.stringify(uri));
    fetch(uri, {
        method: 'POST',
        body:
        JSON.stringify({                        //messo per prova
            timestamp: Date.now(),        //messo per prova
            date: date,
            slot: interval,            //messo per prova
            user: sessionStorage.getItem("userId"),
            room: room,
            teach: course,
            proj: project,
            mic: micro
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

async function loadFunc(){

    console.log("LoadCalled");

    const f = fetch(suri,{
                    method: 'GET',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                
                });

    const results = await Promise.resolve(f);
    const res = await results.json();
    console.log(res);
    return res;

};


async function loadRoomsFunc(){

    console.log("LoadCalled");

    const f = fetch(ruri,{
                    method: 'GET',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                
                });

    const results = await Promise.resolve(f);
    const res = await results.json();
    console.log(res);
    return res;

};


async function getBookingsByRoom(room){

    console.log("Invio :" + room)

    const f = fetch(bbruri,{
        method: 'POST',
        body: JSON.stringify(
            {name: room}
        ),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    });

    const results = await Promise.resolve(f);
    console.log(results);
    const res = await results.json();
    console.log(res);
    return res;

}

async function getBookingsByUser(user){

    console.log("Invio :" + user)

    const f = fetch(idburi,{
        method: 'POST',
        body: JSON.stringify(
            {user: user}
        ),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    });

    const results = await Promise.resolve(f);
    console.log(results);
    const res = await results.json();
    console.log(res);
    return res;

}


async function getBookingsByUserTeachings(user){

    const t = fetch(turi,{
        method: 'POST',
        body: JSON.stringify(
            {value: user}
        ),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    });

    const b = fetch(buri,{
        method: 'POST',
        body: JSON.stringify(
            {value: user}
        ),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    });

    var res = [];
    const promises = [t, b];
    const [teachings, bookings] = await Promise.all(promises);
    const teachJson = await teachings.json();
    const bookJson = await bookings.json();
    teachJson.forEach(tt => {
        bookJson.forEach(bb => {
            if(tt.name == bb.teaching.name){
                res.push(bb);
            }
        });
        
    });
    
    return res;

}

async function eraseOld(){

    const f = fetch(eraseuri,{
        method: 'POST',
        body: JSON.stringify(
            {date: Date.now()}
        ),
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    
    });

}