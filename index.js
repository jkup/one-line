const cool = require('cool-ascii-faces')
const funky_intro = require('funny-words')
const express = require('express')

const app = express()

app.get('/', function(req, res) {
  res.send('Hello Mars!');
})

console.log(cool())
console.log(funky_intro("Welcome to jkup, a Node.js app where you can only contribute one line at a time. Inspired by jkup himself."))
