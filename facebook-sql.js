#!/usr/bin/nodejs

var express = require('express');
var app = express();
var mysql = require('mysql');
var comprehend = require('array-comprehension');

//ADD APP.USE

// PORT SETUP - NUMBER SPECIFIC TO THIS SYSTEM
app.set('port', process.env.PORT || 8080 );


var connection = mysql.createConnection({
  database : 'site_2018czhao',
  host     : 'mysql1.csl.tjhsst.edu',
  port     : 3306,
  user     : 'site_2018czhao',
  password : 'FuaJGEmUpHqUuZPUwTaNv3mt'
});

connection.connect();

app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/storeName', function(req, res){
    var name = req.query.name;
    connection.query("INSERT INTO Users (Name) VALUES ('" + name + "')", function(error1, results1){
        if(error1) throw error1;
        console.log(name + "inserted");
    });
});

app.get("/getName", function(req, res){
    var name = req.query.name;
    connection.query("SELECT Name FROM Users WHERE Name = '" + name + "'", function(error, results, fields){
        try{
            results.Name[0];
            res.send("Found");
        }
        catch(e){
            res.send("N/A");
        }
        
    });
});

// // -------------- listener -------------- //
var listener = app.listen(app.get('port'), function() {
  console.log( 'Express server started on port: '+listener.address().port );
});
