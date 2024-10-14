// 8 Kata

// If you can't sleep, just count sheep!!
// var countSheep = function (num) {
//   let result = "";
//   for (let i = 1; i <= num; i++) {
//     result = result.concat(i, " sheep...");
//   }
//   return result;
// };
// console.log(countSheep(0));
// console.log(countSheep(1));
// console.log(countSheep(2));
// console.log(countSheep(3));

// Do you speak "English"?
// function spEng(sentence) {
//   return sentence.toLowerCase().includes('english');
// }
// console.log(spEng("english"));
// console.log(spEng('egnlish'));

// Is the date today
// function isToday(date) {
//   return date.getDate() === new Date().getDate() &&
//     date.getMonth() === new Date().getMonth() &&
//     date.getYear() === new Date().getYear()
//     ? true
//     : false;
// }

// isReallyNaN
// const isReallyNaN = (val) => {
//   return Number.isNaN(val);
// };

// ES6 string addition
// function joinStrings(string1, string2) {
//   return `${string1} ${string2}`;
// }

// Well of Ideas - Easy Version
// function well(array) {
//   const counter = array.reduce(
//     (acc, elem) => (elem === "good" ? acc + 1 : acc),
//     0
//   );
//   return counter > 2 ? "I smell a series!" : counter > 0 ? "Publish!" : "Fail!";
// }
// console.log(well(["good", "good", "bad"]));

// L1: Bartender, drinks!
// function getDrinkByProfession(param) {
//   const drinks = {
//     jabroni: "Patron Tequila",
//     "school counselor": "Anything with Alcohol",
//     programmer: "Hipster Craft Beer",
//     "bike gang member": "Moonshine",
//     politician: "Your tax dollars",
//     rapper: "Cristal",
//   };
//   return drinks[param.toLowerCase()] || "Beer";
// }

// Remove the time
// function shortenToDate(longDate) {
//   return longDate.split(",")[0];
// }

// Welcome!
// const database = {
//   english: "Welcome",
//   czech: "Vitejte",
//   danish: "Velkomst",
//   dutch: "Welkom",
//   estonian: "Tere tulemast",
//   finnish: "Tervetuloa",
//   flemish: "Welgekomen",
//   french: "Bienvenue",
//   german: "Willkommen",
//   irish: "Failte",
//   italian: "Benvenuto",
//   latvian: "Gaidits",
//   lithuanian: "Laukiamas",
//   polish: "Witamy",
//   spanish: "Bienvenido",
//   swedish: "Valkommen",
//   welsh: "Croeso",
// };
// function greet(language) {
//   return database[language] || database["english"];
// }

// Blood-Alcohol Content
// function bloodAlcoholContent(drinks, weight, sex, time) {
//   let alcRatio = sex === "male" ? 0.73 : 0.66;
//   return +(
//     (drinks.ounces * drinks.abv * 5.14 * alcRatio) / weight -
//     0.015 * time
//   ).toFixed(4);
// }

// Logical calculator
// function logicalCalc(array, op) {
//   switch (op) {
//     case "AND":
//       return Boolean(eval(array.join('&&')))
//     case "OR":
//       return Boolean(eval(array.join("||")));
//     case "XOR":
//       return Boolean(eval(array.join("^")));
//   }
// }
// console.log(logicalCalc([true, true, true, false], "AND"));

// Sum of differences in array
// function sumOfDifferences(arr) {
//   if (!arr.length) return 0;
//   return arr
//     .sort((a, b) => b - a)
//     .reduce((acc, el, i, array) => {
//       if (i + 1 !== array.length) return (acc += el - array[i + 1]);
//       return acc;
//     }, 0);
// }

// Find the Difference in Age between Oldest and Youngest Family Members
// function differenceInAges(ages) {
//   return [
//     Math.min(...ages),
//     Math.max(...ages),
//     Math.max(...ages) - Math.min(...ages),
//   ];
// }

// 7 Kata

// Sum of Array Averages
// const sumAverage = (arr) => {
//   let result = 0;
//   arr.forEach(element => {
//     result += element.reduce((acc, num) => acc + num, 0) / element.length;
//   });
//   return Math.floor(result);
// };
// console.log(
//   sumAverage([
//     [3, 4, 1, 3, 5, 1, 4],
//     [21, 54, 33, 21, 77],
//   ])
// );

// Shuffle an Array
// function shuffle(arr) {
//   const finalArray = [];
//   const arrLength = arr.length;
//   for (let i = 0; i < arrLength; i++) {
//     let randomNumber = Math.floor(Math.random() * arr.length);
//     finalArray.push(arr[randomNumber]);
//     arr.splice(randomNumber, 1);
//   }
//   return finalArray;
// }
// console.log(shuffle([1, 2, 3, 4]))

