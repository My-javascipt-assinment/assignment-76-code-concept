/*==================================== Question No 1 =========================================
split and join
split convert string to array 
and join convert array to string
======================================= Answer =====================================*/
// let str = 'apple mangoes grapes banana';
// let ans = str.split(' ');
// console.log(ans)

// let newStr = ans.join(' ')
// console.log(newStr)

/*==================================== Question No 2 =========================================
includes check in array or string that our required element is existed or not
======================================= Answer =====================================*/
// let str = 'hello js'
// console.log(str.includes('jsd'))
// let arr = ['apple','banana','mango']
// // console.log(arr.includes('banana'))
/*==================================== Question No 3 =========================================
startsWith and endsWith
======================================= Answer =====================================*/
// let str = 'what is your name'
// console.log(str.startsWith('w'))
// console.log(str.endsWith('names'))

/*==================================== Question No 4 =========================================
This always refers to the object where it belong
======================================= Answer =====================================*/
// let obj = {
//     firstName : 'Ali',
//     lastName : 'khan',
//     info : function(){
//         console.log(`${this.firstName}  ${this.lastName}`)
//     }
// }
// obj.info()
/*==================================== Question No 5 =========================================
/..../ regular expressiong 
\d metcharacter 0 to 9 
.test() method of reigex
.match() draw values from pattern
======================================= Answer =====================================*/
// let name = 'abc12@';
// let ans = /\d/.test(name);
// let draw = name.match(/\d/g)
// console.log(draw)
// console.log(ans)

/*==================================== Question No 6 =========================================
.toFixed rounds also
======================================= Answer =====================================*/
// let num = 12.34526262;
// console.log(num.toFixed(2))

/*==================================== Question No 7 =========================================
string to number converting 
+, 
Number()
parseFloat()
parseInt()
======================================= Answer =====================================*/
// let num = '42324.6434';
// console.log(num,typeof num)
// // let number = +(num);
// // let number = Number(num)
// // let number = parseFloat(num)
// let number = parseInt(num)
// console.log(number)

/*==================================== Question No 8 =========================================
number to string 
+,'',
toString()
string()
======================================= Answer =====================================*/
/* let num = 3965
console.log(num,typeof num)
// let str = num + '';
// let str = num.toString();
let str = String(num)
console.log(str,typeof str) */
/*==================================== Question No 9 =========================================
toLowerCase and toUpperCase
======================================= Answer =====================================*/
// let str = 'ABCsfer';
// // let ans = str.toLowerCase();
// let ans = str.toUpperCase();
// console.log(ans)

/*==================================== Question No 10 =========================================
Math.ceil,foor,abs,sqrt,random
======================================= Answer =====================================*/
// let num = 2224.54643;
// // let ans = Math.round(num);
// // let ans = Math.floor(num)
// let ans = Math.ceil(num)
// console.log(ans)

// let num = 9;
// console.log(Math.sqrt(num))

// let num = -9859.3525;
// console.log(Math.abs(num))

// let num = Math.ceil(Math.random()*2);
// console.log(num)
/*==================================== Question No 11 =========================================
ternary opertator if/else ka short hy
======================================= Answer =====================================*/
// let age = prompt('enter age')
// let ans = (age >=20)?('eligible'):('not eligible');
// console.log(ans)

/*==================================== Question No 12 =========================================
for/nested for loop
======================================= Answer =====================================*/
// for(let i = 1;i <=5;i++){
//     console.log('initial ',i)
//     for(let j = 1; j <=10;j++){
//         console.log('another ',j)
//     }
// }

/*==================================== Question No 13 =========================================
push,pop,shift,unshift,slice,splice
======================================= Answer =====================================*/
// let fruits = ['mango','apple','banan','grapes'];
// console.log(fruits)
// // let ans = fruits.pop()
// // let ans = fruits.push('dates')
// // let ans = fruits.shift()
// // let ans = fruits.unshift('melon')
// // let ans = fruits.slice(-3)
// let ans = fruits.splice(1,1,'krela','bhindi')
// console.log(fruits)
// console.log(ans)

/*==================================== Question No 14 =========================================
escape sequence character \n for line break
======================================= Answer =====================================*/
// let ans = 'i am learngn \n js'
// console.log(ans)

/*==================================== Question No 15 =========================================
declaration / initialization of variables
======================================= Answer =====================================*/
// let str ;
// console.log(str)
// let a = 'hello'
// console.log(a)

