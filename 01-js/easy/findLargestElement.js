/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    // if(numbers.length==0) return;
    // let maxm = Number.MIN_SAFE_INTEGER;
    // for(let i=0;i<numbers.length;i++) {
    //     if(numbers[i]>maxm) {
    //         maxm=numbers[i];
    //     }
    // }
    // return maxm;
    numbers.sort((a, b) => a - b);
    if(numbers.length==0) return;
    return numbers[numbers.length-1];
}

module.exports = findLargestElement;