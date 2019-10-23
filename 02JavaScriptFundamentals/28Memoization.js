/* function factorial(number) {
   if(number === 0 || number === 1)
      return 1
   else{
      return number * factorial(number-1)
   }
}
console.log( factorial(8)) */

function factorial(number) {
   if (!this.cache) {
      this.cache = {}
   }
   debugger
   if (this.cache[number]) {
      return this.cache[number]
   }
   if(number === 0 || number === 1)
      return 1
   
   this.cache[number] = number * factorial(number-1)
   debugger
   return this.cache[number]
}
console.log( factorial(1))

