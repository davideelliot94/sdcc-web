var fs = require('fs');
var express = require('express');
var request = require ('request');
var response = require ('response');
var app = express();
var router = express.Router();
var mime = require('mime');
var path = require('path');


app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/font-awesome'));
app.use(express.static(__dirname + '/email-templates'));
app.use(express.static(__dirname + '/fonts'));
app.use(express.static(__dirname + '/js'));
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/img'));

/*function css(response) {
    var cssFile = fs.readFileSync("./public/css/style.css", {encoding: "utf8"});
    response.write(cssFile);
}*/



/*var server = http.createServer(function (request, response) {
  router.css(request, response);
  router.home(request, response);
  router.user(request, response);
});*/


//var router = require('./router.js');
/*
function css(request, response) {
    if (request.url === '/styles.css') {
        response.writeHead(200, {'Content-type' : 'text/css'});
        var fileContents = fs.readFileSync('./public/css/styles.css', {encoding: 'utf8'});
        response.write(fileContents);
    }
}
*/

router.get('/login.html',function(req,res){
    res.sendFile(path.join(__dirname + '/login.html'));
});

router.get('/mailbox.html',function(req,res){
    res.sendFile(path.join(__dirname + '/mailbox.html'));
});

router.get('/login.html',function(req,res){
    res.sendFile(path.join(__dirname + '/login.html'));
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
    res.sendFile(path.join(__dirname + '/new_reservation.html'));
});

router.get('/mail_detail.html',function(req,res){
    res.sendFile(path.join(__dirname + '/mail_detail.html'));
});

router.get('/mail_compose.html',function(req,res){
    res.sendFile(path.join(__dirname + '/mail_compose.html'));
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

router.get('/index.html',function(req,res){

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

router.get('/dashboard_2.html',function(req,res){

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


