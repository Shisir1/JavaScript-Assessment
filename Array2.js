
const numbers1 = [175,50,25];

document.getElementById("demo").innerHTML = numbers1.reduce(myFunc);

function myFunc(total,num){
    return total - num;
}
let shoppingCart = [
                    {product: 'phone',qty: 1,price: 699},
                    {product: 'Screen Protector',qty: 1,price: 9.98},
                    {product: 'Memory Card',qty: 2,price: 20.99}
                    ];

const total1 = shoppingCart.reduce(total1,b) => total1 + b.price,0)
console.log(total1)


//Objects 
let shoppingCart = [
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

)}
console.log(finalFilterResult)

