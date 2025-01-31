const express = require("express");
const hbs = require('hbs');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.render("index", { title: "Hello, world!" });
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
