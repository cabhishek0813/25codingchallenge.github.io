"use strict";

// 1. Multiply

// Arrow Function

const Multiply = (a, b) => a * b;
console.log(Multiply(1, 2));

// Function Decleration
const MultiplyOne = function (c, d) {
  return c * d;
};
console.log(MultiplyOne(3, 4));

// Function Expression
function MultiplyTwo(e, f) {
  return e * f;
}
console.log(MultiplyTwo(5, 6));

// 2.Get Planet Name by ID

// By switch Statement

function getPlanetBy(Id) {
  let name;
  switch (Id) {
    case "1":
      name = "Mercury";
      break;
    case "2":
      name = "Venus";
      break;
    case "3":
      name = "Earth";
      break;
    case "4":
      name = "March";
      break;
    case "5":
      name = "Jupiter";
      break;
    case "6":
      name = "Saturn";
      break;
    case "7":
      name = "Uranus";
      break;
    case "8":
      name = "Neptune";
      break;
    default:
      return "Invalid";
  }

  return name;
}

//  Reserved String

const arr = (str) => str.split("").reverse().join("");

console.log(arr("Hello"));

const solution = function (stre) {
  return stre.split("").reverse().join("");
};

console.log(solution("hello!"));

//Even Or Odd

const evenOrOdd = (number) => (number % 2 === 0 ? "Even" : "Odd");
console.log(evenOrOdd(3));

//Counting Sheeps

function CountOfSheep(arraySheep) {
  let sheep = 0;
  for (let i = 0; i < arraySheep.length; i++) {
    if (arraySheep[i] === true) {
      sheep++;
    }
  }
  return sheep;
}

let arraySheep = [true, false, false, true, true];
console.log(CountOfSheep(arraySheep));

// Vowel Count

function vowelCount(str) {
  let count = 0;
  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        count++;
        break;
      case "e":
        count++;
        break;
      case "i":
        count++;
        break;
      case "o":
        count++;
        break;
      case "u":
        count++;
        break;
    }
  }
  return count;
}

let str = "qaofn  knaiknid";
console.log(vowelCount(str));

// Jenny's secret message
function greet(name) {
  if (name === "Johnny") {
    return "Hello, my love!";
  } else {
    return "Hello, " + name + "!";
  }
}

console.log(greet("Johnny"));
console.log(greet("Abhi"));

// Is n divisible by x and y?

function divisible(n, x, y) {
  const number1 = n / x;
  const number2 = n / y;
  if (number1 % 1 === 0 && number2 % 1 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divisible(12, 3, 4));

// Return Negative

const Negative = (num) => {
  return num < 0 ? num : num * -1;
};
console.log(Negative(33));

// Find the smallest integer in the array

const smallest = (paras) => {
  let numbers;
  for (let i = 0; i < paras.length; i++) {
    let array = paras[i];
    if (i === 0) {
      numbers = array;
    }
    if (array < numbers) {
      numbers = array;
    }
  }
  return numbers;
};

const paras = [78, 56, 232, 12, 8];
console.log(smallest(paras));

// Grasshopper - Summation

function summation(num1) {
  let sum = 0;
  for (let i = 1; i <= num1; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(summation(30));

// Get the mean of the array

function meanaverage(mean) {
  const count = meanaverage.length;
  let sum = 0;

  for (let i = 0; i < count; i++) {
    sum = sum + mean[i];
  }

  return Math.floor(sum / count);
}

console.log(meanaverage([3, 4, 5, 5]));

// Rock Paper Scissors Game

const rps = (p1, p2) => {
  if (p1 === "rock") {
    if (p2 === "rock") {
      return "Draw!";
    }
    if (p2 === "paper") {
      return "Player 2 won!";
    }
    if (p2 === "scissors") {
      return "Player 1 won!";
    }
  }
  if (p1 === "paper") {
    if (p2 === "rock") {
      return "Player 1 won!";
    }
    if (p2 === "paper") {
      return "Draw!";
    }
    if (p2 === "scissors") {
      return "Player 2 won!";
    }
  }
  if (p1 === "scissors") {
    if (p2 === "rock") {
      return "Player 2 won!";
    }
    if (p2 === "paper") {
      return "Player 1 won!";
    }
    if (p2 === "scissors") {
      return "Draw!";
    }
  }
};

console.log(rps("rock", "Paper"));

// Remove First and Last Character

function removeChar(str) {
  //You got this!

  const length = str.length;

  return str.substr(1, length - 2);
}

console.log(removeChar("Abhishek"));

// Sum of positive
function positiveSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum = sum + arr[i];
    }
  }

  return sum;
}
console.log(positiveSum([3, 4, -10, 44, 4555]));

