const express 			= require('express');
const router 			= express.Router();

const UserController 	= require('../controllers/user.controller');
const EmployeeController = require('../controllers/employee.controller');
const HomeController 	= require('../controllers/home.controller');

const custom 	        = require('./../middleware/custom');

const passport      	= require('passport');
const path              = require('path');


require('./../middleware/passport')(passport)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({status: "success", message: "Parcel Pending API", data: {"version_number":"v1.0.0"}})
});

router.post(    '/users',                  UserController.create);                                                    
router.get(     '/users',                  passport.authenticate('jwt', {session:false}), UserController.get);        
router.put(     '/users',                  passport.authenticate('jwt', {session:false}), UserController.update);     
router.delete(  '/users',                  passport.authenticate('jwt', {session:false}), UserController.remove);    
router.post(    '/users/login',            UserController.login);


router.post(    '/employees',              passport.authenticate('jwt', {session:false}), EmployeeController.create);
router.get(     '/employees/all',          passport.authenticate('jwt', {session:false}), EmployeeController.getAll);                                                       // C
router.get(     '/employees/:employee_id', passport.authenticate('jwt', {session:false}), custom.employee, EmployeeController.get);        
router.put(     '/employees/:employee_id', passport.authenticate('jwt', {session:false}), custom.employee, EmployeeController.update);     
router.delete(  '/employees/:employee_id', passport.authenticate('jwt', {session:false}), custom.employee, EmployeeController.remove);    

router.get('/dash', passport.authenticate('jwt', {session:false}),HomeController.Dashboard)


//********* API DOCUMENTATION **********
router.use('/docs/api.json',            express.static(path.join(__dirname, '/../public/v1/documentation/api.json')));
router.use('/docs',                     express.static(path.join(__dirname, '/../public/v1/documentation/dist')));
module.exports = router;
