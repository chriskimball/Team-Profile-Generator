// Base employee class with name, id, and email properties.
// Each employee will have functions to return their respective properties.
class Employee {

    // if (typeof name !== "string" || !name.trim().length) {
    //     throw new Error("Expected parameter 'name' to be a non-empty string");
    //   }
    
    //   if (typeof id !== "number" || isNaN(age) || age < 0) {
    //     throw new Error("Expected parameter 'age' to be a non-negative number");
    //   }

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