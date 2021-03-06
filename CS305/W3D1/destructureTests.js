"use strict";
 /* global assert topSalary   */
/* eslint-disable quotes   */  

/* comment out the node specific code when going to the browser*/
// const assert = require("assert");
// const myExports = require("./destructure.js");
// const topSalary = myExports.topSalary;  //do this for all of the functions used in the Mocha tests
// const objectToJson = myExports.objectToJson;  //do this for all of the functions used in the Mocha tests
// const jsonToObject = myExports.jsonToObject;  //do this for all of the functions used in the Mocha tests

/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
describe("topSalary", function() {
    it("returns top-paid person", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null for the empty object", function() {
      assert.strictEqual( topSalary({}), null);
    });
    it("returns one of them if there are multiple to salaries in the object", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250,
        "Suzan": 300,
      };
    assert.strictEqual( topSalary(salaries), "Pete");
  });
  });

  describe("Object to JSON", function() {
    it("returns a JSON string", function() {
      let user = { name: "John Smith",age: 35};
      assert.deepEqual(objectToJson(user),'{"name":"John Smith","age":35}');
    });
  });

  describe("Json string to object", function() {
    it("returns an object", function() {
      const str = '{"name":"John Smith","age":35}';
      
      assert.deepEqual(jsonToObject(str),
      { name: "John Smith", age: 35});
    });
  });