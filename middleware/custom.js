const Employee = require('../models/employee.model');
const { to, ReE, ReS } = require('../services/util.service');



let employee = async function (req, res, next) {
    let employee_id, err, employee;
    employee_id = req.params.employee_id;

    [err, employee] = await to(Employee.findOne({_id:employee_id}));
    if(err) return ReE(res,"err finding employee");

    if(!employee) return ReE(res, "Employee not found with id: "+employee_id);
    
    req.employee = employee;
    next();
}
module.exports.employee = employee;