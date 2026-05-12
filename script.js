// document.getElementById("count-el").innerText = 5
// let count = 5;
// count = count + 1;

// count = count + 3
// console.log(count);

// let bonus = 45;
// console.log(bonus);

// bonus = bonus + 2;
// console.log(bonus);

// bonus = bonus + 1;
// console.log(bonus);
//  function increment() {
//   console.log("button was clicked")
//  }

// function countdown() {
//   console.log(5);
//   console.log(4);
//   console.log(3);
// }
// countdown();

  // const button = document.getElementById("increment-btn");
  // button.addEventListener("click", countdown);
// function count() {
//   console.log(42)
// }
// count();
// let lap1 = 3;
// let lap2 = 4;
// let lap3 = 5;

// function sum() {
//   const totalSum = lap1 + lap2 + lap3
//   console.log(totalSum);
// }

// sum();
// let lapComplete = 0;

// // function increment() {
// //   lapComplete = lapComplete + 1; 
// // }
// // increment();
// // increment();
// // increment();
// // increment();
// // console.log(lapComplete)




// // const countEl = document.getElementById("count-el");
// // const button = document.getElementById("increment-btn");
// // const saveBtn = document.getElementById("save-btn");
// // const saveEl = document.getElementById("save-el");

// // let count= 0;

// // function increment() {
// //   count = count + 1;
// //   countEl.textContent = count;
// // }

// // button.addEventListener("click", increment);

// // function save() {
// //  let countStr = count + " - ";
// //  saveEl.textContent += countStr;
// //  countEl.textContent = 0;
// //  count = 0;
 
// // }
// // saveBtn.addEventListener("click", save)





// // let name = 45;
// // let greet = "hello";
// // console.log(name + ", " + greet);

// // let myGreeting = name + ", " + greet;
// // console.log(myGreeting);

// // let point = 4;
// // let bonusPoint = "10";
// // let total = point + bonusPoint;
// // console.log(total);


// // const welcome = document.getElementById("welcome-el");
 

// // let name1 = "johnny ";
// // let greeting = "hello, i am john";
// // welcome.innerText = name1 + greeting;

// // welcome.innerText = welcome.innerText + "*"

// // let firstName = "amna";
// // let lastName = "labubu";
// // // let fullName = firstName + " " + lastName;
// // // console.log(fullName);

// // let name = "linda";
// // let greet1 = "Hi, there";

// // function greetLinda() {
// // console.log(greet1 + "' " + name + "!")
// // }

// // greetLinda();

// let myPoint = 3;

// function add3Point() {
//   myPoint = myPoint + 3;
// }
// function remove2Point() {
// myPoint = myPoint - 2;
// }

// add3Point();
// add3Point();
// add3Point();

// remove2Point();
// remove2Point();

// console.log(myPoint)


const purchaseBtn = document.getElementById("purchase-btn");
const errorPara = document.getElementById("error");

function purchase() {
  console.log("button clicked") 
  errorPara.textContent = "TRY AGAIN Something feels wrong!!!"

}
purchaseBtn.addEventListener("click", purchase );