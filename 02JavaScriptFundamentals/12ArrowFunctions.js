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

const LEGAL_AGE = 18

/*
const isOfLegalAge  = function(person){
      return person.age >= LEGAL_AGE
}

const isOfLegalAge  = (person) => {
      return person.age >= LEGAL_AGE
}

const isOfLegalAge  = (person) => person.age >= LEGAL_AGE
*/

const isOfLegalAge  = ({age}) => age >= LEGAL_AGE
const isUnderAge = person => !isOfLegalAge(person)


function printIsOfLegalAge(person){
   if(isOfLegalAge(person)){
      console.log(`${person.name} is of legal age`)
   }
   else{
      console.log(`${person.name} is NOT of legal age`)
   }
}

printIsOfLegalAge(brenda);
printIsOfLegalAge(rox)

function allowAccess(person){
   if(!isOfLegalAge(person)){
      console.log('Not Allowed Access')
   }else{
      console.log('Allowed Access')
   }
}

allowAccess(brenda)
allowAccess(rox)
console.log(isUnderAge(brenda))
console.log(isUnderAge(rox))