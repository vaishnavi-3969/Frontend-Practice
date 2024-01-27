// Challenge: Write a countdown function with a hard-coded starting number inside closure
// Stretch goal: Write a countdown function that can count from a provided number,
// with a provided step

// Start
function countdown(startingNumber, step) {
    let countFromNum = startingNumber + step;
    return function decrease() {
      countFromNum -= step;
      return countFromNum;
    }
  }
  
  const countingDown = countdown(20, 5);
  
  console.log(countingDown());
  console.log(countingDown());
  console.log(countingDown());
  

  document.title = "Functions"