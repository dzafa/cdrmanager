var AuthenticationController = require('./controllers/AuthenticationController');
var AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

module.exports = function (app) {
  app.post('/registracija',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

  app.post('/prijava',
    AuthenticationControllerPolicy.login,
    AuthenticationController.login);

  app.get('/klijenti');
};
