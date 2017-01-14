"use strict";

var express = require('express');
var fs = require('fs');
var app = express();
var mustacheExpress = require('mustache-express');
var funfactsCreate = require('./funfacts.js');
var cookieParser = require('cookie-parser');

// var moment = require('moment');
// moment().format();

// render pages
app.engine('html', mustacheExpress());   

app.set('view engine', 'html');  
app.set('views', __dirname + '/public');

app.use(cookieParser());

// old dateNow function
// adjust dateNow function for timezone offset
// function dateNow() {
//     // change back to 11 for December!
//     if (new Date().getMonth() === 11) {
//         return new Date().getDate();
//     } else {
//         return 0;
//     }
// }

function checkMonth(month, day) {
    // changed to January 
    if (month === 0) {
        return day;
    } else {
        return 0;
    }
}

function dateNow(offset) {
    // parse in cookie for offset
    var date = new Date();
    var month = date.getUTCMonth();
    var day = date.getUTCDate();
    var hours = date.getUTCHours();

    var offsetNum = parseInt(offset);

    if (offsetNum === 0) {
        return checkMonth(month, day);
    }

    var offsetHours = offsetNum / 60;

    // positive number is less than UTC
    if (offsetHours > 0) {
        var localHours = hours - offsetHours;
        if (localHours < 0) {
            return checkMonth(month, day - 1);
        } else {
            return checkMonth(month, day);
        }
    }

    if (offsetHours < 0) {
        // taking away a negative, will produce positive 
        var localHours = hours - offsetHours;
        if (localHours > 24) {
            return checkMonth(month, day + 1);
        } else {
            return checkMonth(month, day);
        }
    }
}

// create list of fun facts - add different day fun fact for each day
app.get('/', function (req, res) {
    if (req.cookies.timezone == null) {
        res.render('timezonePage');
        return;
    }
    // Get the cookie for this peron's request
    var datesChocEaten = parseChocCookie(req.cookies.chocsEaten);
    if (datesChocEaten == null) {
        datesChocEaten = [];
    }
    var datesChocBitten = parseChocCookie(req.cookies.chocsBitten);
    if (datesChocBitten == null) {
        datesChocBitten = [];
    }
    console.log(datesChocEaten);
    var calendarContent = funfactsCreate(dateNow(req.cookies.timezone), datesChocEaten, datesChocBitten);
    res.render('index', calendarContent);
});

app.get('/clear', function(req, res) {
    res.clearCookie("chocsEaten");
    res.clearCookie("chocsBitten");
    res.clearCookie("timezone");
    res.redirect("/");
})
// Input: the contents of the cookie (which may be undefined)
// Output: Array of dates eaten; otherwise failure - marked by 'undefined'
function parseChocCookie(chocsStr) {
    // If no cookie exists respond with cookie of empty string
    if (chocsStr == null || chocsStr === "") {
        return undefined;
    } 
    // Check if chocsStr is less than 80 characters and is only numbers or ',' 
    if ((chocsStr.length > 80) || (!chocsStr.match(/^[0-9,]+$/))) {
        return undefined;
    }
    // Change chocsString into Array ["1", "4"] -> [1,4]
    var chocsArray = chocsStr.split(',');
    let dates = [];
    for (let s of chocsArray) {
        if (s === "") {
            return undefined;
        }
        let date = parseInt(s);
        if (date > 24) {
            return undefined;
        }
        dates.push(date);
    }
    return dates;
}

// set static folder
app.use(express.static(__dirname + '/public')); 

var portListen = process.env.PORT || 5000;

app.listen(portListen, function () {
    console.log('Example app listening on port ', (portListen));
});
