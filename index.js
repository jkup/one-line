const cool = require('cool-ascii-faces')
const funky_intro = require('funny-words')
const express = require('express')
const emoji = require('emoji-cool');

const app = express()
app.engine('html', require('ejs').renderFile); app.set('view engine', 'html');

app.get('/', function(req, res) {
  res.send('Hello Mars! <br> Days until next year:' + Math.round(( new Date().setFullYear(new Date().getFullYear() + 1, 0, 1) - new Date() )/(1000 * 60 * 60 * 24)));
})

app.get('/source', function(req, res){ res.redirect('https://github.com/jkup/one-line/');
  console.log("Here you can contribute to this project!")})
app.get('/hangUnlessSomeoneElseReturnsFromHere', function(req, res) {
  res.redirect('https://www.google.com/?tbm=isch&q=when+will+my+husband+return+from+war');
}); // To make this route work, someone else needs to return a response
app.get('/useless', function(req, res){ res.redirect('http://www.theuselessweb.com/'); })
app.get('/findMoreHacktoberfestLabelledIssues', function(req, res){ res.redirect('http://issuehub.io/?label[]=hacktoberfest'); })
app.get('/randNum/cake', function(req, res) { res.json({num: 44}); });
app.get('/hello/:name', function(req, res) { res.json({"hello" : req.params.name}); })
app.get('/goodbye/:name', function(req, res) { res.json({"goodbye" : req.params.name}); })
app.get('/admin', function(req, res) { res.json("ACCESS DENIED"); })
app.get('/haveSomeFunCats', function(req, res) { res.redirect('http://www.catgifpage.com/'); });
app.get('/leftpad/:val/:len', function(req, res) { res.json({ 'response': (+req.params.len > 0) ? (Array(+req.params.len-req.params.val.length).fill(0).join('') + req.params.val).slice(-req.params.res) : req.params.val })});
app.get('/add/:x/:y', function(req, res) { res.json({x: req.params.x, y: req.params.y, sum: (Number(req.params.x) + Number(req.params.y))}); });
app.get('/subtract/:x/:y', function(req, res) { res.json({x: req.params.x, y: req.params.y, difference: Number(req.params.x) - Number(req.params.y)}); });
app.get('/fizzbuzz', function(req, res) { for(var i = 1, arr = []; i<51 ;i++) { arr.push(((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'buzz')) || i)}; res.json(arr); });
app.get('/meaningOfLife', function(req, res) { res.json({ 1337: 42 }) });
app.get('/hacktoberfest-countdown', function (req, res) {
	res.send('Hacktoberfest end is in ' + new Date(new Date(2016, 09, 31).getTime() - Date.now()).getDate() + ' days.');
	console.log("Better get those PRs in soon, buddy!");
});
app.get('/currency/:from/:to', function(req, res) { res.redirect('http://api.fixer.io/latest?base=' + req.params.from + '&symbols='+ req.params.to); });
app.get('/duckduckgo/:search', function(req, res) { res.redirect('https://duckduckgo.com/?q=' + req.params.search)})
app.get('/beAwesome', function(req, res){ res.redirect('https://github.com/sindresorhus/awesome'); })

app.use(function (req, res, next) { res.status(404); res.render('404'); });

console.log(emoji)
console.log(cool())
console.log(funky_intro("Welcome to jkup, a Node.js app where you can only contribute one line at a time. Inspired by jkup himself."))

var server = app.listen(process.env.PORT || 3000, function () {  // now we can close it if needed
  console.log("Server started");
});
app.use(express.static('public'));
console.log("I like this idea. :p");
