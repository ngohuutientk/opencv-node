/*const http = require('http');
const addon = require('./build/Release/addon');
const fs = require('fs');

const server = http.createServer(function(req, res){

    const buffer = new Buffer(addon.opencv());
    //var toBase64 = buffer.toString('base64');
    console.log(buffer);

    /!*fs.writeFile("out.jpg", addon.opencv(), {encoding: 'base64'},
     function(err, data) {
         if (err) {
             console.log('err', err);
         }
             console.log('success');
     });*!/
    const json = { buffe: buffer};
        res.writeHead(200, {
            'Content-Length': Buffer.byteLength(buffer),
            'Content-Type': 'text/plain'
        });
    res.end();
});

server.listen(3000, function(){
    console.log('Connected Successfull!');
});*/

const express = require('express')
const app = express()
const path = require('path');
const addon = require('./build/Release/addon');
const btoa = require('btoa');
const port = 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    /*const buffer = new ArrayBuffer(addon.opencv());
    const toBase64 = buffer.toString('base64');*/
    console.log(addon.opencv());
    //var b64encoded = btoa(String.fromCharCode.apply(null,buffer));
    var datajpg = "data:image/jpg;base64," + addon.opencv();
    console.log(datajpg);
    const json = { buffer: datajpg};

    res.render('index',{data: json});
});

app.listen(port, () => console.log(`Connected Successfull! ${port}!`))



