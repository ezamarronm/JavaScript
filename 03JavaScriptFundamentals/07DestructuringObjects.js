var Eduardo = {
   name: 'Eduardo',
   lastName: 'Zamarron',
   age: 24
}

var Brenda = {
   name: 'Brenda',
   lastName: 'Hernandez',
   age: 24
}
function printNameUpperCase(person){ 
   //var name = person.name.toUpperCase()
   var {name} = person
   console.log(name.toUpperCase())
}

function printNameAge(person){
   console.log(`Hi my name is ${person.name} and I'm ${person.age} years old `)
}
printNameAge(Eduardo)
printNameAge(Brenda)