/*==================================== Question No 16 =========================================
undefinde/null 
======================================= Answer =====================================*/
// let a = null
// console.log(a)

/*==================================== Question No 17 =========================================
postIncrement/decrement/
preIncrement/decrement
======================================= Answer =====================================*/
// let num = 0;
// console.log(num++)
// console.log(++num)

// let num = 5;
// // console.log(num--)
// console.log(--num)

/*==================================== Question No 18 =========================================
new Date()
type of it is object
======================================= Answer =====================================*/
// let date = new Date()
// console.log(date,typeof date)
// // console.log(date.toLocaleDateString())
// // console.log(date.toLocaleTimeString())
// // console.log(date.toLocaleString())
// // console.log(date.getTime())
// console.log(date.getHours())
// console.log(date.getMonth())
// console.log(date.getDay())
// console.log(date.getFullYear())
// // console.log(date.setDate('20'))
// date.setDate(20)
// date.setHours(1)
// date.setMonth(11)
// console.log(date)

/*==================================== Question No 19 =========================================
primitive data type haveing single values 
and are 7, string,number,boolean,null,undefined,symbol,bigInt
======================================= Answer =====================================*/
// let str = 'hello'
// let number = 212314;
// let isFit = ok ;
// let goal  ;
// let salary = null;
// let num =54789509250578n;
// let smb = Symbol('id')

// non-primitive data type haveing multiple values storing like array, objects and function 
// are non primitive data types
/*==================================== Question No 20 =========================================
difference among local,session storage and cookies
======================================= Answer =====================================*/
// local storage can not deleted auto  
// session storage deletes when we move to another tab 
// the deletion of cookies we set ourselves

/*==================================== Question No 21 =========================================
NaN
======================================= Answer =====================================*/
// let number = 3487;
// let str ='ok'
// console.log(number/str)

/*==================================== Question No 22 =========================================
.replaceAll and replace
======================================= Answer =====================================*/
// let str = 'apple is like by me apple is good for health'
// console.log(str)
// let ans = str.replaceAll('apple','mango')
// console.log(ans)

// let str = 'apple is not liked apple is not good'
// // for(let i = 0;i < str.length;i++){
// //     console.log(str[i])
// // }
// console.log(str)
// let spl = str.split(' ');
// console.log(spl)


/*==================================== Question No 23 =========================================
index of and lastIndexOf 
======================================= Answer =====================================*/
// let str  = 'lovelleovely'
// console.log(str.indexOf('v'))
// console.log(str.lastIndexOf('v'))

/*==================================== Question No 24 =========================================
let  querySelector and querySelectorAll
======================================= Answer =====================================*/
// let need = document.querySelector('li')
// let need = document.querySelectorAll('li')
// console.log(need)
// for(let i = 0;i < need.length;i++){
//     console.log(need[i].innerHTML)
// }

/*==================================== Question No 25 =========================================
document.createElement for makeing tag 
document.createTextNode for writing text inside tag
======================================= Answer =====================================*/
// let el = document.createElement('h1')
// let elText = document.createTextNode('Hello what are you doing');
//   el.appendChild(elText)
// document.body.appendChild(el)

/*==================================== Question No 26 =========================================
focus
======================================= Answer =====================================*/
// let input = document.getElementById('ipt');
// console.log(input)
// input.focus()
// let two = document.getElementById('two')
// two.focus()
/*==================================== Question No 27 =========================================
str.replace(/\s+/g,' ')
white space removal 
.trim()
======================================= Answer =====================================*/
// let str = ' what is    your       name '
// console.log(str,str.length)
// let ans = str.trim()
// console.log(ans, ans.length)
// let n = str.replace(/\s+/g,' ')
// console.log(n, n.length)

/*==================================== Question No 28 =========================================
.flat is used for removing nested array
======================================= Answer =====================================*/
// let arr = [1,2,[3,4,[5,6,[7,8]]]]
// console.log(arr)
// let ans = arr.flat(Infinity)
// console.log(ans)

