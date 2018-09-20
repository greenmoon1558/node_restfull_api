const { Employee } = require('../models');
const { to, ReE, ReS } = require('../services/util.service');

const create = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, employee;

    [err, employee] = await to(Employee.create(req.body));
    if(err) return ReE(res, err, 422);

    return ReS(res,{employee: employee.toWeb()}, 201);
}
module.exports.create = create;

const getAll = async function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let err, employees;
    [err, employees] = await to(Employee.find());

    let employees_json = []
    for (let i in employees){
        let employee = employees[i];
        employees_json.push(employee.toWeb())
    }
    return ReS(res, {employees: employees_json});
}
module.exports.getAll = getAll;

const get = function(req, res){
    res.setHeader('Content-Type', 'application/json');
    let employee = req.employee;
    return ReS(res, {employee: employee.toWeb()});
}
module.exports.get = get;

const update = async function(req, res){
    let err, employee, data;
    employee = req.employee;
    data = req.body;
    employee.set(data);

    [err, employee] = await to(employee.save());
    if(err){
        return ReE(res, err);
    }
    return ReS(res, {employee:employee.toWeb()});
}
module.exports.update = update;

const remove = async function(req, res){
    let employee, err;
    employee = req.employee;

    [err, employee] = await to(employee.remove());
    if(err) return ReE(res, 'error occured trying to delete the employee');

    return ReS(res, {message:'Deleted Employee'}, 204);
}
module.exports.remove = remove;