//Basic Mathematics Operators

function basicOp(operation, value1, value2) {
  let result;

  switch (operation) {
    case "+":
      result = value1 + value2;
      break;
    case "-":
      result = value1 - value2;
      break;
    case "*":
      result = value1 * value2;
      break;
  }

  return result;
}

console.log(basicOp("+", 7, 4));

// String repeat
function repeatStr(n, s) {
  let stri = "";

  for (let i = 0; i < n; i++) {
    stri = stri + s;
  }
  return stri;
}

console.log(repeatStr(4, "ggg"));

// Convert a string to an array
function stringToArray(string) {
  return string.split(" ");
}

console.log(stringToArray("Abhishek Akash"));

// Remove Spaces

function noSpace(space) {
  const arrSpace = space.split();

  let newAr = [];

  for (let i = 0; i < arrSpace.length; i++) {
    const trimmedString = arrSpace[i].trim();
    newAr.push(trimmedString);
  }
  const final = newAr.join();
  return final;
}

// using map multiple the values

function map(double) {
  const answer = double.map((arrayItem) => {
    return arrayItem * 2;
  });

  return answer;
}

console.log(map([2, 4, 6]));

// Hero VS Dragon
function hero(bullet, dragon) {
  return bullet / dragon >= 2 ? true : false;
}
console.log(hero(6, 7));

// Addition of two array

function arrayPlusArray(arr1, arr2) {
  let newArrayPlus = [];
  for (let i = 0; i < arr1.length; i++) {
    const oneArray = arr1[i];
    const twoArray = arr2[i];
    const arrayAddition = oneArray + twoArray;

    newArrayPlus.push(arrayAddition);
  }
  return newArrayPlus;
}

console.log(arrayPlusArray([3, 5, 4, 1, 2], [4, 5, 6, 9, 9]));

// Century from year

function century(year) {
  if (year < 100) {
    return 1;
  }

  const firstTwoStrings = year.toString().substr(0, 2);

  if (year % 100 === 0) {
    return Number(firstTwoStrings);
  } else {
    return Number(firstTwoStrings) + 1;
  }
}

console.log(century(1705));

// Cat and dog years

var humanDogCatYears = function (humanYears) {
  let catsAges;
  let dogsAges;

  if (humanYears === 1) {
    return [humanYears, 15, 15];
  }
  if (humanYears === 2) {
    return [humanYears, 24, 24];
  }

  const excessYears = humanYears - 2;
  const extraCatYears = excessYears * 4;
  const extraDogYears = excessYears * 4;
  return [humanYears, 24 + extraCatYears, 24 + extraDogYears];
};

console.log(humanDogCatYears(1));

// Total Points

function points(gamesArray) {
  let totalPoints = 0;

  for (let i = 0; i < gamesArray.length; i++) {
    const value = gamesArray[i];
    const parts = value.split(" ");

    const g = parts[0];
    const h = parts[1];
    if (g > h) {
      totalPoints += 3;
    } else if (g === h) {
      totalPoints += 1;
    }
  }
  return totalPoints;
}

console.log(points(["1:10", "2:0", "3:0", "4:0", "5:2", "7:0"]));
