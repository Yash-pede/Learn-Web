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

//Array methords

let num = [1, 2, 3, 4];

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

// let r = num.shift()
// console.log(r);
// console.log(num);

// let r = num.unshift("Yash")
// console.log(r);
// console.log(num);

// delete num
// console.log(num);

