const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const {sequelize} = require('./models');
const config = require('../config/config');

const app = express();

app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'));
app.use('/static', express.static('public'));
require('./routes')(app);

sequelize.sync({}).then(() => {
  app.listen(config.port);
  console.log('Server je pokrenut na portu: ' + config.port);
});
