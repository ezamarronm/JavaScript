var eduardo = {
   name: 'Eduardo',
   lastName: 'Zamarron',
   age: 24,
   weight: 68
}
const ADDLOSEWEIGHT = .200
const  gainWeight = person => person.weight+= ADDLOSEWEIGHT
const loseWeight = person =>person.weight-= ADDLOSEWEIGHT

console.log(`${eduardo.name}'s weight was ${eduardo.weight}kg at the beggining of  the year`)
for (var i = 1; i <= 365; i++) {
   var random = Math.random()
   if (random < 0.25) {
      //gain weight
      gainWeight(eduardo)
   }else if(random < 0.5){
      //lose weight
      loseWeight(eduardo)
   }
}

console.log(`${eduardo.name}'s weight is ${eduardo.weight.toFixed(2)}kg at the end of the year`)

