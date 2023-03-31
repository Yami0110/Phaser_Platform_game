var fontSizes = [ 32, 48, 80, 96 ];

class GameTitle extends Phaser.Scene {
    constructor() {
        super("GameTitle");
        this.width = game.config.width;
        this.height = game.config.height;
    }

    create() {
        // vloženie obrázka na scénu
        this.add.image(this.width / 2, this.height / 2, "background").setOrigin(0.5).setScale(1.5);
        this.add.image(this.width / 2, this.height / 2, "gameTitle");
        this.add.bitmapText(this.width / 2, this.height - 80, "galvanic", "PRESS ENTER", fontSizes[1]).setTint(0x00994D).setOrigin(0.5);
        // vytvorenie objektu pre získavanie vstupu z tlačidla ENTER
        this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update() {
        // spustenie ďalšej scény pri stlačení tlačidla ENTER
        if (this.keyEnter.isDown) {
            this.scene.start("GameTutorial");
        }
    }
}

class GameTutorial extends Phaser.Scene {
    constructor() {
        super("GameTutorial");
        this.width = game.config.width;
        this.height = game.config.height;
    }

    create() {
        this.add.image(this.width / 2, this.height / 2, "background").setOrigin(0.5).setScale(1.5);
        this.add.image(this.width / 2, this.height / 2, "gameTutorial");
        this.add.bitmapText(this.width / 2, this.height / 2 - 245, "galvanic", "Tutorial", fontSizes[2]).setTint(0x00994D).setOrigin(0.5);
        this.add.bitmapText(this.width / 2 - 195, this.height / 2 - 115, "galvanic", "Clear all 5 levels", fontSizes[0]).setTint(0x00994D).setOrigin(0.5);
        this.add.bitmapText(this.width / 2 - 195, this.height / 2 - 25, "galvanic", "Avoid traps", fontSizes[0]).setTint(0x00994D).setOrigin(0.5);
        this.add.bitmapText(this.width / 2 - 195, this.height / 2 + 65, "galvanic", "Collect coins", fontSizes[0]).setTint(0x00994D).setOrigin(0.5);
        this.add.bitmapText(this.width / 2 + 60, this.height / 2 - 130, "galvanic", "Move right", fontSizes[0]).setTint(0x00994D);
        this.add.bitmapText(this.width / 2 + 60, this.height / 2 - 40, "galvanic", "Move left", fontSizes[0]).setTint(0x00994D);
        this.add.bitmapText(this.width / 2 + 60, this.height / 2 + 50, "galvanic", "Jump", fontSizes[0]).setTint(0x00994D);
        this.add.bitmapText(this.width / 2 + 255, this.height / 2 + 65, "galvanic", "SPACE", fontSizes[0]).setTint(0x00994D).setOrigin(0.5);
        this.add.bitmapText(this.width / 2, this.height - 160, "galvanic", "PRESS ENTER TO START", fontSizes[1]).setTint(0x00994D).setOrigin(0.5);

        this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update() {
        if (this.keyEnter.isDown) {
            this.scene.start("Level1");
            /*this.scene.run("Background");
            this.scene.run("PlayerStatus");
            this.scene.start("Game");*/
        }
    }
}

class GameOver extends Phaser.Scene {
    constructor() {
        super("GameOver");
        this.width = game.config.width;
        this.height = game.config.height;
    }

    create() {
        this.add.image(this.width / 2, this.height / 2, "background").setOrigin(0.5).setScale(1.5);
        this.add.image(this.width / 2, this.height / 2, "table");
        this.add.bitmapText(this.width / 2, this.height / 2, "galvanic", "GAME OVER!", fontSizes[3]).setTint(0x00994D).setOrigin(0.5);
        this.add.bitmapText(this.width / 2, this.height - 160, "galvanic", "PRESS ENTER TO RESTART GAME", fontSizes[1]).setTint(0x00994D).setOrigin(0.5);

        this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.game.sound.stopAll();
        this.gameOverSound = this.sound.add("gameOverSound");
        this.gameOverSound.play();
    }

    update() {
        if (this.keyEnter.isDown) {
            this.registry.destroy();
            this.scene.start("Level1");
            /*this.scene.run("Background");
            this.scene.run("PlayerStatus");
            this.scene.start("Game");*/
        }
    }
}

class GameClear extends Phaser.Scene {
    constructor() {
        super("GameClear");
        this.width = game.config.width;
        this.height = game.config.height;
    }

    create() {
        this.add.image(this.width / 2, this.height / 2, "background").setOrigin(0.5).setScale(1.5);

        this.createScoreSummary();

        this.add.bitmapText(this.width / 2, this.height / 2 - 250, "galvanic", "GAME CLEAR!", fontSizes[3]).setTint(0x00994D).setOrigin(0.5);
        this.add.bitmapText(this.width / 2, this.height - 105, "galvanic", "PRESS ENTER TO RESTART GAME", fontSizes[0]).setTint(0x00994D).setOrigin(0.5);

        this.game.sound.stopAll();
        this.gameClearSound = this.sound.add("gameClearSound");
        this.gameClearSound.play();

        this.keyEnter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    }

    update() {
        if (this.keyEnter.isDown) {
            this.registry.destroy();
            this.scene.start("Level1");
            /*this.scene.run("Background");
            this.scene.run("PlayerStatus");
            this.scene.start("Game");*/
        }
    }

    createScoreSummary() {
        this.add.image(this.width / 2, this.height / 2, "scoreTable");
        this.add.bitmapText(388, 215, "galvanic", "LEVEL", fontSizes[1]).setTint(0x00994D).setOrigin(0.5);
        this.add.bitmapText(635, 215, "galvanic", "SCORE", fontSizes[1]).setTint(0x00994D).setOrigin(0.5);
        var levelScores = [
            this.registry.get("level1Score"),
            this.registry.get("level2Score"),
            this.registry.get("level3Score"),
            this.registry.get("level4Score"),
            this.registry.get("level5Score"),
        ];
        var totalScore = levelScores[0] + levelScores[1] + levelScores[2] + levelScores[3] + levelScores[4];
        var levelNumber = 0;
        for (var i = 282; i < 580; i += 68) {
            levelNumber++;
            this.add.bitmapText(388, i, "galvanic", levelNumber, fontSizes[1]).setTint(0x00994D).setOrigin(0.5);
            this.add.bitmapText(635, i, "galvanic", "" + levelScores[levelNumber - 1], fontSizes[1]).setTint(0x00994D).setOrigin(0.5);
        }
        this.add.bitmapText(this.width / 2, this.height - 150, "galvanic", "TOTAL SCORE: " + totalScore, fontSizes[1]).setTint(0x00994D).setOrigin(0.5);
    }
}