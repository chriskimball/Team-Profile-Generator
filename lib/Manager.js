// Importing the Employee base class for us to extend.
const Employee = require('./Employee')

// Manager subclass extending off the Employee class.
class Manager extends Employee {
    constructor( name, id, email, officeNumber ) {
        // Super constructor applies the name, id, and email properties based off the base Employee class.
        super (name, id, email);
        // Manager will also have an office nubmer property.
        this.officeNumber = officeNumber;
    }

    // Function to return the intern's school property.
    getPhone() {
        return this.officeNumber;
    }
  
    // Overriding the base getRole value with the new subclass Employee's role.
    getRole () {
        return `Manager`;
    }
}

// Exporting subclass to be used in index.js.
module.exports = Manager;