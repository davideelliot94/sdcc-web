var uri = "http://localhost:3001/api/v1/makeBooking";
var turi = "http://localhost:3003/api/v1/teachings";
var ruri = "http://localhost:3002/api/v1/rooms";
//var turi = "http://107.22.75.13:3003/api/v1/teachings";
//var ruri = "http://107.22.75.13:3002/api/v1/rooms";

function submitReservation(jwtToken,date,startTime,endTime,room,course) {
    var dateStart = new Date(date.getFullYear(),date.getMonth(),date.getDay(),startTime[0],startTime[1]);
    var dateEnd = new Date(date.getFullYear(),date.getMonth(),date.getDay(),endTime[0],endTime[1]);
    console.log("Date: " + dateStart + "Date: "+dateEnd);
    console.log("makeGetBookingFunc; uri: " + JSON.stringify(uri));
    fetch(uri, {
        method: 'POST',
        body:
        JSON.stringify({                        //messo per prova
            timestamp: Date.now(),        //messo per prova
            date: date,
            start: dateStart,            //messo per prova
            end: dateEnd,
            user: "Stringa Prova",
            room: room,
            teach: course
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

async function loadTeachingsFunc(){

    console.log("LoadTeachingsCalled");

    const f = fetch(turi,{
                    method: 'GET',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                
                });

    const results = await Promise.resolve(f);
    const res = await results.json();
    return res;

};


async function loadRoomsFunc(){

    console.log("LoadRoomsCalled");



    const f = fetch(ruri,{
                    method: 'GET',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                
                });

    const results = await Promise.resolve(f);
    const res = await results.json();
    return res;
        

};





