console.clear();

// console.log("JS");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// NN BB SS U

// let a = null;
// let b = 55;

// let c = true;
// let d = BigInt("558862") + BigInt("4")

// let e = "Yash"
// let f = Symbol("This is a good symbol")

// let g = undefined

// // console.log(a,b,c,d,e,f,g);

// console.log(typeof a);

// Non primitive data types - Objects

// const items = {
//   Yash: true,
//   laddu: 69,
//   gourav: "Baitha h",
//   chaitali: "Is Young",
//   5: "object",
//   96: undefined,
// };

// console.log(items["Yash"]);
// console.log(items["gourav"]);
// console.log(items["chaitali"]);
// console.log(items[5]);
// console.log(items[96]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 77;
// "This is a valid JS program";
// false;

// console.log("Operators in JS");

// let a = 10,
// b = 2;
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a ** b = ", a ** b);
// console.log("a % b = ", a % b);
// console.log("a++  = ", a++ );
// console.log(a);
// console.log("++a = ", ++a );
// console.log(a);
// console.log("a-- = ", a--);
// console.log(a);
// console.log("--a = ", --a );
// console.log(a);

// console.log("Assignment Operators in JS");

// console.log("Operators in JS");
// a += b;
// console.log(a);

// console.log("Comparision Operators in JS");

// let comp1 = 6;
// let comp2 = 7;

// console.log("comp1 == comp2 is " , comp1 == comp2);
// console.log("comp1 == comp2 is " , comp1 == comp2);

// // let comp1 = 6;
// // let comp2 = 6;
// console.log("comp1 === comp2 is " , comp1 === comp2);
// console.log("comp1 !== comp2 is " , comp1 !== comp2);

// console.log("comp1 > comp2 is " , comp1 > comp2);

// console.log("Logical Operators in JS");

// let x = 5;
// let y = 6;

// console.log(x < y && x == 5);

// console.log(x > y || x == 5);

//  console.log(true && true);
//  console.log(false && true);
//  console.log(true && false);
//  console.log(false && false);

// console.log(true || true);
// console.log(false || true);
// console.log(true || false);
// console.log(false || false);

// console.log(!true);
// console.log(!false);

// single line comments

/* multi
line
comments */

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// let a = prompt("Enter Your name: ")
// console.log(a);

// console.log("If Else Statments");

// let a = 6;
// let b = 6;

// console.log(a == b);

// if (false) {
//   console.log("Mai sahi hu");
// } else {
//   console.log("Tum galat ho");
// }

//// Switch Case

// console.log("SWITCH CASE");
// // let age = prompt("En;ter your age: ")
// let age = "yash";
// // age = Number.parseInt(age);
// // console.log(typeof age);

// switch (age) {
//   case 1:
//     console.log("your age is too young ", age);
//     break;

//   case 3:
//     console.log("your age is ok ", age);
//     break;

//   case 5:
//     console.log("your age is not ok ", age);
//     break;

//   default:
//     console.log("Plz Enter the correct age");
//     break;
// }

// console.log("TERNARY OPERATOR");

// let age = prompt("Enter Your Age Below ");
// let age = 155;

// console.log("You can", (age < 18 ? "not drive" : "Drive"));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("LOOPS");

// let a = prompt("How many times you want to run the loop");

// let n = 1;

// console.log("While loop");

// while (n <= a) {
//   console.log("Chaitali mahan h ");
//   n = n + 1;
// }

// console.log("For Loop");

// for (let i = 0; i < 5; i++) {
//   console.log(i + 1);
// }

// console.log("For in Loop");

// let marks = {
//   yash: 100,
//   gourav: 80,
//   baldev: 60,
//   chaitali: 40,
//   amrita: 30,
// };

// for (const c in marks) {
//   console.log("marks of", c, "is", marks[c]);
// }

// console.log("For of Loop");

// const marks = [100, 60, 30, 80, 70, 50, 20, 10, 0];
// const marks = "GOURAV";

