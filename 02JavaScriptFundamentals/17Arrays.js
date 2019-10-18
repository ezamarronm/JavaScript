var eduardo = {
   name: 'Eduardo',
   lastname: 'Zamarron',
   height: 1.68,
   books: 43
}

var brenda = {
   name: 'Brenda',
   lastname: 'Hernandez',
   height: 1.58,
   books: 28
}

var charly = {
   name: 'Carlos',
   lastname: 'Blanco',
   height: 1.71,
   books: 12
}

var lalo = {
   name: 'Eduardo',
   lastname: 'Espinosa',
   height: 1.80,
   books: 19
}

var people = [eduardo, brenda, charly, lalo]
/* for (var index = 0; index < people.length; index++) {
   person = people[index].name
   height = people[index].height
   console.log(`${person} is ${height} meters tall`)  
} */

/* const isTall = person => person.height > 1.7
const isNotTall = person => person.height < 1.7

const tallPeople = people.filter(isTall)
const notTallPeople = people.filter(isNotTall)

console.log(tallPeople)
console.log(notTallPeople) */

/* const toCM = (person) => {
   //person.height*=100 this modifies the object person
   return {
      ...person, //this creates a new object
      height: person.height * 100
   }
}  */
/* const toCM = (person) => ({
      ...person, //this creates a new object
      height: person.height * 100
   })
var peopleCM = people.map(toCM)
console.log(peopleCM) */

const reducer = (totalbooks, person) => totalbooks + person.books

var totalbooks = people.reduce(reducer, 0)
console.log(`Books in total: ${totalbooks}`)
