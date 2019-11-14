var fs = require('fs');
var express = require('express');
var request = require ('request');
var response = require ('response');
var app = express();
var router = express.Router();
var mime = require('mime');
var path = require('path');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var JWTHelper = require('jwthelper');
var helper = JWTHelper.createJWTHelper();
var jwtDecode = require('jwt-decode');
var session = require('express-session');
var jwt   = require('jsonwebtoken');
//var cheerio     = require('cheerio');
var interceptor = require('express-interceptor');
var jwtToken;

app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/font-awesome'));
app.use(express.static(__dirname + '/email-templates'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));



app.use(function (req, res, next) {
    // do something with the request
    var jwtToken;
    console.log('testing');
    var nweText = req.body;
    console.log('body is: ' + JSON.stringify(nweText));

    if(nweText !== null && nweText !== undefined) {
        jwtToken = JSON.parse(nweText).token;
        console.log('token is: ' + JSON.stringify(jwtToken));
    }

    //console.log('nwe is: ' + nwe);
    next(); // MUST call this or the routes will not be hit
});





/*var server = http.createServer(function (request, response) {
  router.css(request, response);
  router.home(request, response);
  router.user(request, response);
});*/




function expiredToken(session){

    console.log('called expired token');
    /*console.log('localstorage is: ' + JSON.stringify(localStorage));
    var accessToken = localStorage.getItem('accessToken');
    console.log('access token is: ' + JSON.stringify(accessToken));*/
    //var helper = new JwtHelperService();
    console.log('trying decode token');
    var decodedToken = jwtDecode(session.token);
    console.log('decodedToken is: ' + JSON.stringify(decodedToken));
    var expirationDate = helper.getTokenExpirationDate(accessToken);
    var isExpired = helper.isTokenExpired(accessToken);
    if(helper.isTokenExpired(accessToken)){
        console.log('Login session expired');
    }
    else {
        console.log('not expired');
    }
}


var finalParagraphInterceptor = interceptor(function(req, res){
    return {
        // Only HTML responses will be intercepted
        isInterceptable: function(){
            return /text\/html/.test(res.get('Content-Type'));
        },
        // Appends a paragraph at the end of the response body
        intercept: function(body, send) {
            var $document = cheerio.load(body);
            $document('body').append('<p>From interceptor!</p>');

            send($document.html());
        }
    };
})






router.get('/login.html',function(req,res){
    console.log('dirname is: ' + __dirname);
    //nwe = 'aaaa';
    res.sendFile(path.join(__dirname + '/login.html'));
});


router.get('/mailbox.html',function(req,res){
    //console.log('request is: ' + JSON.stringify(req.headers));
    //var res = jwt.decode(jwtToken,{complete:true});
    //console.log('res is: ' + JSON.stringify(res));

    res.sendFile(path.join(__dirname + '/mailbox.html'));
});

router.get('/trashbox.html',function(req,res){
    res.sendFile(path.join(__dirname + '/trashbox.html'));
});

router.get('/room_hours.html',function(req,res){
    res.sendFile(path.join(__dirname + '/room_hours.html'));
});

router.get('/register.html',function(req,res){
    res.sendFile(path.join(__dirname + '/register.html'));
});

router.get('/profile.html',function(req,res){
    res.sendFile(path.join(__dirname + '/profile.html'));
});

router.get('/personal_hours.html',function(req,res){
    res.sendFile(path.join(__dirname + '/personal_hours.html'));
});

router.get('/new_reservation.html',function(req,res){
    console.log('this is a new reservation!');
    res.sendFile(path.join(__dirname + '/new_reservation.html'));
});

router.get('/mail_detail.html',function(req,res){
    res.sendFile(path.join(__dirname + '/mail_detail.html'));
});

router.get('/mail_compose.html',function(req,res){
    res.sendFile(path.join(__dirname + '/mail_compose.html'));
});


app.get('/dashboard_2.html',function(req,res){
    console.log('called dashboard');
    //console.log('full url: ' + req.url + '/dashboard_2.html');
    //res.sendFile(path.join(__dirname + '/dashboard_2.html'));

    res.sendFile(__dirname + '/dashboard_2.html', function(err) {
        if (err) {
            console.log('There was an error: ' + err);
            res.status(err.status).end();
        }
    });

});

router.get('/500.html',function(req,res){
    res.sendFile(path.join(__dirname + '/500.html'));
});

router.get('/404.html',function(req,res){
    res.sendFile(path.join(__dirname + '/404.html'));
});

router.get('/',function(req,res){

    //res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
    /*
    console.log(path.join(__dirname + '/index.html'));
    fs.readFile(path.join(__dirname + '/index.html'),null, function(error,data){
        if(error){
            throw error;
        }
        else{
            res.write(data);
            
        }
    })
    */
});

router.get('/a',function(req,res){

    console.log('called post a');
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/dashboard_2.html'));
    /*
    console.log(path.join(__dirname + '/index.html'));
    fs.readFile(path.join(__dirname + '/index.html'),null, function(error,data){
        if(error){
            throw error;
        }
        else{
            res.write(data);

        }
    })
    */
});



router.post('/',function(req,res){

    console.log('called post!');
    //res.sendFile(path.join(__dirname + '/index.html'));
    res.sendFile(path.join(__dirname + '/index.html'));
    /*
    console.log(path.join(__dirname + '/index.html'));
    fs.readFile(path.join(__dirname + '/index.html'),null, function(error,data){
        if(error){
            throw error;
        }
        else{
            res.write(data);
            
        }
    })
    */
});



/*
  var server = http.createServer(function (request, response) {

    response.writeHead(200,{"Content-type" : "text/css"});
    var fileContents = fs.readFileSync('./public/css/style.css', {encoding: "utf8"}, function(err, data) {
        if (!err) {
            response.write(data);
        } else {
            console.log(err);
        }
    });

    

});
*/
/*
fs.readFile('index.html', function (err, html) {
    console.log('reading file');
    if (err) {
        throw err; 
    }
    var url = __dirname + '/index.html';
    var mimeType = mime.lookup(url);

    http.createServer(function(request, response) {
        consolelog('creating server');
        response.writeHeader(200, {"Content-Type": "text/html"});  // <-- HERE!
        response.write(html);  // <-- HERE!
        response.end();  
    }).listen(1337, '127.0.0.1');
});
*/


app.use('/',router);

app.listen(process.env.PORT || 1337,function(){

   // router.css(request,response);
    
    console.log("Listening at PORT 1337");
  });


module.exports = app