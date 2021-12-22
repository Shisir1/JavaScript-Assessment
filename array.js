function calcSum (arr){
  var total = 0;
for(var i =  0; i < arr.length; i++){
  if(typeof arr[i] == 'number'){
  total += total + arr[i];
  }
}
  return total;

}
calcSum(1,4,3,6,8)
calcSum(1,9,3,6,8)

var array = [1,2,3];
//Insert 4,5,6
array.push(4)
array.push(5)
array.push(6)
console.log(array)

//insert 0,-1,-2 in beigining
array.unshift(0)
array.unshift(-1)
array.unshift(-2)

//Delete last element from array
array.pop()

//Delete first element
array.shift()

//reverse the array
const fruits = ['Banana','Apple','Orange']
for(i = fruits.length-1; i >=0; i--){
  console.log(fruits[i])
}


const d = new Date(2020,10,12);
console.log(d)
document.getElementById('datObj').innerHTML = d;

const date2 = new Date();
console.log(date2.getDate());

setTimeout(function(){
  console.log('Shisir')
},2000)

setTimeout(sayHi,3000){
  var interval = setInterval(function(
  console.log('Shisir');
  )
},2000)
clearInterval(interval)

for(var i = 0; i < 4; i++){
  setTimeout(function(){console.log(i)},1000)
}

//hoisting
console.log(hoist)
var  hoist;

const ab = 2; // the value of const variable can not be changed

{
  let x = 1;
}
console.log(x) //not accessable outside the box because of scope of let



{
  x = x + 1
  let x;
  console.log(x)  //ReferenceError because it can't be assigned before declaration 
}

var x = 4;
{
  if(x){
    x = x+1
    console.log(x)  //output = 5
  }
  let x; 
  console.log(x) //output = 4
}
console.log(x)  //output = 4

let count = 4;
let count = 5;  //error

function foo(n){
  if(n == 6){
    let num = 2;
    //chenged to var to avoid error
  }
  console.log(num); //ReferenceError
}

var n = 6;
console.log(n);  //prints 6

for(var i =0; i < 5; i++){
  console.log(i)
}
console.log(i)  //prints 5
for(let j = 0; j< 5; j++){
  console.log(j) //ReferenceError
}

const arr = [1,2,3,4];
arr = [5,6] //TypeError

const arr = [1,2,3,4];
arr.push(5,6) //Is possible because its not re-assignment but all operation are possible


{
  let x = 4;
  {
    let y = 6;
    console.log(x) // it will print 4 because x variable is global for child block
  }
}

//ES6
var numbers = [30,40,50];
numbers.map(function(value,i){
  console.log(value,i) //prints all elements of the array
  //value is required but index and array are optional
})


function sum(a,b){
  var total = 0;
  total = a + b;
  return total;
}
console.log(sum(2,3))

//Arrow functions 
let sum = (a,b) => a + b;
console.log(sum(2,3))

//Arrow 2nd way
let sumArrow = (a,b) => {
  let total = 0;
  total = a + b;
  return total;
}
console.log(sumArrow(2,4))

const ages = [32,33,16,28];
const 