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
   $.get(URL, OPTIONS, function (person) {
      console.log(`Hi, I'm ${person.name}`)
      if (callback) {
         callback()
      }
   })
  
}

getACharacter(1, function(){
   getACharacter(2, function() {
      getACharacter(3, function() {
        getACharacter(4,function () {
           getACharacter(5,function () {
              getACharacter(6)
           })
        }) 
      })
   })
   }
)