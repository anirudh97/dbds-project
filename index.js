const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

var usersRouter = require('./routes/users.route');
var itemsRouter = require('./routes/items.route');
var auctionsRouter = require('./routes/auctions.route');

const app = express();
const port = 3000;

app.use(session({secret: 'session secret', name: 'sessionId', saveUninitialized: false, resave: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Default route
app.get("/", (req, res) => {
  res.render('pages/index');
});

app.use("/", usersRouter);
app.use("/items", itemsRouter);
app.use("/auctions", auctionsRouter);

app.use(express.static(__dirname + "/public"));

// Server Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


