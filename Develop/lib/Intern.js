// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee");

class Intern extends Employee{
    constructor(name, email, id, schoolAttended) {
        super(name, email, id);
        this.school = schoolAttended
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return Intern.name;
    }
}

module.exports= Intern;