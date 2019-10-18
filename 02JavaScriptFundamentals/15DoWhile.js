var cont = 0
const rains = () => Math.random() < .25
do {
   cont++
} while (!rains());
console.log(`${cont} days raining`)