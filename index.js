const Calculate = {
factorial (inputNumber){
    return inputNumber > 1 ? inputNumber * this.factorial(inputNumber - 1) : 1;
  }
}
  
module.exports = Calculate;


