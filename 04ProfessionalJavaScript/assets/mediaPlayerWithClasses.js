class MediaPlayer {
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this._initPlugins();
  }

  /**
   * Play/Pause
   */
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

  /**
   * Mute/Unmuted
   */
  mute(){
    this.media.muted = true;
  }

  unmuted(){
    this.media.muted = false;
  }

  toggleMute(){
    (this.media.muted)
    ? this.media.muted = false
    : this.media.muted = true;
  }

  /**
   * Plugins
   */

   _initPlugins(){
     this.plugins.forEach(plugin => {
       plugin.run(this);
     });
   }
  
}

export default MediaPlayer