// console.log(marks[4]);

// for (const a of marks) {
//   console.log(a);
// }

// console.log("Do - While Loop");

// let n = 10;
// let i = 8;

// do {
//   console.log(i);
//   i++;
// } while (i > n);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let & const

// var a = "y";
// {
//   console.log(a);
// }
// console.log(a);

// ///////////////

// let yash = "don";
// {
//   let yash = "yash";

//   console.log(yash);
// }

// console.log(yash);
// yash = 50;
// console.log(yash);

// ////////////////

// const c = "|| constant hu mai tu nai h ||";
// console.log(c);
// {
//   console.log(c);
// }

// // c = 10

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Prompt

// let name = prompt("enter your name : ");
// console.log(name);
// console.log(typeof name);

// name = Number.parseInt(name);
// console.log(name);
// console.log(typeof name);

//Functions

// console.log(2 + 2);
// console.log(4+4);

// function greet() {
//   console.log("Hello sir how are you");
//   console.log("I am totally fine thanku");
//   return 2 + 2;
// }

// greet();

// let r = greet();
// console.log(r);

// console.log(greet());

// function add(x, y) {
// //   let result = x + y;
//   //   console.log(result);
//   return x + y;
// }

// let res = add(5, 1);
// console.log(res);

//Arrow function

// const sum = (x, y) => {
//   return x + y;
// };

// console.log(sum(1, 1));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log("Strings");

// let name = "yash bhai Bahot badhiya yash";

// console.log(name);
// console.log(name.length);

// let name_1 = 'single';
// console.log(name_1);

// console.log("My name is" , name);
// console.log("My name Yash and i love to play criclet i\t am a very good man");
// console.log(`My name is ${name} and i love to 'play criclet i" am a very good man`);

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(1,3));
// console.log(name.slice(1));
// console.log(name.replace("yash", "gourav")); // Only the first occurance
// console.log(name.concat("Yash","pede"));

// name = "                                Yash                                  ";
// console.log(name.trim());

// name = "yash Bhau"
// console.log(name[5],"unique");

// console.log(name.startsWith('Y'));
// let a = name[3]
// console.log(a);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Ps

// let fruits = ["banana", "apple", "orange", "guava"];
// console.log(fruits[3]);

// let a = [undefined, null, "yash", 25, "024.54", true];
// console.log(a);

// let marks = [50, 10, 45, 85, null, "not Present"];

// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks[5]);
// console.log(marks[6]);

// console.log("The length of marks is : ", marks.length);

// marks[6] = 69;
// console.log(marks[6]);

// marks[0] = 99;
// console.log(marks[0]);

// console.log(typeof marks);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array

// let marks = [50, 10, 45, 85, null, "not Present"];

// console.log(marks);
// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);
// console.log(marks[4]);
// console.log(marks[5]);
// // console.log(marks[6]);

// console.log("The length of marks is : ", marks.length);

// marks[6] = 69;
// console.log(marks[6]);

// marks[0] = 99;
// console.log(marks[0]);

// console.log(typeof marks);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array methords
// let num = [1, 2, 3, 4];

// let b = num.toString();
// console.log(b);
// console.log(typeof b);

// let c = num.join("_");
// let c = num.join(" and ");
// console.log(c, typeof c);

// num.pop();
// let r = num.pop();
// console.log(num);
// console.log(r);

// let r = num.push(55);
// console.log(num);
// console.log(r);

// let r = num.shift();
// console.log(num);
// console.log(r);

// let r = num.unshift(55);
// console.log(num, r);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19];
// console.log(num);

// delete num[3];
// console.log(num);

// let new_array = num.concat(num_more);
// console.log(new_array);

// let compare = (a, b) => {
//   return a - b;//decending
// //   return b-a;//assending
// };
// num_more.sort(compare)
// console.log(num_more);

// Splice and slice
// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// num.splice(2, 3, 777, 999, 666);
// console.log(num);

