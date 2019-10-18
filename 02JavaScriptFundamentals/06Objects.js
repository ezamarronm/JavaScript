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
function printNameUpperCase({name}){ 
   //var name = person.name.toUpperCase()
   //console.log(person.name.toUpperCase())
   console.log(name.toUpperCase())
}

printNameUpperCase(Eduardo)
printNameUpperCase(Brenda)
printNameUpperCase({name:'Brenduz'})