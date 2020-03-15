// /*
// *Default Parameters
// */
// function newFunction(name, age, country){
//   var name = name || 'Eduardo';
//   var age = age || 27;
//   var country = country || 'CL'
//   console.log(name,age,country);
// }

// //es6
// function newFunction2(name = 'Eduardo', age = 24, country = 'CL'){

//   console.log(name,age,country)
// }

// newFunction2();
// newFunction2('Juan', 43,'CO');

// /*
// * Concatenation
// */
// let hello = "Hello"
// let world = "World"
// let epicPhrase = hello + ' ' + world;
// console.log(epicPhrase)

// //ec6
// let epicPhrase2 = `${hello} ${world}`;
// console.log(epicPhrase2);

// /*
// * Multilinea
// */
// let lorem = "This is an awesome lorem \n"
// + "Another epic phrase dude."
// console.log(lorem)

// //es6
// let lorem2 = `This is EC6 bro
// this sht rules
// `
// console.log(lorem2)

// /*
// * Desestructuracion
// */
// let person = {
//   'name': 'Oscar',
//   'age': 32,
//   'country': 'MX'
// }

// //console.log(person.name, person.age, person.country)
// //es6
// let {name, age, country} = person;
// console.log(name,age,country)

// /*
// *Spread Operator
// */

// //es6
// let team1 = ['Oscar', 'Julia', 'Ricardo'];
// let team2 = ['Valeria' , 'Yesica', 'Camila'];

// let education = ['David', ...team1, ...team2];

// console.log(education);

// /**
//  * CONST & LET
//  */

//  {
//    var globalVar = "Global Var";
//  }
//  console.log(globalVar);

//  //es6
//  {
//    let globalLet = "Global Let";
//    console.log(globalLet)
//  }

// const a = 30
// //a++

// /**
//  * Objects 
//  */
// let name = 'Juan';
// let age = 20;

// obj = { name: name, age: age };

// //es6
// obj2 = { name, age }; 
// console.log(obj2);

// /**
//  * Arrow Functions
//  */

//  const names = [
//    {name: "Pancho", age: 23},
//    {name: 'Brenduz', age: 19}
//  ]

//  let listOfNames = names.map(function(item){
//    console.log(item.name);
//  });

//  //es6
//  let listOfNamesES6 = names.map( item => console.log(item.name) );

//  let listOfNamesES6_2 =  (name, age, country) => {
//    ...
//  }

//  const listOfNamesES6_3 = name => {
//    ...
//  }

//  const square = num => num * num;

//  /**
//   * Promises
//   */

// //es6
//   const helloPromise = () => {
//     return new Promise((resolve,reject) => {
//       if(false){
//         resolve('Todo positivo');
//       } else{
//         reject('Algo salió mal');
//       }
//     });
//   }

//   helloPromise()
//     .then(response => console.log(response))
//     .catch(error=> console.log(error))

 /**
  * Classes
  */

//es6  

// class Calculator{
//   constructor(){
//     this.valueA = 0;
//     this.valueB = 0;
//   }

//   sum(valueA,valueB){
//     this.valueA = valueA;
//     this.valueB = valueB;
//     return this.valueA + this.valueB;
//   }
// }

// const calculator1 = new Calculator();
// const ans = calculator1.sum(3,4);
// console.log(ans)

/**
 * Modules
 */

 //es6
// // import hello from './module.js'

// //  hello();
// const hello = require('./module')
// console.log(hello())

/**
 * Generators
 */

 function* helloWorld(){
   if (true) {
     yield 'Hello, '; 
   }
   if (true) {
     yield 'World';
   }
 };

 const generatorHello = helloWorld();
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);
 console.log(generatorHello.next().value);