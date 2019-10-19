const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'
const ID_URL = '1'

// const PERSON_URL = `${API_URL}${PEOPLE_URL}${ID_URL}`
const OPTIONS = {crossDomain: true}

/* const onResponse = function (person) {
   console.log(`Hi, I'm ${person.name}`)
   } */

/* function getACharacter(id, callback){
   const URL = `${API_URL}${PEOPLE_URL}${id}`
   $.get(URL, OPTIONS, onResponse)
}
 */
function getACharacter(id, callback){
   const URL = `${API_URL}${PEOPLE_URL}${id}`
   $.get(URL, OPTIONS, callback).fail(function(){
      console.log(`An error happened, unable to get the character ${id}`)
   })
      
  
}

getACharacter(1, function(person){
   console.log(`Hi, I'm ${person.name}`)
   getACharacter(2, function(person) {
      console.log(`Hi, I'm ${person.name}`)
      getACharacter(3, function(person) {
         console.log(`Hi, I'm ${person.name}`)
         getACharacter(4,function (person) {
            console.log(`Hi, I'm ${person.name}`)
            getACharacter(5,function (person) {
               console.log(`Hi, I'm ${person.name}`)
               getACharacter(6,function(person){
                  console.log(`Hi, I'm ${person.name}`)
               })
           })
        }) 
      })
   })
})