/*==================================== Question No 29 =========================================
falsy values 
'',undefinded,false,NaN,null,0
======================================= Answer =====================================*/
// if('ikd'){
//     alert('ok')
// }
// else{
//     alert('falsy value')
// }
/*==================================== Question No 30 =========================================

======================================= Answer =====================================*/
/* // second 
let ul = document.getElementById('ul');
let todoInput = document.getElementById('todo-input');
console.log(ul);
console.log(todoInput);
let btn = document.getElementById('btn');
let elementIDUpdate = null;

// delete item function 
function deleteItem(liId){
    console.log(liId,typeof liId)
    let targetLi = String(liId)
    let liForDelete = document.getElementById(targetLi);
    console.log(liForDelete);
    ul.removeChild(liForDelete)

}

// function addItem
function addItem(){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    let editItemButton = document.createElement('button');
    let liText = document.createTextNode(todoInput.value);
    let delBtnText = document.createTextNode('delete button');
    let editButtonText = document.createTextNode('Edit Item')
    editItemButton.appendChild(editButtonText);
    deleteButton.appendChild(delBtnText);
    li.appendChild(liText);
    console.log(li);
    let randomId = new Date().getTime();
    deleteButton.setAttribute('onclick',`deleteItem(${randomId})`);
    editItemButton.setAttribute('onclick',`editItem(${randomId})`)
    li.setAttribute('id',randomId)
     
 
    // console.log(randomId)
    ul.appendChild(li);
    li.appendChild(deleteButton);
    li.appendChild(editItemButton)
    
    todoInput.value = '';
}
// function updateItem 
function updateItem(){
   let li = document.getElementById(elementIDUpdate);
   li.firstChild.nodeValue = todoInput.value;
   btn.removeAttribute('onclick');
   btn.setAttribute('onclick','addItem()');
   btn.innerHTML = 'Add Item';
   elementIDUpdate = null;
   todoInput.value = '';
}
// function edit item 
function editItem(liId){
console.log('edit: ',liId)
let targetLi = String(liId);
let liForEdit = document.getElementById(targetLi);
let li = liForEdit.firstChild.nodeValue;
todoInput.value = li;
btn.innerHTML = 'update Item';
btn.removeAttribute('onclick');
btn.setAttribute('onclick','updateItem()');
elementIDUpdate = liId;
} */

/*==================================== Question No 31 =========================================
todolist
======================================= Answer =====================================*/
// let ul = document.getElementById('ul');
// let todoInput = document.getElementById('todoInput');
// console.log(ul)
// console.log(todoInput);
// let btn = document.getElementById('btn');
// let elementIDUpdate = null;


// //add item function
// function adding(){
//     let li = document.createElement('li');
//     let liText = document.createTextNode(todoInput.value)
//     // console.log(liText)
//     li.appendChild(liText)
//     ul.appendChild(li)
//     // deleteButton
//     let deleteButton = document.createElement('button');
//     let delBtnText = document.createTextNode('delete Item');
//     deleteButton.appendChild(delBtnText)
//     li.appendChild(deleteButton)
//     let randomId = new Date().getTime()
//     console.log(randomId)
//     deleteButton.setAttribute('onclick',`deleting(${randomId})`)
//     li.setAttribute('id',randomId);
//     // console.log(li)
//     // edit btn
//     let editItemButton = document.createElement('button');
//     let editButtonText = document.createTextNode('edit Item');
//     editItemButton.appendChild(editButtonText);
//     li.appendChild(editItemButton);
//     editItemButton.setAttribute('onclick',`editing(${randomId})`)
//     document.getElementById('todoInput').value = ''
// }

// // delete function 
// function deleting(liId){

//     console.log(liId,typeof liId);
//     let targetLi = liId;
//     let liForDelete = document.getElementById(targetLi)
//     console.log(liForDelete)
//     ul.removeChild(liForDelete)
// }
// // function edit itme 
// function editing(liId){
//     let targetLi = liId;
//     let liForEdit = document.getElementById(targetLi)
//     console.log(liForEdit)
//     let li = liForEdit.firstChild.nodeValue;
//     console.log(li)
//     todoInput.value = li;
//     console.log(li)
//     btn.innerHTML = 'update Item';
//     btn.removeAttribute('onclick');
//     btn.setAttribute('onclick','updateItem()')
// elementIDUpdate = liId;


