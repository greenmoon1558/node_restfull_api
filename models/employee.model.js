const mongoose 			= require('mongoose');
const {TE, to}          = require('../services/util.service');

let EmployeeSchema = mongoose.Schema({
    first: {type:String},
    second: {type:String},
    patronymic: {type:String},
    position: {type:String},
    salary: {type:String},
    contactinfo: {type:String},
}, {timestamps: true});

EmployeeSchema.methods.toWeb = function(){
    let json = this.toJSON();
    json.id = this._id;
    return json;
};
EmployeeSchema.methods.getAll = function(){
  
};

let employee = module.exports = mongoose.model('Employee', EmployeeSchema);

