// output on console/termimal
console.log ("eliab")
console.log (6)
console.log(6.0)
// JAVASCRIPT STATEMENTS (instruction for execution)
// javascript syntax : defination of two types of values
// 1. Fixed value : literals 2. variable values(store data value)
// js variables
// it is a name container that stores data values used to store, retrieve,manipulate the data dring execution
// how to define variable in js
// 3 ways 1. var 2.let 3. const
var age = 17
let name = "karan"
const PI = 3.145

console.log(age,name,PI)
// differences with variable declarations( let,var,const)
// 1. scope 2. hoisting 3. reassignment 4.blockscoping
// reassignment :mutability and immutability
// mutable : able to undergo change (variables defined using var let)
// immutability:const
// P.I = 2.5
// CONSOLE.LOG(PI)  Ooutput will be a type error

let x = 12 
let y = 20
let sum = x + y
console.log(sum)
  a = 5 
  b = 7 
let temp =a
   a = b
   b = temp
   console.log(a,b)

//    1. Number : all numeric values (intergers(int) : whole number)
// :floats : (decimal notations)
// 2. strings : sequence of characters enclosed in ' or ""
// 3. booleans : only two possible vlues if.e true(1) / false (0)
// 4 .null : only one value : (null nothing here)
// a = null
// undefined : only one value undefined ... represents any uninitialized or
// unassignedvalue
// 6.symbols : represents unique identifier
// 7. object : data type collection of key and value pairs
// {
    // "key : value"
// }
let j = 5 + 5.3
console.log(typeof j)
