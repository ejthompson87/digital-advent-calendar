var express = require('express');
var fs = require('fs');
var app = express();
var mustacheExpress = require('mustache-express');
var funfactsCreate = require('./funfacts.js');
var cookieParser = require('cookie-parser');


// render pages
app.engine('html', mustacheExpress());   

app.set('view engine', 'html');  
app.set('views', __dirname + '/public');

app.use(cookieParser());

function dateNow() {
    // change back to 11 for December!
    if (new Date().getMonth() === 10) {
        return new Date().getDate();
    } else {
        return 0;
    }
}

// function getDate(timestamp) {
//     // Multiply by 1000 because JS works in milliseconds instead of the UNIX seconds
//     var date = new Date(timestamp * 1000);
//     var month = date.getUTCMonth() + 1; // getMonth() is zero-indexed, so we'll increment to get the correct month number
//     var day = date.getUTCDate();

//     month = (month < 10) ? '0' + month : month;
//     day = (day < 10) ? '0' + day : day;
//     localDate = [month, day];

//     return localDate;
// }

// create list of fun facts - add different day fun fact for each day
app.get('/', function (req, res) {
    // Get the cookie for this person's request
    var dates = parseChocCookie(req.cookies.chocsEaten);
    if (dates == null) {
        dates = [];
    }
    var datesChocBitten = parseChocCookie(req.cookies.chocsBitten);
    if (datesChocBitten == null) {
        datesChocBitten = [];
    }
    console.log(dates);
    var calendarContent = funfactsCreate(dateNow(), dates, datesChocBitten);
    res.render('index', calendarContent);
});

app.get('/clear', function(req, res) {
    res.clearCookie("chocsEaten");
    res.clearCookie("chocsBitten");
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

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});