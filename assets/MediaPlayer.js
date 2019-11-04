function MediaPlayer(config){
    this.media = config.el;
    this.isPlaying = config.isPlaying;
}

MediaPlayer.prototype.play = function (){
    if (this.isPlaying) this.media.pause();
    else this.media.play();

    this.isPlaying = !this.isPlaying;
    button.innerHTML = this.isPlaying? "Pause" : "Play";
}

export default MediaPlayer;