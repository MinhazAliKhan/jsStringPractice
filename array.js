// let persons = new Array("Johny", "Minhaz", "Ram", "Sita", "Gita");
// console.log(persons);

// console.log(students);
// console.log(persons[2]);
// console.log(persons[persons.length - 1]);
// persons[persons.length - 1] = "Mony";
// console.log(persons);
// console.log(typeof persons);

// let students = ["Ronty", "shumona", "Bappi", "johny", "Ali"];
// for (let student of students) {
//   console.log(student);
// }
// for (let studentIndex in students) {
//   console.log(studentIndex);
// }
// students.forEach((student, index, arr) => {
//   //   console.log(student);
//   //   console.log(index);
//   //   console.log(arr);
//   console.log(`my name is:${arr[index]}`);
// });
// let students = ["Ronty", "shumona", "Bappi", "johny", "Ali"];
// let student = students.map((curElem, index, arr) => {
//   //   console.log(curElem);
//   // return curElem;
//   //   return index;
//   //   return arr[index];
//   return `${curElem} ${index}`;
// });
// console.log(student);
let myNumbers = [2, 4, 1, 55, 10, 3];
let newNumbers = myNumbers.filter((curElem, index, arr) => {
  //   return curElem * 2;
  return curElem * 2;
});
console.log(newNumbers);
