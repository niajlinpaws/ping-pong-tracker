const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const { config } = require('dotenv');

const playersRouter = require('./routes/players');
const matchesRouter = require('./routes/matches');
const { seedPlayers } = require('./seed');

config();

const app = express();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, async (err) => {
  try {
    if (err) throw err;
    console.log('Database Connected');
    await seedPlayers();
  } catch (e) {
    console.log(e.message);
  }
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Version, Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/players', playersRouter);
app.use('/matches', matchesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: 'Something Went Wrong, Please Try Again!',
  });
});

module.exports = app;
