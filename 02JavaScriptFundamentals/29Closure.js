function createGreeting(endPhrase) {
   return function (name) {
      console.log(`Hello ${name} ${endPhrase}`)
   }
}

const ArgentinianGreeting = createGreeting('che')
const MexicanGreeting = createGreeting('wey')
const ColombianGreeting = createGreeting('parse')

ArgentinianGreeting('Eduardo')
MexicanGreeting('Eduardo')
ColombianGreeting('Eduardo')