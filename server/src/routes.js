var AuthenticationController = require('./controllers/AuthenticationController');
var AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = function (app) {
  app.post('/registracija',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);
};
