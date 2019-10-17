function Person(name,lastName, height) {
   this.name = name
   this.lastname = lastName
   this.height = height
}
Person.prototype.greet = function(){
   console.log(`Hi I'm ${this.name} ${this.lastname}`)
}

Person.prototype.isTall = function() {
   if(this.height > 1.7)
      console.log(`I'm Tall`)
   else
      console.log(`I'm not Tall`)

}
var eduardo = new Person('Eduardo','Zamarron',1.68)
var brenda = new Person('Brenda','Hernandez',1.58)
var charly = new Person('Carlos','Blanco',1.71)
eduardo.greet()
eduardo.isTall()
brenda.greet()
brenda.isTall()
charly.greet()
charly.isTall()