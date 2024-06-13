const express = require('express');
const app = express();
const path = require('path');
const http = require('http');
const fs = require('fs');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { disconnect } = require('process');
const io = new Server(server);

var mysql = require('mysql');
var username;
var password;
var prenom;
var nom;
var sexe; 
var rec;
var photo = "null";
var numbip = "null";
var loc = "null";
let socket = null;



var options = {
    root: path.join('./')
};

var con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the MySQL DataBase!");
  con.query("USE ma_base", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
  });
}); 

// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage');
  console.log('GET request received');
  console.log('message:' + req.query.bipID);
  numbip = req.query.bipID;
  console.log('message:' + req.query.loc);
  loc = req.query.loc;


if (numbip != "null") {
  con.query("select * from etudiants where numbip = " + '\''+ numbip + '\''+ ";", function (err, result) {
    if (err) throw err;
  
  if (result.length > 0) {
    username = result[0].username;
    nom = result[0].nom;
    prenom = result[0].prenom;
    sexe = result[0].sexe;
    rec = result[0].rec;
    photo = result[0].photo;
    if (socket != null) {
    socket.emit('loc', loc);
    socket.emit('nom', nom);
    socket.emit('prenom', prenom);
    socket.emit('photo', photo);
    socket.emit('alert');
    }
  }
});
}
});

// GET method route for photo
app.get('/photo/:photo', (req, res) => {
  // Envoyer la photo en utilisant res.sendFile()
  res.sendFile('/path/to/your/photo'+photo+'.jpg');
});

// GET method route for photo
app.get('/photo', (req, res) => {
  // Envoyer la photo en utilisant res.sendFile()
  res.sendFile('/path/to/your/photo.jpg');
});

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage');
  console.log('POST request received:');

  console.log('message :' + req.query.msg);
});

  io.on("connection", (sock) => {
    sock.emit("hello", "world");
    socket = sock;
    console.log("a new user");
    fs.appendFile('DonneesServeur.txt', 'a new user connected\n', function (err) {if (err) throw err;});
    
    socket.on("add", (args) => {
      console.log("add");
      con.query("insert into etudiants values (null," +'\''+ nom +'\''+ ',' +'\''+ prenom + '\''+',' +'\''+ sexe +'\''+',' +'\''+ rec + '\''+',' + null + ',' + numbip + ',' +");", function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
    });
    socket.on("password:", (args) => {
      console.log("password : " + args);
      password = args;
    });
    socket.on("username:", (args) => {
      console.log("username : " + args);
      username = args;
    });
    socket.on("prenom:", (args) => {
      console.log("prenom : " + args);
      prenom = args;
    });
    socket.on("nom:", (args) => {
      console.log("nom : " + args);
      nom = args; 
    });
    socket.on("sexe:", (args) => {
      console.log("sexe : " + args);
      sexe = args;
    });
    socket.on("rec:", (args) => {
      console.log("rec : " + args);
      rec = args;
    });
    socket.on("photo:", (args) => {
      console.log("photo : " + args);
      photo = args;
    });
    socket.on("numbip:", (args) => {
      console.log("numbip : " + args);
      numbip = args;
    });
  });
    socket.on("ConnectionRequest", () => {
      console.log("ConnectionRequest");
      con.query("select * from etudiants where username = " + '\''+username +'\''+ " and password = " + '\''+password +'\''+ ";", function (err, result) {
        if (err) throw err;
        if (result.length > 0) {
          console.log("connection successfully treated");
          socket.emit("ConnectionAccepted");
        }
        else {
          console.log("connection failed");
          socket.emit("ConnectionRefused");
        }
        console.log("connection successfully treated");
      });
    });

    socket.on("alert:", (id, userN) => {
      console.log("username : " + userN); 
      socket.emit(userN);
      console.log("id:" + id);
      socket.emit(id);
      username = args;
    });


    socket.on("password:", (args) => {
      console.log("password : " + args);
      password = args;
    });



server.listen(2500, () => {
  console.log('listening on *:2500');
});