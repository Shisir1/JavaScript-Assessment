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


