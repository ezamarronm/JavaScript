import MediaPlayer from './mediaPlayerWithClasses.js'
import Autoplay from './plugins/AutoPlayWithClasses.js'


const video = document.querySelector('video');
const player = new MediaPlayer( {el: video, plugins: [
  //new Autoplay()
]});


const playPause = document.querySelector('#play');
const muteUnmuted = document.querySelector('#mute');
playPause.onclick = () => player.togglePlay();
muteUnmuted.onclick = () => player.toggleMute();