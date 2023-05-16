// 3.1
// const getName = (obj) =>{
//     return obj.name
// }
// const obj = {
//     age: 22,
//     name: 'rasl'
// }
// console.log(getName(obj))

// 3.2

// const getName = (obj) => {
//  const result = []

//     result.push(`${obj.firstname}, ${obj.lastname}`)
//     return result
//     }
//  // пример проверки

// const person = {
//     firstname: 'Akhmad',
//     lastname: 'Kuduzow',
//     age: 31
//   };
  
//   console.log(getName(person)); // в консоле должно быть ['Akhmad', 'Kuduzow']


// 3.3
// const concatNames = (obj, lastname) => {
//     return `${obj.firstname} ${lastname}`
//   }
//   // пример проверки

// const person = {
//     firstname: 'Alvi',
//     age: 27
//   };
  
//   console.log(concatNames(person, 'Tsugaev')); 
//   // в консоле должно быть 'Alvi Tsugaev'

// 3.4
// const correctName = (obj) => {
//     if (obj.fathername === undefined) {
//     return obj.firstname
//     }
//     else {
//     return `${obj.firstname} ${obj.lastname} ${obj.fathername}`
//     }
// }
// пример проверки

// const firstPerson = {
//     firstname: 'Alvi',
//     lastname: 'Tsugaev',
//     fathername: undefined
//   };
  
//   console.log(correctName(firstPerson)); 
//   // в консоле должно быть 'Alvi'
  
//   // ----------------------------- //
  
//   const secondPerson = {
//     firstname: 'Akhmad',
//     lastname: 'Kuduzow',
//     fathername: 'Yakubovich'
//   };
  
//   console.log(correctName(secondPerson)); 
//   // в консоле должно быть 'Akhmad Kuduzow Yakubovich'