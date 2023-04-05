'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr) => {
    let max = arr[0];
    // write your code here
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr) => {
    let sum = 0;
    // write your code here
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == "number")
            sum += arr[i];
        else continue;//if (typeof(arr[i])=="string"){continue;}
    }
    return sum;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr) => {
    // write your code here
    let begin = 0;
    let end = arr.length - 1;
    let temp;
   /* while (begin < end) {
        temp = arr[begin];
        arr[begin] = arr[end];
        arr[end] = temp;
        begin++;
        end--;
        if (begin == end) {
            break;
        }
    }*/
    for(let i=0;i<arr.length/2;i++){
        temp = arr[i];
        arr[i] = arr[arr.length-i-1];
        arr[arr.length-i-1] = temp;
    }
    return arr;
}
// -------------------------------------------------------------------------------------------------------

module.exports = { findMax, sumNums, reverseArray };