// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string

class Calculator {
  constructor(a, b, operation) {
    this.a = a;
    this.b = b;
    this.operation = operation;
  }

  calculate() {
    switch (this.operation.toLowerCase()) {
      case 'add':
      case '+':
        return this.a + this.b;
      case 'subtract':
      case '-':
        return this.a - this.b;
      case 'multiply':
      case '*':
        return this.a * this.b;
      case 'divide':
      case '/':
        if (this.b === 0) {
          return 'Error: Division by zero';
        }
        return this.a / this.b;
      default:
        return 'Invalid operation';
    }
  }
}

// Example 
const calc1 = new Calculator(10, 5, 'add');
console.log('Addition:', calc1.calculate()); 

const calc2 = new Calculator(10, 5, 'subtract');
console.log('Subtraction:', calc2.calculate()); 

const calc3 = new Calculator(10, 5, 'multiply');
console.log('Multiplication:', calc3.calculate()); 

const calc4 = new Calculator(10, 0, 'divide');
console.log('Division:', calc4.calculate()); 
