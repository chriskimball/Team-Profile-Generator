const Manager = require("../lib/Manager");

describe("Manager", () => {
  
    describe("Initialization", () => {
        it("should create an Manager object with a name, id, email property, and office number if provided valid arguments", () => {
          // Arrange 
          const chris = {
              name: 'Chris',
              id: 3,
              email: 'example@email.com',
              officeNumber: '555-555-5555'
          }

          // Act
          const employee = new Manager("Chris", 3, "example@email.com","555-555-5555");
    
          // Asserting that the object properties we just created equal what we expect them to be
          expect(employee.name).toEqual(chris.name);
          expect(employee.id).toEqual(chris.id);
          expect(employee.email).toEqual(chris.email);
          expect(employee.officeNumber).toEqual(chris.officeNumber);
        });
    
        // it("should throw an error if provided no arguments", () => {
        //   // Exception test - We need to put an error in a callback function in order for it to not crash our application.
        //   const cb = () => new Employee();
    
        //   // Exception test- If no data is entered, nothing happens?
        //   expect(cb).toThrow();
        // });

    });

    describe("getName", () => {
        it("should return the Manager object's name property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myName = 'Chris';

        // Act - Run the code to do the thing
        const employee = new Manager("Chris", 3, "example@email.com","555-555-5555");
        const getNameResult = employee.getName()

        // Asserting - the result from acting equals the expectation
        expect(getNameResult).toEqual(myName);

        });
    });
    describe("getId", () => {
        it("should return the Manager object's Id property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myId = 3;

        // Act - Run the code to do the thing
        const employee = new Manager("Chris", 3, "example@email.com","555-555-5555");
        const getIdResult = employee.getId()

        // Asserting - the result from acting equals the expectation
        expect(getIdResult).toEqual(myId);

        });
    });
    describe("getEmail", () => {
        it("should return the Manager object's email property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myEmail = 'example@email.com';

        // Act - Run the code to do the thing
        const employee = new Manager("Chris", 3, "example@email.com","555-555-5555");
        const getEmailResult = employee.getEmail()

        // Asserting - the result from acting equals the expectation
        expect(getEmailResult).toEqual(myEmail);

        });
    });
    describe("getPhone", () => {
        it("should return the Manager object's officeNumber property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myOfficeNumber = '555-555-5555';

        // Act - Run the code to do the thing
        const employee = new Manager("Chris", 3, "example@email.com","555-555-5555");
        const getOfficeNumberResult = employee.getPhone()

        // Asserting - the result from acting equals the expectation
        expect(getOfficeNumberResult).toEqual(myOfficeNumber);

        });
    });
    describe("getRole", () => {
        it("should return the Manager object's role as a string" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myRole = 'Manager';

        // Act - Run the code to do the thing
        const employee = new Manager("Chris", 3, "example@email.com","555-555-5555");
        const getRoleResult = employee.getRole()

        // Asserting - the result from acting equals the expectation
        expect(getRoleResult).toEqual(myRole);

        });
    });
});
