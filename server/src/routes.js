var AuthenticationController = require('./controllers/AuthenticationController');
var CustomersController = require('./controllers/CustomersController');
var SapController = require('./controllers/SapController');

var AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '../uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({storage: storage});
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }]);

module.exports = function (app) {
  app.post('/registracija',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register);

  app.post('/prijava',
    AuthenticationControllerPolicy.login,
    AuthenticationController.login);

  app.get('/klijenti', CustomersController.index);
  app.post('/klijent', cpUpload, CustomersController.post);

  app.get('/sap', SapController.index);
  app.post('/sap', SapController.post);
  app.delete('/sap/:id', SapController.delete);
};
