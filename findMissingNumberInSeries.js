let sortedArr = [3,5,2,4,7].sort();
let min = sortedArr[0];
let max = sortedArr[sortedArr.length - 1];

let sum1 = 0;
for (let index = min; index <= max; index++) {
    sum1 += index;
}

let sum2 = 0;
for (let index = 0; index < sortedArr.length; index++) {
    sum2 += sortedArr[index];
}

let ans = sum1 - sum2;

console.log(ans);