// }
// // updateItem function 
// function updateItem(){
//     let li = document.getElementById(elementIDUpdate);
//     li.firstChild.nodeValue = todoInput.value;
//     btn.removeAttribute('onclick');
//     btn.innerHTML = 'add Item';
//     btn.setAttribute('onclick','adding()')
//     // console.log(btn)
//     elementIDUpdate = null;
//     todoInput.value = ''
// }
/*==================================== Question No 32 =========================================
.toSorted() in js
======================================= Answer =====================================*/
// let num = [1,222,4,33,5,11,67,8,9,10];
// console.log(num)
// let ans = num.toSorted((a,b)=> a - b);
// console.log(ans)
// console.log(num)
/*==================================== Question No 33 =========================================
new Promise
======================================= Answer =====================================*/
// let proms = new Promise((resolve,reject)=>{
//     let num = prompt('enter num')
//     if(num % 2 == 0){resolve('promise resolved')}
//     else{ reject('rejected')}
// })
// .then((success)=>{console.log(success)})
// .catch((fail)=>{console.log(fail)})

/*==================================== Question No 34 =========================================
api calling
======================================= Answer =====================================*/
// function api() {
//     const apiUrl = 'https://dummyjson.com/users';

//     fetch(apiUrl)
//         .then((success) => success.json())
//         .then((realData) => {
//             show(realData.users);
//         })
//         .catch((error) => {
//             console.log(error);
//         });
// }

// api();

// function show(data) {
//     let ul = document.getElementById('ul');

//     ul.innerHTML = data
//         .map((item) => {
//             return `<li>${item.id} : ${item.firstName} : ${item.lastName}</li>`;
//         })
//         .join('');
// }



// function api(){
//    const apiUrl = 'https://dummyjson.com/users'
//    fetch(apiUrl)
//    .then((success)=>{
//     return success.json()
//    })
//    .then((realData)=>{
//     console.log(realData.users)
//     show(realData.users)
//    })
//    .catch((error)=>console.log(error))
// }
// api()

// function show(data){
//     let display = document.getElementById('ul')
//     display.innerHTML = data.map((item)=>{
//         return `<li>${item.id} ${item.firstName} ${item.lastName}</li>`
//     }).join('')
// }
/*==================================== Question No 35 =========================================
async await apiCalling
======================================= Answer =====================================*/
// let fn = async()=>{
//      const apiUrl = 'https://dummyjson.com/users'
//      let data = await fetch(apiUrl);
//      let realData = await data.json();
//      console.log(realData.users)
//      show(realData.users)
// }
// fn()
// let show = (m)=>{
//     let ul = document.getElementById('ul');
//     if(Array.isArray && Array.length >0){
//         ul.innerHTML = m.map((item)=> `<li>${item.id} ${item.firstName}</li>`).join('')
//     }
// }
/*==================================== Question No 36 =========================================

======================================= Answer =====================================*/
// try{
//     let num = 5;
// let ans = num.toUpperCase()
// console.log(ans)
// }
// catch(error){
//     console.log(error)
// }
// console.log('what are you doing')


// let num = 15;
// try{
//     if(num > 10) throw('number is not fit')
// }
// catch(error){
//     console.log(error)
// }
/*==================================== Question No 37 =========================================
try catch use for validation also
======================================= Answer =====================================*/
// let name = 'f';

// let email= '';
// let password = 1243

// try{
//     if(name == '') throw('name is required')
//         else if(email == '') throw('email is required')
//     else if(password == '') throw('password is required')
// else{
//     let obj = {
//         name,
//         email,
//         password
//     }
//     console.log(obj)
// }

// }
// catch(error){
//     console.log(error)
// }
/*==================================== Question No 38 =========================================

======================================= Answer =====================================*/
// function abc(){
//     let input = prompt('enter something');
//     if(input == ''){
//         abc(input)
//     }
//     console.log(input)
// }
// abc()

// function abc(num){
//     if(num ==0){
//        console.log('done')
//        return
//     }
//     abc(num-1)
//     console.log(num)

// }
// abc(5)
/*==================================== Question No 39 =========================================
higher order function
======================================= Answer =====================================*/
// function add(a,b){
// return a + b
// }

// function multiply(a,b){
//     return a * b
// }
 
// function hof(operation,m,n){
//     return operation(m,n)

// }
// // let ans = hof(add,5,3)
// let ans = hof(multiply,10,40)
// console.log(ans)
/*==================================== Question No 40 =========================================
callback function
======================================= Answer =====================================*/
// function cb(){
//     console.log('hello')
// }

// function main(a,name){
//    a()
//     console.log(name)
    

// }
// main(cb,'Aziz')
/*==================================== Question No 41 =========================================

======================================= Answer =====================================*/
// obj
// let obj = {
//     name: 'Aziz',
//     age : 23,
//     info : function(){
//         console.log(`My name is ${this.name} and my age is ${this.age}`)

//     }
// }
// obj.info()

