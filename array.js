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
//Delete first element

//reverse the array
const fruits = ['Banana','Apple','Orange']
for(i = fruits.length-1; i >=0; i--){
  console.log(fruits[i])
}