var AuthenticationController = require('./controllers/AuthenticationController');
var CustomersController = require('./controllers/CustomersController');
var SapController = require('./controllers/SapController');
var AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

const multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images/clients/logo');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});
var upload = multer({storage: storage});

module.exports = function (app) {
  app.post('/registracija',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

  app.post('/prijava',
    AuthenticationControllerPolicy.login,
    AuthenticationController.login);
  app.get('/sap', SapController.index);
  app.post('/sap', SapController.post);
  app.delete('/sap/:id', SapController.delete);
  app.get('/klijenti', CustomersController.index);
  app.delete('/klijent/:id', CustomersController.delete);
  app.get('/klijent/:id', CustomersController.getByName);
  app.post('/klijent', upload.single('image'), CustomersController.post);
};
