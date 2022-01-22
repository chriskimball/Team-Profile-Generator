const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  
    describe("Initialization", () => {
        it("should create an engineer object with a name, id, email, and github property if provided valid arguments", () => {
          // Arrange 
          const chris = {
              name: 'Chris',
              id: 3,
              email: 'example@email.com',
              github: 'chriskimball'
          }

          // Act
          const employee = new Engineer("Chris", 3, "example@email.com","chriskimball");
    
          // Asserting that the object properties we just created equal what we expect them to be
          expect(employee.name).toEqual(chris.name);
          expect(employee.id).toEqual(chris.id);
          expect(employee.email).toEqual(chris.email);
          expect(employee.github).toEqual(chris.github);
        });
    
        // it("should throw an error if provided no arguments", () => {
        //   // Exception test - We need to put an error in a callback function in order for it to not crash our application.
        //   const cb = () => new Employee();
    
        //   // Exception test- If no data is entered, nothing happens?
        //   expect(cb).toThrow();
        // });

    });

    describe("getName", () => {
        it("should return the engineer object's name property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myName = 'Chris';

        // Act - Run the code to do the thing
        const employee = new Engineer("Chris", 3, "example@email.com","chriskimball");
        const getNameResult = employee.getName()

        // Asserting - the result from acting equals the expectation
        expect(getNameResult).toEqual(myName);

        });
    });
    describe("getId", () => {
        it("should return the engineer object's Id property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myId = 3;

        // Act - Run the code to do the thing
        const employee = new Engineer("Chris", 3, "example@email.com","chriskimball");
        const getIdResult = employee.getId()

        // Asserting - the result from acting equals the expectation
        expect(getIdResult).toEqual(myId);

        });
    });
    describe("getEmail", () => {
        it("should return the engineer object's email property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myEmail = 'example@email.com';

        // Act - Run the code to do the thing
        const employee = new Engineer("Chris", 3, "example@email.com","chriskimball");
        const getEmailResult = employee.getEmail()

        // Asserting - the result from acting equals the expectation
        expect(getEmailResult).toEqual(myEmail);

        });
    });
    describe("getGithub", () => {
        it("should return the engineer object's github property" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myGithub = 'chriskimball';

        // Act - Run the code to do the thing
        const employee = new Engineer("Chris", 3, "example@email.com","chriskimball");
        const getGithubResult = employee.getGithub()

        // Asserting - the result from acting equals the expectation
        expect(getGithubResult).toEqual(myGithub);

        });
    });
    describe("getRole", () => {
        it("should return the engineer object's role as a string" , () => {
        
        // The arrange step - Input Data, Expected Output
        const myRole = 'Engineer';

        // Act - Run the code to do the thing
        const employee = new Engineer("Chris", 3, "example@email.com","chriskimball");
        const getRoleResult = employee.getRole()

        // Asserting - the result from acting equals the expectation
        expect(getRoleResult).toEqual(myRole);

        });
    });
});
