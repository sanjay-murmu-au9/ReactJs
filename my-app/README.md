Next-Gen JavaScript :- Array function , let const etc; which allow us to code clean;

Let:- variable values
Const :- Constant Values;

# let is new var;
const is for constant, which you only assign once and never change, cannot re-assign;

link:- jsbin.com

// Arrow funtion
const multiply = (number)=>{
	return number * 2;
}

console.log(multiply(2)) ===> 4

or
// normal function
function myFnc(){
 ...
}

const Myfun =()=>{
...
}

function printMyName(name){
console.log(name)
}

printMyName() // ----> undefined;

-----------------

function printMyName(name){
console.log(name)
}

printMyName('sanjay') // -----> sanjay

<<<<<<<<<<<<<<<<<

const printMyName=(name)=>{
console.log(name)
}

printMyName('sanjay') // sanjay;

or
const printMyName= name=>{ // can be removed parameter for existly one argument;
console.log(name)
}

printMyName('sanjay')  // ----> sanjay

or

const printMyName= ()=>{ 
console.log('sanjay')
}

printMyName();  // ----> sanjay

or
const printMyName= (name,age)=>{ 
console.log(name,age)
}

printMyName('sanjay',22);  // ----> sanjay, 22

const multiply = (number)=>{
 return number * 2;
}

console.log(multiply(2)); // 4

or

const multiply = number => number * 2; 
console.log(multiply(2)) //==> 4

###############################################

# Exports & Imports (Modules)
1. person.js // file
const person={
  name: 'Max'
}

export default person;

2. Utility.js
export const clean =()=>{...}
or
export const baseData = 10;

# Importing in app.js;
  import person from './person.js';
  import prs from './person.js'

 import {smth} from './utility.js' // exect name;
 import {smth as Smth} from './utility.js'  // elis name
 import * as bundle from './utility.js';  // exporting all;




// Classes --- // are Blueprint for Object;

class Person {
	name = "Max" ---> Property || Properties are like "varibles attached to classes/objects"
	call = ()=>{...} --> Methods || Methods are like "functions attached to classes/objects";	
    } 

const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)

class also support Inhertance;
class Person extends Master;


## Exapmle ##
class Human {
  constructor(){
	this.gender = "male";
   }

   printGender(){
	console.log(this.gender);
   }
}

class Person extends Human {
   constructor(){
   super(); ---------------> is to inhertance with extends keyword
   this.name = "Sanjay";	
}

 printMyName(){
   console.log(this.name);	
  }

}

const person = new Person();
person.printMyName(); ---> Sanjay
person.printGender(); ----> male

-----------------------------xxxx----------------------------;
# Classes, Properties & Methods
# Properties are like "variables attached to classes/objects";
# Methods are like "functions attached to classes/objects";

ES6
# Property;
constructor(){ 
  this.myProperty = "value"
}

ES7
myProperty = "value"

#Methods:-
	ES6;
myMethod(){...}

ES7
myMethod =()=>{}

----------ES7 Next Gen Func -----------------

class Human {
    gender = "male" 

   printGender=()=>{
	console.log(this.gender);
   }
}

class Person extends Human {
	name = "Max";
	//gender = "female";
	
	printMyName = () => {
	   console.log(this.name);
	}
 }

const person = new Person();
person.printMyName();  ---> Max
person.printGender();  ----> female // male

=========X X X ===========
Spread & Reat Operator

# ...(3 dots) -> called operators

# Spread Operator:-used for splits array elemets or object properties; || spread takes out all elements all properties and distrubes them in a new array or object;

Example:- const newArr = [...oldArray, 1,2] // for arr element;
	    const newObject = {...oldObject,newProp:5} // for obj property

Example:-
	const numbers = [1,2,3];
	const newNumbers = [...numbers, 4]; 
	console.log(newNumbers); //---> [1,2,3,4]

const newNumbers = [...numbers, 4]; 
console.log(numbers,4) // ===> [[1,2,3],4];


//with obj;
const newObject = {...oldObject, newProp:5} || if there remain newProp: 5 will be over written by "new newProp:5;"

const person = {
   name:'Sanjay',
};

const newPerson = {
    ...person,
    age:24	
}

console.log(newPerson); --->{age: 24, Name:sanjay}


===================XXXX==========================

# Rest:- Used to merge a list of function arguments into an array; || unlimited list of arguments.
	
function sortArgs(...args){
	return args.sort()
}

const filter = (...args) => {
    return args.filter(elm => elm === 1);
}

console.log(filter(1,2,3)); ---> [1]

================================XXXX=============================

# Destructuring
-> Easily extract array elements or object properties and store them in variables; || it allow you to pull out single elements or properties and store them in variables for arrays;

Array destructuring
 [a,b] = ["Hello","Max"]
 console.log(a) --> Hello
 console.log(b) // Max

or

const numbers = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1,num3); ---> 1,3

Object destructuring
{name} = {name:'Max',age:28} || target exact name property;
console.log(name)// --> Max
console.log(age) //---> undefined


===================XXX=========================

# Reference and Primitive Type;
# Primitives:- boolean, string, Number;

# Reference type:- {},[]

const number = 1;
const num2 = number; ---> 1; it copied the value; (numbers, strings, booleans) are called primitive type whenever you re-assign or you store, it will copy the value;

 
object and arr are reference types:-
const person = {
  name:'Max'
};

const secondPerson = person;
person.name = 'Manu';
//console.log(secondPerson); ---> name: "Max"; // here obj. is stored in memory where else in const person we store a pointer to that place in memory; 
console.log(secondPerson); // name:'Manu';

# Real Copy;

const person ={
   name:'Max'
}

const secPerson = {
	...person
   };

person.name="Manu";
console.log(secPerson) //------> name:"Max"



## Arr Func ########
const numbers = [1,2,3];

const doubleNumArray = numbers.map((num) =>{
   return num * 2;
});

console.log(doubleNumArray) --> [2,4,6]