// Jubilee Year
// function isJubilee(year) {
//   if (1900 <= year <= 2099) {
//     const date = new Date(`${year}-07-25`);
//     return date.getDay() === 0 ? true : false;
//   }
//   return false;
// }
// console.log(isJubilee(1900));

// Print Fixed Size Two Dimensional Table
// function buildTableText(row, column, character) {
//   const tableArray = [
//     Array.from("    "),
//     Array.from("    "),
//     Array.from("    "),
//     Array.from("    "),
//   ];
//   let splitString = "---------\n";
//   let resultString = "".concat(splitString);
//   tableArray.forEach((elem, i) => {
//     elem.forEach((_, j) => {
//       resultString =
//         row === i && j === column
//           ? resultString.concat("|", character)
//           : resultString.concat("|", tableArray[i][j]);
//     });
//     resultString = resultString.concat("|\n", splitString);
//   });
//   return resultString;
// }
// console.log(buildTableText(2, 3, "B"));

// Check the exam
// function checkExam(arr1, arr2) {
//   const result = arr1.reduce((acc, el, i) => {
//     return el === arr2[i] ? acc + 4 : arr2[i] === "" ? acc : acc - 1;
//   }, 0);
//   return result < 0 ? 0 : result;
// }

// Largest Elements
// function largest(n, array) {
//   return array.sort((a, b) => a - b).splice(array.length - n, n);
// }

// Extract Values and Units
// function valAndUnits(string) {
//   const units =
//     string.match(/[a-z%$]+/gi) === null
//       ? ""
//       : string.match(/[a-z%$]+/gi).join("");
//   const val =
//     string.match(/-?[\d.,]+/g) === null
//       ? ""
//       : +string.match(/-?[\d.,]+/g).join("");
//   return { val, units };
// }

// Playing with Sets : Equal or Not ?
// function areEqual(s1, s2) {
//   let flag = true;
//   s1.forEach((elem) => {
//     if (!s2.has(elem)) flag = false;
//   });
//   return flag;
// }
// function notEqual(s1, s2) {
//   return !areEqual(s1, s2);
// }
// let A1 = new Set([1, 2, 3]),
//   A2 = new Set([3, 2, 1]),
//   B = new Set([1, 2, 5]);
// console.log(areEqual(A1, A2));
// console.log(notEqual(A1, A2));

// Correct the time-string
function timeCorrect(timestring) {
  const result = timestring
    .split(":")
    .reverse()
    .map((el, i) => {
      switch (i) {
        case 0:
          return (el %= 24);
        case 1:
          if (el / 60 >= 1) {
            el %= 60;
          }
          break;
        case 2:
          break;
      }
    });
  return result;
}
console.log(timeCorrect("24:99:99")); // start from seconds, then minutes, then hours

// Count strings in objects
// function strCount(obj) {
//   let counter = 0;
//   function checkItems(item) {
//     if (typeof item === "string") {
//       counter++;
//     } else if (Array.isArray(item)) {
//       item.forEach((el) => checkItems(el));
//     } else if (typeof item === "object" && item !== null) {
//       Object.values(item).forEach((el) => checkItems(el));
//     }
//   }
//   checkItems(obj);
//   return counter;
// }


// 6 Kata

// Difference of 2
// function twosDifference(input) {
//   return input
//     .sort((a, b) => a - b)
//     .filter((el) => input.indexOf(el + 2) !== -1)
//     .map((el) => [el, el + 2]);
// }
// console.log(twosDifference([1, 2, 3, 4])); // [[1, 3], [2, 4]]
// console.log(twosDifference([4, 1, 2, 3])); // [[1, 3], [2, 4]]
// console.log(twosDifference([1, 23, 3, 4, 7])); // [[1, 3]]
// console.log(twosDifference([4, 3, 1, 5, 6])); // [[1, 3], [3, 5], [4, 6]]

// Count word occurrences
// var wordCounter = function (text) {
//   const set = new Set(text.split(/[ ,.]+/).filter((elem) => elem !== ""));
//   return {
//     count: function (word) {
//       return +set.has(word);
//     },
//   };
//   // return {
//   //   count: function (word) {
//   //     return +text.split(/[ ,.]+/).some((elem) => elem === word && elem !== "");
//   //   },
//   // };
// };
// var sample = "Lorem ipsum";
// var counter = wordCounter(sample);
// console.log(counter.count("Lorem")); // 1

// Power .bind()
// Function.prototype.bind = function (ctx, ...args) {
//   const fn = this;
//   function boundFunction() {
//     return fn.apply(ctx, [...args]);
//   };
//   boundFunction.bind = function (newContext) {
//     ctx = newContext;
//     return boundFunction;
//   };
//   return boundFunction;
// };
// var func = function () {
//   return this.prop;
// };
// var obj1 = { prop: 1 },
//   obj2 = { prop: 2 },
// func = func.bind(obj1);
// console.log(func()); // 1
// func = func.bind(obj2);
// console.log(func()); // 2
