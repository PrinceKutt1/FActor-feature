var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
   it('outputs the correct answer of 10!', ()=>{
     const inputNumber = 10;
     const expectedResult = 3628800; 
      const result = Calculate.factorial(inputNumber);
     assert.equal(expectedResult, result);
  });
  it('outputs the correct answer of 3!', ()=>{
    //set up
     const inputNumber = 3;
     const expectedResult = 6; 
  //excercise
     const result = Calculate.factorial(inputNumber);
  
  //verify
     assert.equal(expectedResult, result);
  });
  it('outputs the correct answer of 0!', ()=>{
   
     //set up
     const inputNumber = 0;
     const expectedResult = 1; 
     
     //exercise
     const result = Calculate.factorial(inputNumber);
    
    //verify
    assert.equal(expectedResult, result);

  })
});
});
