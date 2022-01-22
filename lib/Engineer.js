// Importing the Employee base class for us to extend.
const Employee = require('./Employee');

// Engineer subclass extending off the Employee class.
class Engineer extends Employee {
    constructor( name, id, email, github ) {
        // Super constructor applies the name, id, and email properties based off the base Employee class.
        super (name, id, email); 
        // Engineer will also have a github property.
        this.github = github;
    }

    // Function to return the Engineer's github property.
    getGithub() {
        return this.github;
    }
  
    // Overriding the base getRole value with the new subclass Employee's role.
    getRole () {
        return `Engineer`;
    }
};

// Exporting subclass to be used in index.js.
module.exports = Engineer;

  