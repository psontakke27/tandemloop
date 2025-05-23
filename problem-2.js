// problem-2 : With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1, 3
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5, 7
//     .
//     .
//     5) input a = x, then output : 1, 3, 5, 7, .......
 

function generateSeries(a) {
    let series = [];
    for (let i = 0; i < a; i++) {
      series.push(2 * i + 1);
    }
    console.log(series.join(", "));
  }
  
  // Example
  generateSeries(1); 
  generateSeries(2); 
  generateSeries(3); 
  generateSeries(4); 
  generateSeries(5); 
  