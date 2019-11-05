import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/autoplay.js';
import Autopause from './plugins/autopause.js';

const video = document.querySelector("video")
const play_btn = document.querySelector("#playButton");
const mute_btn = document.querySelector("#muteButton");

const player = new MediaPlayer({ 
    el:video,
    plugins: [
        new AutoPlay(),
        new Autopause()
    ]
});

play_btn.onclick = () => player.togglePlay();
mute_btn.onclick = () => player.toggleMute();

