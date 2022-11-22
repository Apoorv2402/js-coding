let str = "ahlupwalia";
let arr = [...new Set(str)];
let str2 = "apoorvvvv";

let resultArray = [];

for (let index = 0; index < str2.length; index++) {
  if(!arr.includes(str2[index])) resultArray.push(str2[index])
}
console.log(arr);
console.log(resultArray.join(""));