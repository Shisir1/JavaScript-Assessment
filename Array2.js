
const numbers1 = [175,50,25];

//document.getElementById("demo").innerHTML = numbers1.reduce(myFunc);

function myFunc(total,num){
    return total - num;
}
let shoppingCart = [
                    {product: 'phone',qty: 1,price: 699},
                    {product: 'Screen Protector',qty: 1,price: 9.98},
                    {product: 'Memory Card',qty: 2,price: 20.99}
                    ];

const total1 = shoppingCart.reduce((total1,b) => total1 + b.price,0)
console.log(total1)


//Objects 
let shoppingCart2 = [
                    {product: 'phone',qty: 1,price: 699},
                    {product: 'Screen Protector',qty: 1,price: 9.98},
                    {product: 'Memory Card',qty: 2,price: 20.99}
                    ];

let items = {product: 'phone',
qty: 1,price: 699,
firstName: 'Apple',
getDetails: function(){
    return this.firstName + " " + "Price is " + this.price
    }
                }
                items.getDetails()
console.log(items.price)
console.log(items['price'])  //Same result

const person = {}
person.firstName = 'Shisir'
person.lastName = 'Humagain'


var a = 5;
var bCopy = a;
console.log(bCopy)


// Spread operator or triple dot operator
const itemsCopy = {...items};

// [...arr]
console.log(itemsCopy)
itemsCopy.product = 'iphone'

let user = {};
alert(user.noproperty === undefined);

//key in object
user = {age: 30,isAdmin: true, };
alert ("age" in user)

//for in loop
for(let ky in user){
    alert(ky)
    console.log(ky)
}

let m = {
    width: 200,
    height:300,
    title: "my menu"
}
//duplicate above object m
let clone = {};
for(let k in m){
    clone[k] = m[k]
}
clone.title = "diff"
console.log(Object.assign(clone,{isShow: true},{age:40}))
//using spread operator
console.log({...clone, isShow: false, fulldetails: 'Shisir Humagain'})

//object.entries will return Keys
//object.values will values 
console.log(Object.entries(m))
console.log(Object.values(m))

//Object(hasOwn) to check if Object has specific properties or not
let objc = [{'ag': 5},{'fn': 'Shisir'},{'fn':'vv'}]
objc.prop = 'exists';
if(Object.hasOwn(objc,'prop')){
    console.log('\'prop\'is owned')
}


function multiplyOnlyNumeric(m){
    for(let key in m){
        if(typeof m[key] ==='number'){
            m[key] = m[key]*2
        }
    }
}
multiplyOnlyNumeric(m)
console.log(m)

//compare obj
let f = {};
let b = f;
console.log(f == b)
console.log(f === b)

//two independent objects are not equal even if they are same or they look same
let d = {};
let e = {};
//obove two objects are not same


function sorting(){
    let sort = false;
    if(element > 5){
        sort = !sort1;
    }
}


//Removing duplicate elements
let characters = ['A','B','C','D','A','B'];

//set
let uniqueChar = [...new Set(characters)];
console.log(uniqueChar)

//forEach, include
let uniqueChar2 = [];
characters.forEach((c) => {
    if(!uniqueChar2.includes(c)){
        uniqueChar2.push(c)
    }
    })
console.log(uniqueChar2)

//indexof
characters.forEach((c,index) => {
    console.log(`${c} - ${index} - ${characters.indexOf(c)}`);
    console.log(index);
    console.log(characters.indexOf(c))
    })
//filters
let finalFilterResult = characters.filter((c,index) => {
    return characters.indexOf(c) === index;

})
console.log(finalFilterResult)

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

//rest operator
//{...obj}
// [...arr]

//for...of loop
function sumofNum(...args){
    console.log(...args)
    let total = 0;
    for(let arg of args){
        total = total + arg
    }
    return total;
}
sumofNum(2,3,4,5,6,7,8,9)

