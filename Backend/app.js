const express = require('express');

const auth_routes = require('./route/auth_routes');

const err = require('./error_handler/error');

const error_handler = require('./error_handler/error_controller');

const app = express();

app.use(express.json());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});

app.use('/auth', auth_routes);

app.all('*', (req, res, next) => {
  throw new err(`Can't find ${req.originalUrl} on this server!`, 404);
});

app.use(error_handler);

module.exports = app;
