// let text = "java Script";
// let strArr = Array.from(text);
// // console.log(strArr);
// let strMap = strArr
//   .map((curElem, index) => {
//     return `${curElem}-${index}`;
//   })
//   .filter((elem) => {
//     return elem !== null;
//   });
// console.log(strMap);
// let str = "I am Minhaz";
// // console.log(str.indexOf("Minhaz"));
// let arr = Array.from(str);
// // console.log(arr);
// let arrMap = arr.map((curElem, index) => `${curElem}-${index}`);
// console.log(arrMap);
// let str = "I Love Java Script. I am Java Script Developer";

// console.log(str.lastIndexOf("Java Script"));
// console.log(str.indexOf("Java Script"));
// console.log(str.search(/java Script/i));
// console.log(str.match("Java Script"));
// console.log(str.match(/Java Script/g));
// console.log(str.match(/Java script/gi));
// let value = str.matchAll("Java Script");
// console.log(...value);
// for (let item of value) {
//   console.log(item);
//   console.log(item[0]);
//   console.log(item.input);
//   console.log(item.index);
// }

// console.log(str.includes("Java Script"));

// let str = "Minhaz Ali Khan Minhaz";

// let newStr = str.slice(3, 7);
// let new1str = str.substring(3, 7);
// let new1str = str.substring(-4);
// let new1str = str.slice(-4);
// let new1str = str.replace("Ali", "Johny");
// let new1str = str.replaceAll("Minhaz", "Johny");

// console.log(newStr);
// console.log(new1str);
// console.log(str.charAt(4));
// console.log(str.charCodeAt(4));
// let str = "apple,orange,grape";
// console.log(str.split(",").reverse().join());
// console.log(str.split(""));
let a = ["apple", "ball", "cat"];
let str = a.join();
console.log(str);
console.log(str.split(","));
console.log(Array.from(str));
