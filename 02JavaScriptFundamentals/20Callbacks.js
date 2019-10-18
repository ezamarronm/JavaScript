const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/'
const ID_URL = '1'

const LUKE_URL = `${API_URL}${PEOPLE_URL}${ID_URL}`
const OPTIONS = {crossDomain: true}

const onResponse = function (luke) {
   console.log(`Hi I'm ${luke.name}`)
   }
$.get(LUKE_URL, OPTIONS, onResponse
)

