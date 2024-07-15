// let text = "Minhaz Ali khan Minhaz";
// console.log(text.indexOf("Minhaz"));
// console.log(text.indexOf("minhaz"));
// console.log(text.lastIndexOf("Minhaz"));
// console.log(text.lastIndexOf("minhaz"));
let str = "Minhaz Ali";
let strArr = Array.from(str);
// console.log(strArr);
// for (let item of strArr) {
//   console.log(item);
// }
// strArr.forEach((item) => console.log(item));
let newItem = strArr.map((item, index) => {
  return `${item} - ${index}`;
});
console.log(newItem);
