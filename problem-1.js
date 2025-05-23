// Problem-1: Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class.
//   Calculator inputs :> ‘a’, ‘b’ and ‘type of operation’
//   Datatype :> ‘a’ = double, ‘b’ = double, ‘type of operation’ = string


function calculator(a, b, operation) {
    operation = operation.toLowerCase();
    
    switch (operation) {
      case "add":
        return a + b;
      case "subtract":
        return a - b;
      case "multiply":
        return a * b;
      case "divide":
        if (b === 0) {
          return "Error: Division by zero is not allowed.";
        }
        return a / b;
      default:
        return "Error: Invalid operation type";
    }
  }
  
  // Example usage:
  console.log(calculator(10.5, 2.5, "add"));    
  console.log(calculator(10.5, 0, "divide"));     
  console.log(calculator(10.5, 2.5, "multiply")); 
  
