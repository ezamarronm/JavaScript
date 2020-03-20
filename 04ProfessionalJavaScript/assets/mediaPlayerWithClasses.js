class MediaPlayer {
  constructor(config) {
    this.media = config.el;
  }
  play(){
    this.media.play();
  }

  pauselay(){
    this.media.pause();
  }

  togglePlay(){
    (this.media.paused)
      ? this.media.play()
      : this.media.pause();
  }
  
}

export default MediaPlayer