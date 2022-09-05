// Convert Celsius to Fahrenheit. 
// The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9 / 5, plus 32. 
// You are given a variable celsius representing a temperature in Celsius. 
// Use the variable fahrenheit already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. 
// Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.

function convertCtoF(celsius) {
    let fahrenheit = celsius * (9 / 5) + 32;
    return fahrenheit;
}

convertCtoF(30);


// Reverse a String
// Reverse the provided string.
// You may need to turn the string into an array before you can reverse it.
// Your result must be a string.

function reverseString(str) {
    return str.split('').reverse().join('');
}

reverseString("Hello");


// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
    if (num < 0) {
        return -1;
    } else if (num === 0) {
        return 1;
    } else {
        return (num * (factorialize(num-1)))
    }    
}

factorialize(5);


// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
    let words = str.split('');
    let maxLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
        }
    }
    return maxLength;
}


// Return Largest Numbers in Arrays
// Return an array consisting of the largest number from each provided sub - array. For simplicity, the provided array will contain exactly 4 sub - arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        var max = arr[i][0];
        for (var x = 0; x < arr[i].length; x++) {
            if (arr[i][x] > max) {
                max = arr[i][x];
            }
        }
        arrResult[i] = max;
    }
    return arrResult;
}


// Confirm the Ending
// Check if a string(first argument, str) ends with the given target string(second argument, target).
// This challenge can be solved with the.endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    var newStr = '';
    newStr = str.substring(str.length - target.length);
    return newStr === target;

}

confirmEnding("Bastian", "n");


// Repeat a String Repeat a String
// Repeat a given string str(first argument) for num times(second argument).
// Return an empty string if num is not a positive number.
// For the purpose of this challenge, do not use the built -in .repeat() method.

function repeatStringNumTimes(str, num) {
    var newStr = "";
    for (var i = 0; i < num; i++) {
        newStr += str;
    }
    return newStr;
}


// Truncate a String
// Truncate a string(first argument) if it is longer than the given maximum string length(second argument).
// Return the truncated string with a ...ending.

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + "...";
    } else {
        return str;
    }
}
truncateString("Absolutely Longer", 2);


// Finders Keepers
// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

function findElement(arr, func) {
    return arr.find(func);
}

findElement([1, 2, 3, 4], function (num) { return num % 2 === 0; });


// Boo who
// Check if a value is classified as a boolean primitive.Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
    return (bool === true || bool === false);
}
