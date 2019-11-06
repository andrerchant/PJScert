import MediaPlayer from "../../MediaPlayer";
import Ads from "./Ads";
import { Ad } from "./allAds";

class AdsPlugin {
    private ads: Ads;
    player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd:Ad;
    private AdsContainer:HTMLElement;
    
    constructor(){
        this.ads = Ads.getInstance();
        this.AdsContainer = document.createElement('div');
        this.handleTimeUpdate=this.handleTimeUpdate.bind(this);
    }

    run(player){        
        this.player = player;        
        this.player.container.appendChild(this.AdsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    }

    private handleTimeUpdate(){
        const currentTime:number = Math.floor(this.media.currentTime);
        if(currentTime % 30 === 0){
            this.renderAd();
        }
    }

    private renderAd(){
        if(this.currentAd) return;
        
        const ad:(Ad) = this.ads.getAd()
        this.currentAd = ad;
        this.AdsContainer.innerHTML = `
        <div class="ads">
            <a class="ads__link" href="${this.currentAd.url}" target="_blank" >
                <img class="ads__img" src="${this.currentAd.imageUrl}" />
                <div class="ads__info">
                    <h5 class="ads__title"> ${this.currentAd.title} </h5>
                    <p class="ads__body"> ${this.currentAd.body} </p>
                </div>
        </div>
        `;

        setTimeout(() => {
            this.currentAd = null;
            this.AdsContainer.innerHTML = '';
        }, 10000);
    }
}

export default AdsPlugin