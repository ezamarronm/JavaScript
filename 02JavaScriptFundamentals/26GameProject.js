const skybluecolor = document.getElementById('skybluecolor')
const violetcolor = document.getElementById('violetcolor')
const orangecolor = document.getElementById('orangecolor')
const greencolor = document.getElementById('greencolor')
const btnStart = document.getElementById('btnStart')
const LASTLEVEL = 10

class Game{
   constructor(){
      this.start()
      this.generateSequence()
      setTimeout( this.nextLevel, 500);
     
   }
   start(){
      btnStart.classList.add('hide')
      this.level = 1
      this.colors = {
         skybluecolor, 
         violetcolor,
         orangecolor,
         greencolor
      }
      this.chooseColor = this.chooseColor.bind(this)
      this.nextLevel = this.nextLevel.bind(this)

   }
   generateSequence(){
      this.sequence = new Array(LASTLEVEL).fill(0).map(n => Math.floor(Math.random() * 4) ) 

   }
   nextLevel(){
      this.subLevel = 0
      this.lightUpSequence()
      this.addClickEvents()
   }

   numberToColor(num) {
      switch (num) {
         case 0:
            return 'skybluecolor'
            break;
         case 1:
            return 'violetcolor'
            break;
         case 2:
            return 'orangecolor'
            break;
         case 3:
            return 'greencolor'
            break;
      
         default:
            break;
      }
   }

   colorToNumber(color) {
      switch (color) {
         case 'skybluecolor':
            return 0
            break;
         case 'violetcolor':
            return 1
            break;
         case 'orangecolor':
            return 2
            break;
         case 'greencolor':
            return 3
            break;
      
         default:
            break;
      }
   }


   lightUpSequence(){
      for (let i = 0; i < this.level; i++) {
         const color = this.numberToColor(this.sequence[i])
         setTimeout(() => {
            this.lightUpColor(color)
         }, 1000*i);
      }
   }

   lightUpColor(color){
      this.colors[color].classList.add('light')
      setTimeout(() => this.turnColorOff(color), 350)
   }
   turnColorOff(color){
      this.colors[color].classList.remove('light')
   }

   addClickEvents(){
      this.colors.skybluecolor.addEventListener('click', this.chooseColor)
      this.colors.greencolor.addEventListener('click', this.chooseColor)
      this.colors.violetcolor.addEventListener('click', this.chooseColor)
      this.colors.orangecolor.addEventListener('click', this.chooseColor)
   }
   deleteClickEvents(){
      this.colors.skybluecolor.removeEventListener('click', this.chooseColor)
      this.colors.greencolor.removeEventListener('click', this.chooseColor)
      this.colors.violetcolor.removeEventListener('click', this.chooseColor)
      this.colors.orangecolor.removeEventListener('click', this.chooseColor)
   }

   chooseColor(ev){
      const colorName = ev.target.dataset.color
      const colorNumber = this.colorToNumber(colorName)
      this.lightUpColor(colorName)
      if (colorNumber === this.sequence[this.subLevel]) {
         this.subLevel++
         if (this.subLevel === this.level) {
            this.level++
            this.deleteClickEvents()
            if (this.level === (LASTLEVEL +1 ) ) {
                  alert('You won! Congrats!')
            }else{
                setTimeout(this.nextLevel, 1300);
             }
         }
      } else {
         alert('Sorry you lost :(')
      }

   }

}

function startGame() {
   //alert('Let\'s Start!')
   window.game = new Game()
}
