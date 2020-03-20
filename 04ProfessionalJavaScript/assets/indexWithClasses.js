import MediaPlayer from './mediaPlayerWithClasses.js'
const video = document.querySelector('video');
const button = document.querySelector('#play');


const player = new MediaPlayer( {el: video });
button.onclick = () => player.togglePlay();