//call, apply and bind
//this keyword
function greet(){
  return `Hello ${this.name}`
}
const person1 = {
  name: 'Shisir Humagain'
}
//call and apply need to be applied instantly unlik bind
console.log(greet.call(person1));
console.log(greet.apply(person1));

//bind can be stored in a variable and call anytime later on
const greet2 = greet.bind(person1);
console.log(greet2())

//Example 2 for call vs apply

//difference between Call and Apply is Call takes arguments as objects and Apply takes arguments as Array
var person2 = {
  name: "Marvin",
  age: 42,
  size: '2xM'
}
var person3 = {
  name: "John",
  age: 43,
  size: '3xS'
}
var sayHello = function(){
  console.log("Hello " + this.name)
}
var sayGoodBye = function(){
  console.log("GoodBye " + this.name)
}
sayHello.apply(person2)
sayGoodBye.apply(person3)

sayHello.call(person2)
sayGoodBye.call(person3)
//Application of call apply and bind

// closure

function getName(name){
  var branch = "CS"
  //lixical Scoping = accessing varible in inner function of parent function
  return function (age){
      console.log(`${name} is ${age} years old today and branch is ${branch}`)
  }
}
const getBio = getName('Jacob Milne')
console.log(getBio(6))

//multiply(4)(5)(6) = 120
//currying
function multiply(x){
  return function(y){
      return function(z){
      return x * y * z
      }
  }
}
console.log(multiply(4)(5)(6))

function getMultiply(firstDigit){
  var secondDigit = 5
  return function(thirdDigit){
      var result = firstDigit * secondDigit * thirdDigit
      console.log(`Multiplication of ${firstDigit}, ${secondDigit} and ${thirdDigit} is ${result} `)
  }
}
const getFirstMultiply = getMultiply(4)
console.log(getFirstMultiply(6))