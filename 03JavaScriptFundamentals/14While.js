var eduardo = {
   name: 'Eduardo',
   lastName: 'Zamarron',
   age: 24,
   weight: 68
}
const GOAL = eduardo.weight - 8
const ADDLOSEWEIGHT = .3
const  gainWeight = person => person.weight+= ADDLOSEWEIGHT
const loseWeight = person => person.weight-= ADDLOSEWEIGHT
const eatsALot = () => Math.random() < .3
const doesExcercise = () => Math.random() < .4
var days = 0
console.log(`${eduardo.name}'s weight was ${eduardo.weight}kg at the beggining of  the year`)
while (eduardo.weight > GOAL) {
   days++
   if (eatsALot()) {
      gainWeight(eduardo)
   }
   if(doesExcercise()) {
      loseWeight(eduardo)
   }
   if (days > 100000)
      break
}

console.log(`${eduardo.name}'s weight is ${eduardo.weight.toFixed(2)}kg at the end of the year`)
console.log(`${days} until ${eduardo.name} achievied its goal`)

