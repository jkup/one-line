const cool = require('cool-ascii-faces')
const funky_intro = require('funny-words')
const express = require('express')
const emoji = require('emoji-cool');

const app = express()

app.get('/', function(req, res) {
  res.send('Hello Mars!');
})

app.get('/hangUnlessSomeoneElseReturnsFromHere', function(req, res) {}); // To make this route work, someone else needs to return a response

console.log(emoji)
console.log(cool())
console.log(funky_intro("Welcome to jkup, a Node.js app where you can only contribute one line at a time. Inspired by jkup himself."))

app.listen(process.env.PORT || 3000, function () {});
console.log("I like this idea. :p");