// let del_values = num.splice(2, 3, 777, 999, 666);
// console.log(del_values, num);

// let new_num = num.slice(3);
// let new_num = num.slice(3, 7);
// console.log(new_num);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Loops For arrays

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for(let i =0; i<num.length; i++){
//     console.log(num[i]);
// }

//For Each
// num.forEach((element) => {
//   console.log(element * element);
// });

// Array from
// let name = "Yash"
// let arr = Array.from(name)
// console.log(arr);

// for...of
// for (const i of num) {
//     console.log(i);
// }

// for...in
// for (const i in num) {
//     // console.log(i);
//     console.log(num[i]);
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Array map

// let arr = [54, 68, 36, 35];
// console.log(arr);

// let a = arr.map((value, index, array) => {
//   console.log(value, index, array);
//   return value + index;
// });

// console.log(arr);
// console.log(a);

//Array Filter
// let arr2 = [5, 3, 4, 3, 43, 11, 65];

// let a2 = arr2.filter((a) => {
//   return a < 10;
// });
// console.log(a2);

//Array Reduce

// let arr3 = [1, 2, 3, 4, 5, 2, 4];

// let new_arr3 = arr3.reduce((a, b) => {
//   return a + b;
// });
// console.log(new_arr3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercise

// let number = Math.round(Math.random() * ((0, 100) + 0));
// // console.log(number);

// let usr_no = Number.parseInt(prompt("Enter the no to guess : "));

// console.log("U now have 100 chaces to guess the correct number ");

// let chances = 100;

// do {
//   console.log("Enter Your guess again");
//   usr_no = Number.parseInt(prompt("Enter the no to guess : "));
//   chances = chances - 1;

//   if (usr_no > number) {
//     console.log("Plz Guess a lil Lower");
//   } else {
//     console.log("Plz Guess a lil Higher");
//   }
// } while (number !== usr_no && chances > 0);

// if (chances == 0) {
//   console.log("You are out of chances ");
// } else {
//   console.log("Congrulation You won");
//   console.log(
//     `Your Score is ${100 - chances} and the correct Number is ${number}`
//   );
// }

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//CONSOLE

// console.log(console);

// console.error("This is a error");

// console.assert(5 > 7);
// console.assert(5 < 7);

// console.clear();

// let obj = {
//   1: "Yash",
//   2: "Piyush",
//   3: "Krishna",
// };
// console.table(obj);

// console.warn("Hey this is a warning");

// console.info("Hey this is a info");

// console.time("a");
// console.timeEnd("a");

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

//alert,prompt,confirm

// alert("Hello script works")

// let a = prompt("Enter the value of a: ", "50");
// a = Number.parseInt(a);
// // document.write(a);
// // document.write("<h1>I am loving JS</h1>");

// let write = confirm("Do u want to write this on page");

// if (write) {
//   document.write(a);
// } else {
//   document.write("Plz allow me 2 write ");
// }

// document.body.style.background = "khaki"

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// document.body;
// document.head;
// document.documentElement;
// document.title; /*-->string*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
// console.log(document.body.childNodes);
// console.log(document.body.childNodes[0]);
// console.log(document.body.firstChild);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// $0 - $1

// console.log(document.body.firstChild);
// let a = document.body.firstChild;

// console.log(a.parentNode);
// console.log(a.parentElement);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// const changeBgColor = () => {
//   document.body.firstElementChild.style.background = "red";
// };

// let b = document.body;
// console.log("The first child of b is : ", b.firstChild);

// console.log("The first Elementchild of b is : ", b.firstElementChild);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let id1 = document.getElementById("id1");

// console.log(id1);

// let class1 = document.getElementsByClassName("class1");
// console.log(class1);

// console.log(id1.matches(".class"));

// console.log(document.body.childNodes);

// console.log(document.body.children);

// console.log(document.body.firstChild)
// console.dir(document.body.firstElementChild)

// console.log(document.querySelectorAll(".class1"));
