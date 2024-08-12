function sumofFirstNNaturalNumbers(N) {
    var sum=0;
    for(var i=1;i<=N;i++){
        sum+=i;
    }
    return sum;
}

var N=5;
console.log(sumofFirstNNaturalNumbers(N));
// Function for problem 2
function countEvenNumbers(arr){
    var count=0;
    for (var i=0;i<arr.length;i++){
        if (arr[i]%2===0){
            count++;
        }
    }
    return count;
}
var arr = [1,2,3,4,5,6];
console.log(countEvenNumbers(arr));
// Function for problem 3
function reverseArray(arr){
    var reversedArr=[];
    for (var i=arr.length-1;i>=0;i--){
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}
console.log(reverseArray([1,2,3,4,5]));
// Function for problem 4
function sumofArray(arr){
    var sum=0;
    for(var i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log(sumofArray([1,2,3,4,5]));
// Function for problem 5
function factorial(N) {
    var result = 1;
    for (var i = 1; i <= N; i++) {
        result *= i;
    }
    
    return result;
}
console.log(factorial(4));
// Function for problem 6
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return max;
}
console.log(findMax([1, 3, 7, 2, 5])); // Output: 7
// Function for problem 7
function countOddNumbers(arr) {
var count = 0;
for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        count++;
    }
}
return count;
}
console.log(countOddNumbers([1, 2, 3, 4, 5, 6])); // Output: 3 (1, 3, 5)
// Function for problem 8
function arrayOfSquares(arr) {
var squares = [];
    for (var i = 0; i < arr.length; i++) {
        squares.push(arr[i] * arr[i]);
    }
    
    return squares;
}
console.log(arrayOfSquares([1, 2, 3, 4])); // Output: [1, 4, 9, 16]
// Function for problem 9
function multiplicationTable(N) {
    for (var i = 1; i <= 10; i++) {
        console.log(N + " x " + i + " = " + (N * i));
    }
}
multiplicationTable(3);
// Function for problem 10
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
var arr = [4, 2, 9, 7, 1];
console.log(findMin(arr)); // Output: 1
// Function for problem 11
function sumOfOddNumbers(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) { 
            sum += arr[i];
        }
    }
return sum; 
}
var arr = [1, 2, 3, 4, 5];
console.log(sumOfOddNumbers(arr)); // Output should be 9
// Function for problem 12
function countCharacters(str) {
    var count = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') { 
            count++; 
        }
    }
    
    return count;
}
var str = "hello world";
console.log(countCharacters(str)); // Output should be 10
// Function for problem 13
function sumOfEvenNumbers(N) {
    var sum = 0;
     for (var i = 1; i <= N; i++) {
        if (i % 2 === 0) {
            sum += i;
        }
    }
    
    return sum;
}
var N = 10;
console.log(sumOfEvenNumbers(N)); // Output should be 30
// Function for problem 14
function calculateAverage(arr) {
    var sum = 0; 
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    var average = sum / arr.length;
    return average;
}
var arr = [2, 4, 6, 8, 10];
console.log(calculateAverage(arr)); // Output should be 6
// Function for problem 15
function concatenateArray(arr) {
    var result = ""; 
    for (var i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    
    return result;
}
var arr = ["hello", "world"];
console.log(concatenateArray(arr)); // Output should be "helloworld"

