const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.get('*.js', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/javascript');
  next();
 });

 app.get('*.css', function(req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  res.set('Content-Type', 'text/css');
  next();
 });

 app.use(express.static(path.join(__dirname, '../public/')));

 app.get('*', function(req, res) {
   res.sendFile(path.join( __dirname, '../public/index.html'));
 });

app.listen(process.env.PORT || 8080, console.log(`Server is listening on port 8080`));
