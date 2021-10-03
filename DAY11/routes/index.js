var express = require('express');
var router = express.Router();
var registerInitialCheck =require('../middlewares/registerChecks')
var register =require('../controllers/register')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/** 
* @requires {email, password, confirmPassword } - req.body
* @description
* Security, Performance and Edge cases
* level - 1
* email validate - string
* password validate
* password == confirm
* level - 2
* JS / SQl 
* level - 3
* check if email already exists
* password hash
* email lowercase 
* save
*/
router.post('/register',registerInitialCheck,register)
module.exports = router;
