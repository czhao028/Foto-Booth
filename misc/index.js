#!/usr/bin/nodejs



var express = require('express')
var app = express();
var path= require('path')


app.set('port', process.env.PORT || 8080);

app.use('/js',express.static(path.join(__dirname, 'js')));
app.use('/Lab0',express.static(path.join(__dirname, 'Lab0')));
app.use('/Lab1',express.static(path.join(__dirname, 'Lab1')));

app.use('/JuniorYear',express.static(path.join(__dirname, 'JuniorYear')));
app.use('/Boot',express.static(path.join(__dirname, 'Boot')));
app.use('/foo',express.static(path.join(__dirname, 'foo')));


app.get('/', function (req, res, next) {
    console.log("User arrived at page");
    res.sendFile(__dirname+'/index.html');
});

/**app.get('/Lab1', function (req, res, next) {
    res.sendFile(__dirname+'/Lab1/index.html');    
});
// app.get('/Lab0', function (req, res, next) { res.sendFile('/web/user/2018czhao/publicJunior Year/index.html');   
// });
app.get('/JuniorYear', function (req, res, next) {
    console.log("Junior Year");
    res.sendFile(__dirname+'/JuniorYear/index.html');   
});**/

app.get('/borders', function (req, res, next) {
    string = ""
    if (typeof req.query.states != 'undefined') {
        list = req.query.states.split(",");
        max = req.query.maxborders
        console.log(list)
        for(count = 0; count < list.length; count++){
            string += list[count]+': ['+borders[list[count]].slice(0, max)+']'+"<br>";
        } 
        res.send(string)
    }
    else {                
        res.send('invalid query');        
    }

});

app.post('/all', function (req, res, next) {        theBigString = JSON.stringify(borders);        res.send(theBigString);
});

app.post('/cheese', function (req, res, next) {        res.send('swiss');
});

app.get('/cheese', function (req, res, next) {        res.send('swiss');
});


var listener = app.listen(app.get('port'), function() {    console.log( 'express running, port: '+listener.address().port );
});


