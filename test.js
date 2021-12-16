// Class = "abc"
// .abc{

// }
// id = "xyz"
// #xyz{

// }

// document.getElementsByClassName('abc');
// document.getElementById('xyz');

//var, let, const,
// dat types in Js
// 1. Primitive
// 2. non Primitive

var click = false;
function myFunction() {
if(click === false){
click = true;
document.getElementById('demo').style.display = "none";
} else {
document.getElementById('demo').style.display = "block";
document.getElementById('demo').innerHTML = "Button is clicked";
click = false;
}
}