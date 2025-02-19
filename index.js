//rest parameter
// function sum (a,b){
//     return a+b;
// }

// console.log(sum(1,2,3,4));

// function sumAll(...args){
//     let sum = 0;
//     for(let arg of args) sum += arg;
//     return sum;
// }
// console.log(sumAll(1,2,3,4,5));


// function names(firstName , lastName , ...titles){

//     console.log(firstName + ' ' + lastName);
//     console.log(titles[0]);
//     console.log(titles[1]);
// }

// names("lakshya" , "shrivastava" , "avdhesh" , "ayan");

// //spread syntax 
// let arr1 = [3,8,5,6];
// let arr2 = [5,8,10,1];

// // console.log(Math.max(...arr1 , ...arr2));

// let merged = [...arr1 , ...arr2];
// console.log(merged);


// let str = "hello";
// console.log([...str]);


// let arr = [2,3,4,5,6]

// let copyarr = [...arr];

// console.log(JSON.stringify(arr) === JSON.stringify(copyarr));
// console.log(arr==copyarr);


// let arr =  ["apple" , "mango" , "banana"];
// console.log(arr.splice(1,1));

// let employee = [
//     {id: 1 , namee: "lakshya"},
//     {id: 2 , namee: "utkarsh"},
//     {id: 3 , namee: "shrivastava"}
// ]

// //let user = employee.find(item => item.id == 2);
// let user = employee.filter(item => item.id < 1);
// console.log(user.length);



// let arr1 = ["lakshya", "shrivastava" , "indore" , "madhya pradesh"]

// let arr2 = arr1.map(item => item.length)
// console.log(arr2)


// let str = "lakshya, shrivastava ,indore"
// // console.log(str.toLowerCase());
// // console.log(str.toUpperCase());
// // console.log(str.slice(1,4))
// console.log(str.substring(2,15))


// let text1 = "      Hello World!      ";
// let text2 = text1.trim();
// console.log(text2);



// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };
  
//   for(let code in user){
//     console.log(code)
//     console.log(user[code])
//   }



// function makecounter(){
//     let count = 0;
//     return function () {
//         return count++;
//     }
// }

// let countee = makecounter();

// console.log(countee());
// console.log(countee());
// console.log(countee());
// console.log(countee());

//set timeout and set interval


// function count(){

//     console.log("hello world")
// }

// setInterval(count , 2000);



// function showname(first , last){

//     console.log(first + " " + last);
// }

// setInterval(showname , 1000 , "lakshya", "shrivastava");


// setTimeout(function run(){

//     console.log("hy there")

//     setTimeout(run , 1000);

// },2000)


//revisited arrow function

function defer(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
  }
  
  function sayHi(who) {
    console.log('Hy, ' + who);
  }
  
  let sayHiDeferred = defer(sayHi, 2000);
  sayHiDeferred("lakshya"); 
