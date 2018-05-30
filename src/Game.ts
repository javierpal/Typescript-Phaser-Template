
///<reference path="../tsDefinitions/phaser.d.ts"/>
module YOURGAME {

    export class Game extends Phaser.Game {

        constructor() {
            // Here you need to add your screens, just made a new file in src,
            // Then write your class inside the module of your game
            // example "module YOURGAME{ export class  Menu extends Phaser.Game{ //Game Here } }" 
            // then put ir here Example this.state.add('Menu', Menu, false);
            super(800, 600, Phaser.CANVAS, 'content', super());
            this.state.add('Boot', Boot, false);
            this.state.add('Preloader', Preloader, false);
            this.state.add('Play', Play, false);
            this.state.start('Boot');

        }

    }

}