const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'
const ID_URL = '1'

// const PERSON_URL = `${API_URL}${PEOPLE_URL}${ID_URL}`
const OPTIONS = {crossDomain: true}

function getACharacter(id){
   return new Promise((resolve, reject) => {
   const URL = `${API_URL}${PEOPLE_URL}${id}`
   $.get(URL, OPTIONS, function (data) {
      resolve(data)  //is not executed until a successful get
      })
   .fail( () => reject(id))

   })
}

function onError(id){
   console.log(`An error ocurred with the character ${id}`)
}

getACharacter(1)
   .then( (character) => {
      console.log(`Hi, I'm ${character.name}`)
      return getACharacter(3)
   })
   .then( (character) => {
      console.log(`Hi, I'm ${character.name}`)
      return getACharacter(4)
   })
   .then( (character) => {
      console.log(`Hi, I'm ${character.name}`)
      return getACharacter(5)
   })
   .then( (character) => {
      console.log(`Hi, I'm ${character.name}`)
      return getACharacter(6)
   })
   .then( (character) => {
      console.log(`Hi, I'm ${character.name}`)
      return getACharacter(7)
   })
   .catch( (id) => {
      onError(id)
   })