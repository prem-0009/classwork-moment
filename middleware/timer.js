// create a middleware called timer
// modularize it and hook it up in the index.js
// https://momentjs.com/
// lookup npm moment to find npm package
// study the docs to find the format requested
// time should display like this: // June 4, 2020 12:47 PM
// every time you run your app.get it should log the time in the format above in your terminal
const moment = require('moment')
function timer(req, res, next){

console.log(moment().format("MMMM D, YYYY, h:mm a"))
    next();
}


module.exports = timer;

