const express = require("express");
const hbs = require('hbs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'views'));

const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.render("index", { title: "Hello, world!" });
});

app.post("/submit", (req, res) => {
  const message = req.body.message;
  res.send(`
    <html>
      <body>
        <p>You said: ${message}</p>
        <p>Click <a href="/">here</a> to go back.</p>
      </body>
    </html>
  `);
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
