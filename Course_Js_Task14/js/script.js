"use strict";

// 1
for (let i = 1; i <= 100; i++){
  console.log(i);
}

// 2
for (let i = 100; i >= 1; i--){
  console.log(i);
}

// 3
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
   console.log(i);
  }
}

// 4

const arr = [1, 2, 3, 4, 5];
let result = null;
for (let i = 0; i < arr.length; i++) {
  result += arr[i];
}
console.log("sum:", result);

// 5
/*
const arr = [1, 2, 3, 4, 5];
let result = null;
for (let i = 0; i < arr.length; i++) {
  result += Math.pow(arr[i], 2);
}
console.log("sum:", result);
*/
