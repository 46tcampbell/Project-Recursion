function fibs(num, array = []) {
  let fib1 = 0;
  let fib2 = 1;
  if (num === 0) {
    return array;
  } else if (num === 1) {
    array.push(fib1);
    return array;
  } else {
    array = [0, 1];
    for (let i = num - 3; i >= 0; i--) {
      const newFib = fib1 + fib2;
      array.push(newFib);
      fib1 = fib2;
      fib2 = newFib;
    }
    return array;
  }
}

function fibsRec(num) {
  // console.log('This was printed recursively');
  if (num < 1) {
    return [];
  } else if (num === 1) {
    return [0];
  } else if (num === 2) {
    return [0, 1];
  } else {
    return fibsRec(num - 1).concat(
      fibsRec(num - 1)[num - 2] + fibsRec(num - 1)[num - 3]
    );
  }
}

// Below is a solution I grabbed from Google after solving the above myself first. It makes a lot more sense and is less recursive work on the computer, but I
// coult not wrap my head around this myself.

// function fibsRec(num) {
//   // Base cases: Handle invalid input and the first two Fibonacci numbers
//   console.log('This was printed recursively');
//   if (num <= 0) {
//     return [];
//   } else if (num === 1) {
//     return [0];
//   } else if (num === 2) {
//     return [0, 1];
//   }

//   // Recursive step: Get the sequence for num-1
//   const sequence = fibsRec(num - 1);

//   // Calculate the next Fibonacci number and append it to the sequence
//   const nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2];
//   sequence.push(nextFib);

//   return sequence;
// }
