const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'
const ID_URL = '1'

// const PERSON_URL = `${API_URL}${PEOPLE_URL}${ID_URL}`
const OPTIONS = {crossDomain: true}

const onResponse = function (luke) {
   console.log(`Hi, I'm ${luke.name}`)
   }

function getACharacter(id){
   const URL = `${API_URL}${PEOPLE_URL}${id}`
   $.get(URL, OPTIONS, onResponse)
}

// var id_selected = prompt('Which number would you like to see?')
 getACharacter(1)
//$.get(PERSON_URL, OPTIONS, onResponse)
