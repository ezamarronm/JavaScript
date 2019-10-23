function integerDivision (dividend, divisor){
   if (dividend < divisor){
      return 0
   }   
   else{
      return 1 + integerDivision(dividend - divisor, divisor)
   }
}

answer = integerDivision(31,3)
console.log(answer)