// class second pillar of object 
// class User {
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
//     info(){
//         return `My name is ${this.name} and my age is ${this.age}`
//     }
    
// }
// let ans = new User('Ilyas',34)
// console.log(ans.info())

// class inheritance 
// class Student {
//     constructor(name,age){
//         this.name = name;
//         this.age = age
//     }
// }

// class User extends Student {
//     constructor(name,age,designation){
//         super(name,age)
//         this.designation = designation

//     }
//     info(){
//         return `My name is ${this.name} my age is ${this.age} and 
//         my designation is ${this.designation}`
//     }
// }
// let ans = new User('Pervaix',67,'developer')
// console.log(ans.info())
/*==================================== Question No 42 =========================================
polymorphism 
different classes same funciton name but different behaviour on calling is called 
polymorphism
======================================= Answer =====================================*/
// class Animal {
//     speak(){
//         console.log('Animals are speaking')
//     }
// }

// class Cat extends Animal {
//     speak(){
//         console.log('cats are dringking milk')
//     }
// }
// class Dogs extends Animal {
//     speak(){
//         console.log('dogs are barking')
//     }
// }
// class Snakes extends Animal {
//     speak(){
//         console.log('snakes are dancing in soil')
//     }
// }
// let a = new Animal();
// let b = new Cat();
// let c = new Dogs();
// let d = new Snakes();
// a.speak();
// b.speak();
// c.speak();
// d.speak()
/*==================================== Question No 43 =========================================
encapsulation 
hiding private data and give access only by specific methods is 
called encapsulation ,bankAccount example
======================================= Answer =====================================*/
// class BankAccount {
//     #balance = 0;
// // deposit
// deposit(amount){
//     this.#balance = this.#balance + amount
// }
// // withdraw 
// withdraw(amount){
//     if(this.#balance > amount){
//         this.#balance = this.#balance - amount
//     }
//     else{
//         alert('you have insufficient balance')
//     }
// }
//     checkBalance(){
//         return this.#balance
//     }


// }
// let ans = new BankAccount();
// ans.deposit(200)
// ans.withdraw(1203)
// console.log(ans.checkBalance())

/*==================================== Question No 44 =========================================
event bubbling and event propagation /
stopPropagation
======================================= Answer =====================================*/
// function parentFn(){
//     alert('i am parent function')
// }

// function childFn(event){
//     alert('i am child function')
//     event.stopPropagation()
// }

/*==================================== Question No 45 =========================================
promise is and object that is used for handling asynchrounous tasks
======================================= Answer =====================================*/
// let prom = new Promise((resolve,reject)=>{
//     let num = prompt('enter number')
//     if(num > 20){resolve('promise  has resolved')}
//     else{reject('promise rejected')}
// })
// .then((success)=>alert(success))
// .catch((error)=>alert(error))

/*==================================== Question No 46 =========================================
async await
======================================= Answer =====================================*/
// let fn = async()=>{
//     let apiUrl = 'https://jsonplaceholder.typicode.com/users';
//     let data = await fetch(apiUrl);
//     let realData = await data.json();
//     console.log(realData)
//     show(realData)
// }
// fn()
// let show = (d)=>{
//     let display = document.getElementById('ul');
//     display.innerHTML = d.map((item)=>{
//         return `<li>${item.id} ${item.name}</li>`
//     }).join('')
    
// }
/*==================================== Question No 47 =========================================

======================================= Answer =====================================*/
function abc(){
     let apiUrl = 'https://jsonplaceholder.typicode.com/users';
     setTimeout(() => {
        fetch(apiUrl)
     .then((ana)=>ana.json())
     .then((reply)=>console.log(reply))
     .catch((error)=>console.log(error))
        
     }, 2000);
}
abc()
console.log('hello')

/*==================================== Question No 48 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 49 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 50 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 51 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 52 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 53 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 54 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 55 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 56 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 57 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 58 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 59 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 60 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 61 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 62 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 63 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 64 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 65 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 66 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 67 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 68 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 69 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 70 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 71 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 72 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 73 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 74 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 75 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 76 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 77 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 78 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 79 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 80 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 81 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 82 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 83 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 84 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 85 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 86 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 87 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 88 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 89 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 90 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 91 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 92 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 93 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 94 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 95 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 96 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 97 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 98 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 99 =========================================

======================================= Answer =====================================*/


/*==================================== Question No 100 =========================================

======================================= Answer =====================================*/