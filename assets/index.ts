import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/autoplay';
import Autopause from './plugins/autopause';

const video: HTMLElement = document.querySelector("video")
const play_btn: HTMLElement = document.querySelector("#playButton");
const mute_btn: HTMLElement = document.querySelector("#muteButton");

const player = new MediaPlayer({ 
    el:video,
    plugins: [
        new AutoPlay(),
        new Autopause()
    ]
});

play_btn.onclick = () => player.togglePlay();
mute_btn.onclick = () => player.toggleMute();

if('serviceWorker' in navigator){
    navigator.serviceWorker
        .register('/sw.js')
        .catch(error => {
            console.log(error.message);
        })
}