/**
 * Operador reposo
 */
// const obj = {
//   name: 'Eduardo',
//   age: 43,
//   country: 'CL',
// }

// let { name, ...all } = obj;
// console.log(name, all);

// const obj = {
//   name:'Eduardo',
//   age: 34,
// }

// const obj1 = {
//   ...obj,
//   country: 'BR',
// }

// console.log(obj)

/**
 * Promise.finally
 */
// const helloWorld = () => {
//   return new Promise((resolve,reject) =>{
//     (true)
//       ? setTimeout(() => {
//         resolve('Hello World')
//       }, 2000)
//       : reject( new Error('Test Error'));
//   });
// };

// helloWorld()
//   .then(response => console.log(response))
//   .catch(error => console.log(error))
//   .finally( () => console.log('Ya acabe') )


/**
 * Regex
 */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/; 
const match = regexData.exec('2018-04-20');
const year = match[1];
const month = match[2];
const day = match[3];
console.log(year,month,day);