class PlayerStatus extends Phaser.Scene {
    constructor() {
        super("PlayerStatus");
    }

    create() {
        // zobrazenie skóre, čísla aktuálneho levelu a životov
        this.scoreBar = this.add.image(0, 0, "bar").setOrigin(0);
        this.scoreText = this.add.bitmapText(20, 12, "galvanic", "SCORE: 0", fontSizes[2]).setTint(0x00994D);
        this.livesBar = this.add.image(game.config.width, 105, "bar").setOrigin(1);
        this.life1 = this.add.image(680, 50, "life").setScale(3);
        this.life2 = this.add.image(810, 50, "life").setScale(3);
        this.life3 = this.add.image(940, 50, "life").setScale(3);
        this.actualLevel = this.add.image(game.config.width / 2, 50, "level1").setScale(5);

        // zapísanie začiatočných hodnôt do registra s príslušnými kľúčmi
        this.registry.set("score", 0).set("lives", 3).set("die", false).set("actualLevel", 1);

        // volanie funkcie updateStatus() v prípade zachytenia zmeny v registri
        this.registry.events.on("changedata", this.updateStatus, this);
    }

    updateStatus(parent, key, data) {
        switch (key) {
            // prepísanie textu pre skóre
            case "score":
                this.scoreText.setText("SCORE: " + data);
                break;
            // menenie viditeľnosti obrázkov predstavujúce životy
            case "lives":
                if (data === 3) [this.life1.visible, this.life2.visible, this.life3.visible] = [true, true, true];
                if (data === 2) [this.life1.visible, this.life2.visible, this.life3.visible] = [false, true, true];
                if (data === 1) [this.life1.visible, this.life2.visible, this.life3.visible] = [false, false, true];
                break;
            // zastavenie všetkých scén a spustenie scény GameOver
            case "die":
                this.scene.stop("Background")
                          .stop("PlayerStatus")
                          .stop("Level1")
                          .stop("Level2")
                          .stop("Level3")
                          .stop("Level4")
                          .stop("Level5")
                          /*.stop("Game")*/;
                this.scene.start("GameOver");
                break;
            // prepínanie obrázkov obsahujúce čísla levelov
            case "actualLevel":
                var level;
                switch (data) {
                    case 2: { level = "level2"; break; }
                    case 3: { level = "level3"; break; }
                    case 4: { level = "level4"; break; }
                    case 5: { level = "level5"; break; }
                }
                this.actualLevel.destroy();
                this.actualLevel = this.add.image(game.config.width / 2, 50, level).setScale(5);
                break;
        }
    }
}