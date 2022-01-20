const Employee = require('./Employee')
// TODO: Create a `Car` class that extends the `Vehicle` class

class Intern extends Employee {
    constructor( name, id, email, school ) {
        super (name, id, email) 
        this.school = school;
    }

    getSchool() {
        return this.school
    }
  
    getRole () {
        return `Intern`
    }

}


  module.exports = Intern;