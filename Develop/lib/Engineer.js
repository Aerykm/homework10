// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, email, id, githubUsername) {
        super(name, email, id);
        this.github = githubUsername;

    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return Engineer.name;
    }
}

module.exports = Engineer;