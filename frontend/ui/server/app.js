const express = require('express')
const bodyParser = require("body-parser");
const http = require("http");
const path = require('path');

const app = express()
app.use(bodyParser.json());
app.use('/api', require("./person"));

app.use(express.static(path.join(__dirname, '../dist')));
app.get('*', (req, res) => {
  res.sendFile(__dirname, '../dist/index.html');
});

const server = http.createServer(app)

module.exports = {
  server: server,
  app: app
}