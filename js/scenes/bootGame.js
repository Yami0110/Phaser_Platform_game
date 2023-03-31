class BootGame extends Phaser.Scene {
    constructor() {
        super("BootGame");
    }
    
    preload() {
        // nahrávanie máp
        this.load.image("tileset", "assets/tilemaps/tileset.png");
        this.load.tilemapTiledJSON("level1", "assets/tilemaps/level1.json");
        this.load.tilemapTiledJSON("level2", "assets/tilemaps/level2.json");
        this.load.tilemapTiledJSON("level3", "assets/tilemaps/level3.json");
        this.load.tilemapTiledJSON("level4", "assets/tilemaps/level4.json");
        this.load.tilemapTiledJSON("level5", "assets/tilemaps/level5.json");
        // nahrávanie spritesheetov
        this.load.spritesheet("playerSpritesheet",
        "assets/sprites/player.png",{
            frameWidth: 34, frameHeight: 30
        });
        this.load.spritesheet("coinRotationSpritesheet",
        "assets/sprites/coin.png", {
            frameWidth: 16, frameHeight: 16
        });
        this.load.spritesheet("appleSpritesheet",
        "assets/sprites/apple.png", {
            frameWidth: 32, frameHeight: 32
        });
        this.load.spritesheet("sawActiveSpritesheet",
        "assets/sprites/saw.png", {
            frameWidth: 38, frameHeight: 38
        });
        this.load.spritesheet("spikeHeadBlinkSpritesheet",
        "assets/sprites/spikeHead.png", {
            frameWidth: 54, frameHeight: 52
        });
        // nahrávanie audií
        this.load.audio("jumpSound", "assets/sounds/jump.wav");
        this.load.audio("coinPickUpSound", "assets/sounds/coinPickUp.wav");
        this.load.audio("applePickUp", "assets/sounds/applePickUp.wav");
        this.load.audio("injuredSound", "assets/sounds/injured.wav");
        this.load.audio("gameClearSound", "assets/sounds/gameClear.wav");
        this.load.audio("gameOverSound", "assets/sounds/gameOver.wav");
        this.load.audio("backgroundSound", "assets/sounds/background.wav");
        // nahrávanie obrázkov
        this.load.image("gameTitle", "assets/images/gameTitle.png");
        this.load.image("gameTutorial", "assets/images/gameTutorial.png");
        this.load.image("table", "assets/images/table.png");
        this.load.image("scoreTable", "assets/images/scoreTable.png");
        this.load.image("bar", "assets/images/bar.png");
        this.load.image("background", "assets/images/background.png");
        this.load.image("life", "assets/images/life.png");
        this.load.image("spike", "assets/images/spike.png");
        this.load.image("level1", "assets/images/level1.png");
        this.load.image("level2", "assets/images/level2.png");
        this.load.image("level3", "assets/images/level3.png");
        this.load.image("level4", "assets/images/level4.png");
        this.load.image("level5", "assets/images/level5.png");
        // nahrávanie fontu
        this.load.bitmapFont("galvanic", "assets/fonts/galvanic.png", "assets/fonts/galvanic.xml");
    }

    create() {
        // vytváranie animácií
        this.anims.create({
            key: "playerIdle",
            frames: this.anims.generateFrameNumbers("playerSpritesheet", {
                start: 0, end: 10
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "playerRun",
            frames: this.anims.generateFrameNumbers("playerSpritesheet", {
                start: 11, end: 22
            }),
            frameRate: 20,
            repeat: -1
        });
        this.anims.create({
            key: "coinRotation",
            frames: this.anims.generateFrameNumbers("coinRotationSpritesheet", {
                start: 0, end: 6
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "apple",
            frames: this.anims.generateFrameNumbers("appleSpritesheet", {
                start: 0, end: 16
            }),
            frameRate: 15,
            repeat: -1
        });
        this.anims.create({
            key: "sawActive",
            frames: this.anims.generateFrameNumbers("sawActiveSpritesheet", {
                start: 0, end: 7
            }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: "spikeHeadBlink",
            frames: this.anims.generateFrameNumbers("spikeHeadBlinkSpritesheet", {
                start: 0, end: 3
            }),
            frameRate: 5,
            repeat: -1
        });
        // prechod na ďalšiu scénu
        this.scene.start("GameTitle");
    }
}