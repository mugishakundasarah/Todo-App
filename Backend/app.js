const express = require('express')
const app = express();
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const flash = require('connect-flash');
const { connectMongoDb } = require('./models/connectToDB')
const settings = require('./controllers/settings')

const PORT = process.env.PORT || settings.port

connectMongoDb()

app.use(session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


app.use(function(req, res, next) {
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
})

// app.use('/users', users)
// app.use('/todo', todos)

module.exports = {
  app: app,
  PORT: PORT
}