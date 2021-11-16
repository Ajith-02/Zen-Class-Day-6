//Hoisting
console.log("Welcome to Js");
console.log(a); // undefined
var a;


// JS first look for a declaration
//JS is JIT - Just In Compilation
// It is a 2 pass system
// 1 - pass - compilation
// 2 - pass - execution
// JS guy - context guy

// 1 - pass - compilation
console.log(a); // undefined
var a = 5; // remember the name "a"

// 2 - pass - execution
console.log(a); // console.log is a statement,
//JS guy asks the context, do you know "a" ? Yes - context - undefined
var a = 5; // remember the name "a"
// JS guy - context
// do you know "a" ? yes - context
// so go & put value as 5
// context puts the value 5

console.log(a);
// JS guy - context
// do you know "a" ? yes - context
// Yes, value is 5

// 1 - pass - compilation
//console.log(b); //Cannot access 'b' before initialization
let b = 10; // remember the name "b"  
//dont initialize the value to undefined
// context remember the name

// 2 - pass - execution
console.log(b);// JS guy asks - context guy; do you know "b"?
//yes- context; tell me the value - i dont know(you only said me to  not to initialize)

// var - hoisted
// let, const - not hoisted

//temporal dead zone(refer google)

let r1 = 10;
r1 = 30;
console.log(r1);
// let can be reassigned(assignment operator)

/*const r2 = 10;
r2 = 40;
console.log(r2);*/
//reassignment is not possible


// Scope
// life of a variable

// var c1 = 6; this is a global scope
function nice(){
    var b1 = 5; // scope
    // var variable function scoped
    console.log(b1); 
}
nice();

//block scope
{  //{} is called block, let and const live within the block
    let t1 = 20;
    var t2 = 50; // var is a function scope
}
//console.log(t1); 
console.log(t2); 
 /*
var r5 = 6;
var r5 = 100;// var can be re declare
let r6 = 7;
let r6 = 100; // let cannot re declare
*/
// var & let re declaration is a difference
//let & const re assignment isa difference

var price = 500;
function fun(){
    console.log("the old price is", price);
    var price = 400;
    console.log("the old price is", price);
}
fun();

//lexical scope; function accessed outside of the function is lexical scope
var price = 500;
function fun(){
    console.log("the old price is", price);
    //var price = 400;
    console.log("the old price is", price);
}
fun();


// Anonymous function - function without name

const y2 = function(){
    console.log("hi");
}()