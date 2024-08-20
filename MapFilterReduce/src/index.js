import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App.jsx';
import Emoji from "./emojiPedia.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
);


const newEmoji = Emoji.forEach(emoji => (emoji.meaning).substring(0,100));
console.log(newEmoji);


var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
let newNumbers = [];
// numbers.map(function (nums) {
//   const double = nums * 2;
//   return newNumbers.push(double);
// });
//using arrow function
newNumbers = numbers.map(num => num*2);
console.log(newNumbers);
//we can achieve this also by doing forEach function
// numbers.forEach(function (nums) {
//   const double = nums * 2;
//   return newNumbers.push(double);
// })
const numbersss = numbers.forEach(nums => nums*2);
console.log(numbersss);


//Filter - Create a new array by keeping the items that return true.
// const filteredNum = [];
// const filtered = numbers.filter(function (nums) {
//   return nums > 10;
// })
// filteredNum.push(filtered);

const filteredNum = numbers.filter(nums => (nums>10));
console.log(filteredNum);

//Reduce - Accumulate a value by doing something to each item in an array.
const initialValue = 0;
const sumWithInitial = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);

//Find - find the first item that matches from an array.
// const findNum = numbers.find(function (nums) {
//   return nums > 10;
// })

const findNum = numbers.find(nums => nums>10);

console.log(findNum);
//FindIndex - find the index of the first item that matches.

const findIndexNum = numbers.findIndex(function (nums) {
  return nums > 10;
})
console.log(findIndexNum);
