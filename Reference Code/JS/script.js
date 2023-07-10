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
// let age = prompt("Enter your age: ");
// age = Number.parseInt(age);
// // console.log(typeof age);

// switch (age) {
//   case 1:
//     console.log("your age is too young ", age);
//     break;

//   case 3:
//     console.log("your age is too ok ", age);
//     break;

//   case 5:
//     console.log("your age is not ok ", age);
//     break;

//   default:
//     console.log("Plz Enter the correct age");
//     break;
// }

// let a = Number.parseInt(prompt("enter the 1st no: "));
// let operation = prompt("What operation would u like to perform: ");
// let b = Number.parseInt(prompt("enter the 2st no: "));

// switch (operation) {
//   case "+":
//     console.log(a + b);
//     break;

//   case "-":
//     console.log(a - b);
//     break;

//   case "*":
//     console.log(a * b);
//     break;

//   case "/":
//     console.log(a / b);
//     break;

//   default:
//     console.log("U have enterd an abrupt value");
//     break;
// }

// console.log("TERNARY OPERATOR");

// let age = prompt("Enter Your Age Below ");

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
//   console.log(i+1);
// }

// console.log("For in Loop");

// let marks = {
//   yash: 100,
//   gourav: 80,
//   baldev: 60,
//   chaitali: 40,
//   amrita: 30,
// };

// for( const a in marks){
//   console.log("marks of", a ,"is", marks[a]);
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
// } while (i < n);

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
//   return 2 + 2;
//   console.log("I am totally fine thanku");
// }

// greet();

// let r = greet();
// console.log(r);

// console.log(greet());

// function add(x, y) {
//   let result = x + y;
//   console.log(result);
// }

// add(5, 7);

//Arrow functions

// const addition = (a, b) => {
//   return a + b;
// };

// console.log(addition(1, 1));

/////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// let Marks = {
//   gourav: 100,
//   yash: 0,
//   baldev: 50,
//   amrita: -10,
// };

// console.log(Marks["amrita"]);

// for (const mark in Marks) {
//   //   console.log(mark);
//   console.log(mark, "got", Marks[mark]);
//

// let keys = Object.keys(Marks);
// console.log(keys);

// for(const a of keys){
//     console.log(a + " got", Marks[a]);
// }

// let correct_Number = 5;

// let value = prompt("PLz sir enter the value: ");

// if (value != correct_Number) {
//   console.log("TRY AGAIN");
// } else {
//   console.log("7 crore");2

// }

let y = "🍓";
console.log(y);
