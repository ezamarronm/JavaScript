var eduardo = {
   name: 'Eduardo',
   lastName: 'Zamarron',
   age: 24,
   engineer: true,
   cook: false,
   singer: false,
   dj: false,
   guitarist: false,
   manager: false,
   chessPlayer: true
}

var brenda = {
   name: 'Brenda',
   lastName: 'Hernandez',
   age: 24,
   engineer: false,
   cook: false,
   singer: false,
   dj: false,
   guitarist: false,
   manager: true,
   chessPlayer: false
}

var rox = {
   name: 'Rox',
   lastName: 'Zamarron',
   age: 3
}

function printProfession(person){
   console.log(`${person.name} is: `)
  if (person.engineer) {
   console.log('an engineer');   
  }else{
   console.log('not an engineer')
  if (person.cook) {
   console.log('cook');   
  }
  } 
  if (person.dj) {
   console.log('dj');   
  } 
  if (person.guitarist) {
     console.log('guitarist')
  } 
  if (person.manager) {
   console.log('manager');   
  } 
  if (person.chessPlayer) {
   console.log('a chessPlayer');   
  }
}

const LEGAL_AGE = 18

function isOfLegalAge(person){
   
      return person.age >= LEGAL_AGE
}

function printIsOfLegalAge(person){
   if(isOfLegalAge(person)){
      console.log(`${person.name} is of legal age`)
   }
   else{
      console.log(`${person.name} is NOT of legal age`)
   }
}
/* 
printProfession(eduardo)
printProfession(brenda) */
printIsOfLegalAge(eduardo);
printIsOfLegalAge(brenda);
printIsOfLegalAge(rox)