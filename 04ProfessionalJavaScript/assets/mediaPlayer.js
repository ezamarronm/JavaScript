function MediaPlayer(config) {
   this.media = config.el
   this.plugins = config.plugins || []
   this._initPlugins()
}
/**
 * Plugins
 */
MediaPlayer.prototype._initPlugins = function(){
   this.plugins.forEach(plugin => {
      plugin.run(this)
   });
}
/**
 * Play/pause button
 */
MediaPlayer.prototype.play = function(){
   this.media.play()
}
MediaPlayer.prototype.pause = function(){
   this.media.pause()
}

MediaPlayer.prototype.togglePlay =  function(playButton)  {
   if (this.media.paused) {
      this.play()
      playButton.innerHTML = "Pause"
    }
    else{
      this.pause()
      playButton.innerHTML = "Play"
    }  
}

/**
 * Mute/unmute button
 */
MediaPlayer.prototype.mute = function(){
   this.media.muted = true;
}
MediaPlayer.prototype.unmute = function(){
   this.media.muted = false;
}

MediaPlayer.prototype.toogleMute = function(muteButton){
   if(this.media.muted){
      this.unmute()
      muteButton.innerHTML = "Mute"
   }   
   else{
      this.mute()
      muteButton.innerHTML = "Unmute"
   }
}
export default MediaPlayer