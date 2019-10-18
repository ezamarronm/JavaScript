function extendsOf(sonPrototype, fatherPrototype){
   var fn = function () {}
   fn.prototype = fatherPrototype.prototype
   sonPrototype.prototype = new fn
   sonPrototype.prototype.constructor = sonPrototype
}

function Person(name,lastName, height) {
   this.name = name
   this.lastName = lastName
   this.height = height
}
Person.prototype.greet = function(){
   console.log(`Hi I'm ${this.name} ${this.lastName}`)
}

Person.prototype.isTall = function() {
   return this.height > 1.7
}

function Developer(name, lastName){
   this.name = name
   this.lastName = lastName
}
extendsOf(Developer, Person)


Developer.prototype.greet = function () {
   console.log(`Hello I'm ${this.name} ${this.lastName} and I'm a Developer`)
}


/* var eduardo = new Person('Eduardo','Zamarron',1.68)
var brenda = new Person('Brenda','Hernandez',1.58)
var charly = new Person('Carlos','Blanco',1.71) */
/* eduardo.greet()
console.log(eduardo.isTall())
brenda.greet()
console.log(brenda.isTall())
charly.greet()
console.log(charly.isTall()) */
