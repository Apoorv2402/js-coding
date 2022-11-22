zlet str1 = "apoorvahluwalia"
let str2 = "lia"
let len = str1.length - str2.length;

let st = "";
let res = false
for(let i = 0; i <= len; i++){
  st = str1.substring(i,i + str2.length);
  if(st === str2) res = true
}
console.log(res);