var borders = {
	'alabama':['florida', 'georgia', 'mississippi', 'tennessee'],
	'alaska':['none'],
	'arizona':['california', 'colorado', 'nevada', 'new mexico', 'utah'],
	'arkansas':['louisiana', 'mississippi', 'missouri', 'oklahoma', 'tennessee', 'texas'],
	'california':['arizona', 'nevada', 'oregon'],
	'colorado':['arizona', 'kansas', 'nebraska', 'new mexico', 'oklahoma', 'utah', 'wyoming'],
	'connecticut':['massachusetts', 'new york', 'rhode island'],
	'delaware':['maryland', 'new jersey', 'pennsylvania'],
	'florida':['alabama', 'georgia'],
	'georgia':['alabama', 'florida', 'north carolina', 'south carolina', 'tennessee'],
	'hawaii':['none'],
	'idaho':['montana', 'nevada', 'oregon', 'utah', 'washington', 'wyoming'],
	'illinois':['indiana', 'iowa', 'michigan', 'kentucky', 'missouri', 'wisconsin'],
	'indiana':['illinois', 'kentucky', 'michigan', 'ohio'],
	'iowa':['illinois', 'minnesota', 'missouri', 'nebraska', 'south dakota', 'wisconsin'],
	'kansas':['colorado', 'missouri', 'nebraska', 'oklahoma'],
	'kentucky':['illinois', 'indiana', 'missouri', 'ohio', 'tennessee', 'virginia', 'west virginia'],
	'louisiana':['arkansas', 'mississippi', 'texas'],
	'maine':['new hampshire'],
	'maryland':['delaware', 'pennsylvania', 'virginia', 'west virginia'],
	'massachusetts':['connecticut', 'new hampshire', 'new york', 'rhode island', 'vermont'],
	'michigan':['illinois', 'indiana', 'minnesota (water border)', 'ohio', 'wisconsin'],
	'minnesota':['iowa', 'michigan (water border)', 'north dakota', 'south dakota', 'wisconsin'],
	'mississippi':['alabama', 'arkanssas', 'louisiana', 'tennessee'],
	'missouri':['arkansas', 'illinois', 'iowa', 'kansas', 'kentucky', 'nebraska', 'oklahoma', 'tennessee'],
	'montana':['idaho', 'north dakota', 'south dakota', 'wyoming'],
	'nebraska':['colorado', 'iowa', 'kansas', 'missouri', 'south dakota', 'wyoming'],
	'nevada':['arizona', 'california', 'idaho', 'oregon', 'utah'],
	'new hampshire':['maine', 'massachusetts', 'vermont'],
	'new jersey':['delaware', 'new york', 'pennsylvania'],
	'new mexico':['arizona', 'colorado', 'oklahoma', 'texas', 'utah'],
	'new york':['connecticut', 'massachusetts', 'new jersey', 'pennsylvania', 'rhode island (water border)', 'vermont'],
	'north carolina':['georgia', 'south carolina', 'tennessee', 'virginia'],
	'north dakota':['minnesota', 'montana', 'south dakota'],
	'ohio':['indiana', 'kentucky', 'michigan', 'pennsylvania', 'west virginia'],
	'oklahoma':['arkansas', 'colorado', 'kansas', 'missouri', 'new mexico', 'texas'],
	'oregon':['california', 'idaho', 'nevada', 'washington'],
	'pennsylvania':['delaware', 'maryland', 'new jersey', 'new york', 'ohio', 'west virginia'],
	'rhode island':['connecticut', 'massachusetts', 'new york (water border)'],
	'south carolina':['georgia', 'north carolina'],
	'south dakota':['iowa', 'minnesota', 'montana', 'nebraska', 'north dakota', 'wyoming'],
	'tennessee':['alabama', 'arkansas', 'georgia', 'kentucky', 'mississippi', 'missouri', 'north carolina', 'virginia'],
	'texas':['arkansas', 'louisiana', 'new mexico', 'oklahoma'],
	'utah':['arizona', 'colorado', 'idaho', 'nevada', 'new mexico', 'wyoming'],
	'vermont':['massachusetts', 'new hampshire', 'new york'],
	'virginia':['kentucky', 'maryland', 'north carolina', 'tennessee', 'west virginia'],
	'washington':['idaho', 'oregon'],
	'west virginia':['kentucky', 'maryland', 'ohio', 'pennsylvania', 'virginia'],
	'wisconsin':['illinois', 'iowa', 'michigan', 'minnesota'],
	'wyoming':['colorado', 'idaho', 'montana', 'nebraska', 'south dakota', 'utah'],
}


 app.get('/foo', function (req, res, next) {        res.send('<p>this is some fancy html</p>');
});


 app.get('/foo.html', function (req, res, next) {        res.send("OMG!!!",404);
});


// GET and POST requests


// var express = require('express')
// var app = express();
// var path= require('path')


// app.set('port', process.env.PORT || 8080);


// app.use('/Lab1',express.static(path.join(__dirname, 'Lab1')));
// app.use('/Lab0',express.static(path.join(__dirname, 'Lab0')));
// app.use('/JuniorYear',express.static(path.join(__dirname, 'JuniorYear')));


// app.get('/', function (req, res, next) {        res.sendFile(__dirname+'/index.html');
// });







// app.get('/states', function (req, res, next) {        if (typeof req.query.states != 'undefined') {                res.send(states[req.query.states])        } else {                res.send('invalid query');        }
// });


// app.post('/all', function (req, res, next) {        theBigString = JSON.stringify(states);        res.send(theBigString);
// })




// var listener = app.listen(app.get('port'), function() {    console.log( 'express running, port: '+listener.address().port );
// });


// var states = {        'az': 'arizona',        'ny': 'new york'
// };