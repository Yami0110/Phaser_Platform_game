class Background extends Phaser.Scene {
    constructor() {
        super("Background");
        this.width = game.config.width;
        this.height = game.config.height;
    }

    create() {
        // pozadie
        this.add.image(this.width / 2, this.height / 2, "background")
        .setOrigin(0.5).setScale(1.5);
        // hudba
        this.backgroundSound = this.sound.add("backgroundSound");
        this.backgroundSound.loop = true;
        this.backgroundSound.play();
    }
}