// Importing the Employee base class for us to extend.
const Employee = require('./Employee')

// Intern subclass extending off the Employee class.
class Intern extends Employee {
    constructor( name, id, email, school ) {
        // Super constructor applies the name, id, and email properties based off the base Employee class.
        super (name, id, email); 
        // Interns will also have a school property.
        this.school = school;
    }

    // Function to return the intern's school property.
    getSchool() {
        return this.school;
    }
  
    // Overriding the base getRole value with the new subclass Employee's role.
    getRole () {
        return `Intern`;
    }
};

// Exporting subclass to be used in index.js.
module.exports = Intern;