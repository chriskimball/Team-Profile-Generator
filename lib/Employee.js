// Base employee class with name, id, and email properties.
// Each employee will have functions to return their respective properties.
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name;
    }

    getId () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return `Employee`;
    }
};
  
// Exporting subclass to be used in other JS files.
module.exports = Employee;