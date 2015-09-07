var express = require('express');
var router = express.Router();
var Employee = require('../models/Employee');
/* GET home page. */
router.get('/',function(req, res, next){
	res.send('yes');
});

router.post('/addEmployee', function(req, res, next) {
	console.log('daaa');
  Employee.create({'FirstName': req.body.firstname, 'LastName': req.body.lastname, 'address': req.body.address, 'phone': req.body.phone, 'dob': req.body.dob})
  .then(function(emp){
  	res.status(200).send('success');
  }).catch(function(err){
  	res.status(403).send('Unable to add Employee');
  });
});

router.put('/Employee/:id', function(req, res, next) {
  Employee.findById(req.params.id).then(function(emp){
  	res.send(emp);
  }).catch(function(err){
  	res.status(404).send('Employee Not Found');
  });
});

router.put('/Employee/update/:id', function(req, res, next) {
  Employee.findById(req.params.id).then(function(emp){
  	emp.FirstName = req.body.firstname;
  	emp.LastName  = req.body.Lastname;
  	emp.address   = req.body.address;
  	emp.phone	  = req.body.phone;
  	emp.dob		  = req.body.dob;
  	emp.save().then(function(){res.status(200).send('success');});
  })
  .catch(function(err){
  	res.status(404).send('Employee Not Found');
  });
});

router.delete('/Employee/delete/:id', function(req, res, next) {
  Employee.findById(req.params.id).then(function(emp){
  	if(!emp)
  	{
  		Employee.destroy().then(function(){
  			res.status(200).send('success')
  		});
  	}
  	else
  	{
  		res.status(404).send('NOT FOUND')
  	}
  });
});


module.exports = router;
