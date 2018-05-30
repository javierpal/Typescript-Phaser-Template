module YOURGAME {

    export class Boot extends Phaser.State {

        preload() {
            //Preload your loading Bar before loading your assets in Preloader
            this.load.image('preloadBar', 'assets/loadbar.png');
            this.game.load.bitmapFont('font_bold', 'assets/fonts/font_bold.png', 'assets/fonts/font_bold.xml');
        }

        create() {
            this.game.state.start('Preloader', true, false);
        }

    }

}
