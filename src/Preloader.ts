module YOURGAME {

    export class Preloader extends Phaser.State {

        preloadBar: Phaser.Sprite;
        loadingText: Phaser.BitmapText;

        preload() {

            /* Before this put your asset inside /assets */
            this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 600, 'preloadBar');
            this.preloadBar.scale.set(3,2);
            this.preloadBar.anchor.set(0.5,0);
            this.preloadBar.position.set(this.game.world.centerX, this.game.world.centerY + 600);
            this.load.setPreloadSprite(this.preloadBar);

            this.loadingText = this.game.add.bitmapText(this.game.world.centerX, this.game.world.centerY, 'font_bold', "Loading...", 94);
            this.loadingText.anchor.set(0.5,0.5);
            this.loadingText.position.set(this.game.world.centerX, this.game.world.centerY);

            // Here Load all your Assets

            // Here Load all your Assets
        }

        create() {
            //You could put somenthing in the Screen like an image behind your loading text and loadinbar
        }

        update(){
        }
    }

}