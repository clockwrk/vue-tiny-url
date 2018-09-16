
var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;


app.post('/api', (req, res) => {
  res.send('HERE_IS_YOUR_TINY_URL');
})

app.get('/api', (req, res) => {
  res.json({message: 'Welcome to the Server'});
})

app.listen(port);
console.log('server started '+ port);
