Digital Advent Calendar
=======================

A web-based advent calendar with virtual chocolates and fun facts behind each door.

## Local Development ##

## Prerequisites ##

Node.js 
* follow these steps to install: https://nodejs.org/en/download/
* require version v.6.1.0 or later

## Installing ##

Install dependencies from package.json file.  Includes:
* Express - https://expressjs.com/en/starter/installing.html
* Mustache - https://www.npmjs.com/package/mustache
* Cookie Parser - https://www.npmjs.com/package/cookie-parser

    $ npm install 

## Notes ##

* checkMonth function in server.js file will need to be updated to which ever month you would like to use the chocolate advent calendar.  Note, the month uses indexed dates; ie: December = 11. 
* can enter url + /clear to clear cookies - reseting chocolates in the calendar
* listening port set to 5000


## Built With ##

* [Express](https://expressjs.com/en/4x/api.html) - Node.js web application framework
* [Mustache](https://mustache.github.io/) - html templating tool 
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
* [Node.js](https://nodejs.org/en/docs/)

## Author ##

* **Emma Thompson** - (https://github.com/ejthompson87)

## Acknowledgments ##

* My husband for answering my many questions
* My developer friends who tested the app and tried mighty hard to break it 
