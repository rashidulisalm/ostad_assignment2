// Question- 01

function calculateDifference(a, b) {
    return a + b;
  }

  let resultcal = calculateDifference(10, 5);
    console.log(resultcal);  // Output: 15

// ======================================

// Question-02

function isOdd(num) {
  return num % 2 !== 0;
}
console.log(isOdd(5));  // Output: true
console.log(isOdd(8));  // Output: false
console.log(isOdd(0));  // Output: false
console.log(isOdd(-3)); // Output: true


// =============================================
// Question-03

function findMin(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i]; 
      }
    }
  
    return min;
  }

    console.log(findMin([5, 3, 8, 1, 4])); 
    console.log(findMin([10, 20, 5, 1])); 
    console.log(findMin([3, 3, 3, 3]));   
    console.log(findMin([]));               

// ================================================
// Question-04
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvenNumbers(numbers1);
  console.log(evenNumbers);
    
  // ================================================
  // Question-05

  function sortArrayDescending(arr) {
    return arr.slice().sort((a, b) => b - a);
}
const numbers = [10, 2, 33, 4, 12];
const sortedNumbers = sortArrayDescending(numbers);
console.log(sortedNumbers);

// ================================================
// Question-06

function lowercaseFirstLetter(str) {
  if (str.length === 0) {
      return str; 
  }
  return str.charAt(0).toLowerCase() + str.slice(1);
}
const exampleString = "Rashidul Islam";
const result = lowercaseFirstLetter(exampleString);
console.log(result);

// ================================================
// Question-07

function findAverage(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  
  return sum / numbers.length;
}
console.log(findAverage([1, 2, 3, 4, 5])); 
console.log(findAverage([10, 20, 30]));    
console.log(findAverage([]));              


