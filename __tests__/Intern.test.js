const Intern = require("../lib/Intern");

describe("Intern", () => {
  
    describe("Initialization", () => {
        it("should create an Intern object with a name, id, email , and school property if provided valid arguments", () => {
          // Arrange 
          const chris = {
              name: 'Chris',
              id: 3,
              email: 'example@email.com',
              school: 'UW Full Stack Bootcamp'
          }

          // Act
          const employee = new Intern("Chris", 3, "example@email.com","UW Full Stack Bootcamp");
    
          // Asserting that the object properties we just created equal what we expect them to be
          expect(employee.name).toEqual(chris.name);
          expect(employee.id).toEqual(chris.id);
          expect(employee.email).toEqual(chris.email);
          expect(employee.school).toEqual(chris.school);
        });
    
        // it("should throw an error if provided no arguments", () => {
        //   // Exception test - We need to put an error in a callback function in order for it to not crash our application.
        //   const cb = () => new Employee();
    
        //   // Exception test- If no data is entered, nothing happens?
        //   expect(cb).toThrow();
        // });

    });

    describe("getName", () => {
        it("should return the Intern object's name property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myName = 'Chris';

        // Act - Run the code to do the thing
        const employee = new Intern("Chris", 3, "example@email.com","UW Full Stack Bootcamp");
        const getNameResult = employee.getName()

        // Asserting - the result from acting equals the expectation
        expect(getNameResult).toEqual(myName);

        });
    });
    describe("getId", () => {
        it("should return the Intern object's Id property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myId = 3;

        // Act - Run the code to do the thing
        const employee = new Intern("Chris", 3, "example@email.com","UW Full Stack Bootcamp");
        const getIdResult = employee.getId()

        // Asserting - the result from acting equals the expectation
        expect(getIdResult).toEqual(myId);

        });
    });
    describe("getEmail", () => {
        it("should return the Intern object's email property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myEmail = 'example@email.com';

        // Act - Run the code to do the thing
        const employee = new Intern("Chris", 3, "example@email.com","UW Full Stack Bootcamp");
        const getEmailResult = employee.getEmail()

        // Asserting - the result from acting equals the expectation
        expect(getEmailResult).toEqual(myEmail);

        });
    });
    describe("getSchool", () => {
        it("should return the Intern object's school property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const mySchool = 'UW Full Stack Bootcamp';

        // Act - Run the code to do the thing
        const employee = new Intern("Chris", 3, "example@email.com","UW Full Stack Bootcamp");
        const getSchoolResult = employee.getSchool()

        // Asserting - the result from acting equals the expectation
        expect(getSchoolResult).toEqual(mySchool);

        });
    });
    describe("getRole", () => {
        it("should return the Intern object's role as a string" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myRole = 'Intern';

        // Act - Run the code to do the thing
        const employee = new Intern("Chris", 3, "example@email.com","UW Full Stack Bootcamp");
        const getRoleResult = employee.getRole()

        // Asserting - the result from acting equals the expectation
        expect(getRoleResult).toEqual(myRole);

        });
    });
});
