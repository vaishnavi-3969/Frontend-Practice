// 1) 
// Closures follow the following pattern
function closure() {
    // some internal implementation that we want to stay in scope of closure
    return function enclosedFunction() {
      // implementation
    };
  }
  
  // Stretch goal - pass the starting number and the step as arguments
  // Use them in closure instead of hard-coded values.