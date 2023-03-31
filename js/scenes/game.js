class Level1 extends Phaser.Scene {
    constructor() {
        super("Level1");
    }

    create() {
        this.scene.run("Background");
        this.scene.run("PlayerStatus");

        // vytvorenie mapy
        this.map = this.make.tilemap({ key: "level1" });
        // pridanie kolekcie dlaždíc k vytvorenej mape
        this.tileset = this.map.addTilesetImage("tileset", "tileset");
        // vygenerovanie vrstvy Platform
        this.platform = this.map.createLayer("Platform", this.tileset);
        // nastavenie podpory kolízie všetkým dlaždiciam patriace do vrstvy Platform
        this.platform.setCollisionByExclusion(-1, true);

        this.spikes = new Spike(this);
        this.physics.add.collider(this.spikes.spikes, this.platform);
        this.saws = new Saw(this);
        this.physics.add.collider(this.saws.saws, this.platform);
        this.spikeHeads = new SpikeHead(this);
        this.physics.add.collider(this.spikeHeads.spikeHeads, this.platform);

        this.player = new Player(this, 50, 120);
        this.physics.add.collider(this.player.sprite, this.platform);
        this.player.dangerousCollision(this.spikes.spikes);
        this.player.dangerousCollision(this.saws.saws);
        this.player.dangerousCollision(this.spikeHeads.spikeHeads);

        this.coins = new Coin(this);
        this.coins.collision(this.player.sprite);
        this.apple = new Apple(this);
        this.apple.collision(this.player.sprite);
    }

    update() {
        this.player.move();
        this.saws.move();
        this.spikeHeads.move();

        this.coins.animation();
        this.apple.animation();

        if (this.player.sprite.x >= 1568) {
            this.score = this.registry.get("score");
            this.registry.set("level1Score", this.score);
            this.registry.set("score", 0);
            this.scene.start("Level2");
        }
    }
}

class Level2 extends Phaser.Scene {
    constructor() {
        super("Level2");
    }

    create() {
        this.map = this.make.tilemap({ key: "level2" });
        this.tileset = this.map.addTilesetImage("tileset", "tileset");
        this.platform = this.map.createLayer("Platform", this.tileset);
        this.platform.setCollisionByExclusion(-1, true);

        this.spikes = new Spike(this);
        this.physics.add.collider(this.spikes.spikes, this.platform);
        this.saws = new Saw(this);
        this.physics.add.collider(this.saws.saws, this.platform);
        this.spikeHeads = new SpikeHead(this);
        this.physics.add.collider(this.spikeHeads.spikeHeads, this.platform);

        this.player = new Player(this, 50, 120);
        this.physics.add.collider(this.player.sprite, this.platform);
        this.player.dangerousCollision(this.spikes.spikes);
        this.player.dangerousCollision(this.saws.saws);
        this.player.dangerousCollision(this.spikeHeads.spikeHeads);

        this.coins = new Coin(this);
        this.coins.collision(this.player.sprite);
        this.apple = new Apple(this);
        this.apple.collision(this.player.sprite);

        this.registry.set("actualLevel", 2);
    }

    update() {
        this.player.move();
        this.saws.move();
        this.spikeHeads.move();

        this.coins.animation();
        this.apple.animation();

        if (this.player.sprite.x >= 1568) {
            this.score = this.registry.get("score");
            this.registry.set("level2Score", this.score);
            this.registry.set("score", 0);
            this.scene.start("Level3");
        }
    }
}

class Level3 extends Phaser.Scene {
    constructor() {
        super("Level3");
    }

    create() {
        this.map = this.make.tilemap({ key: "level3" });
        this.tileset = this.map.addTilesetImage("tileset", "tileset");
        this.platform = this.map.createLayer("Platform", this.tileset);
        this.platform.setCollisionByExclusion(-1, true);

        this.spikes = new Spike(this);
        this.physics.add.collider(this.spikes.spikes, this.platform);
        this.saws = new Saw(this);
        this.physics.add.collider(this.saws.saws, this.platform);
        this.spikeHeads = new SpikeHead(this);
        this.physics.add.collider(this.spikeHeads.spikeHeads, this.platform);

        this.player = new Player(this, 50, 120);
        this.physics.add.collider(this.player.sprite, this.platform);
        this.player.dangerousCollision(this.spikes.spikes);
        this.player.dangerousCollision(this.saws.saws);
        this.player.dangerousCollision(this.spikeHeads.spikeHeads);

        this.coins = new Coin(this);
        this.coins.collision(this.player.sprite);
        this.apple = new Apple(this);
        this.apple.collision(this.player.sprite);

        this.registry.set("actualLevel", 3);
    }

    update() {
        this.player.move();
        this.saws.move();
        this.spikeHeads.move();

        this.coins.animation();
        this.apple.animation();

        if (this.player.sprite.x >= 1568) {
            this.score = this.registry.get("score");
            this.registry.set("level3Score", this.score);
            this.registry.set("score", 0);
            this.scene.start("Level4");
        }
    }
}

class Level4 extends Phaser.Scene {
    constructor() {
        super("Level4");
    }

    create() {
        this.map = this.make.tilemap({ key: "level4" });
        this.tileset = this.map.addTilesetImage("tileset", "tileset");
        this.platform = this.map.createLayer("Platform", this.tileset);
        this.platform.setCollisionByExclusion(-1, true);

        this.spikes = new Spike(this);
        this.physics.add.collider(this.spikes.spikes, this.platform);
        this.saws = new Saw(this);
        this.physics.add.collider(this.saws.saws, this.platform);
        this.spikeHeads = new SpikeHead(this);
        this.physics.add.collider(this.spikeHeads.spikeHeads, this.platform);

        this.player = new Player(this, 50, 120);
        this.physics.add.collider(this.player.sprite, this.platform);
        this.player.dangerousCollision(this.spikes.spikes);
        this.player.dangerousCollision(this.saws.saws);
        this.player.dangerousCollision(this.spikeHeads.spikeHeads);

        this.coins = new Coin(this);
        this.coins.collision(this.player.sprite);
        this.apple = new Apple(this);
        this.apple.collision(this.player.sprite);

        this.registry.set("actualLevel", 4);
    }

    update() {
        this.player.move();
        this.saws.move();
        this.spikeHeads.move();

        this.coins.animation();
        this.apple.animation();

        if (this.player.sprite.x >= 1568) {
            this.score = this.registry.get("score");
            this.registry.set("level4Score", this.score);
            this.registry.set("score", 0);
            this.scene.start("Level5");
        }
    }
}

class Level5 extends Phaser.Scene {
    constructor() {
        super("Level5");
    }

    create() {
        this.map = this.make.tilemap({ key: "level5" });
        this.tileset = this.map.addTilesetImage("tileset", "tileset");
        this.platform = this.map.createLayer("Platform", this.tileset);
        this.platform.setCollisionByExclusion(-1, true);

        this.spikes = new Spike(this);
        this.physics.add.collider(this.spikes.spikes, this.platform);
        this.saws = new Saw(this);
        this.physics.add.collider(this.saws.saws, this.platform);
        this.spikeHeads = new SpikeHead(this);
        this.physics.add.collider(this.spikeHeads.spikeHeads, this.platform);

        this.player = new Player(this, 50, 120);
        this.physics.add.collider(this.player.sprite, this.platform);
        this.player.dangerousCollision(this.spikes.spikes);
        this.player.dangerousCollision(this.saws.saws);
        this.player.dangerousCollision(this.spikeHeads.spikeHeads);

        this.coins = new Coin(this);
        this.coins.collision(this.player.sprite);
        this.apple = new Apple(this);
        this.apple.collision(this.player.sprite);

        this.registry.set("actualLevel", 5);
    }

    update() {
        this.player.move();
        this.saws.move();
        this.spikeHeads.move();

        this.coins.animation();
        this.apple.animation();

        if (this.player.sprite.x >= 1568) {
            this.score = this.registry.get("score");
            this.registry.set("level5Score", this.score);
            this.scene.stop("Background");
            this.scene.stop("PlayerStatus");
            this.scene.start("GameClear");
        }
    }
}

/*class Game extends Phaser.Scene {
    constructor() {
        super("Game")
    }
    
    create() {
        this.actualLevel = this.registry.get("actualLevel");
        switch (this.actualLevel) {
            case 1:
                this.mapKey = { key: "level1" }
                break;
            case 2:
                this.mapKey = { key: "level2" }
                break;
            case 3:
                this.mapKey = { key: "level3" }
                break;
            case 4:
                this.mapKey = { key: "level4" }
                break;
            case 5:
                this.mapKey = { key: "level5" }
                break;
        }
        this.map = this.make.tilemap(this.mapKey);
        this.tileset = this.map.addTilesetImage("tileset", "tileset");
        this.platform = this.map.createLayer("Platform", this.tileset);
        this.platform.setCollisionByExclusion(-1, true);
        this.traps = new Trap(this);
        this.physics.add.collider(this.traps.spikes, this.platform);
        this.physics.add.collider(this.traps.saws, this.platform);
        this.physics.add.collider(this.traps.spikeHeads, this.platform);
        this.player = new Player(this, 50, 120);
        this.physics.add.collider(this.player.sprite, this.platform);
        this.player.dangerousCollision(this.traps.spikes);
        this.player.dangerousCollision(this.traps.saws);
        this.player.dangerousCollision(this.traps.spikeHeads);
        this.coins = new Coin(this);
        this.coins.collision(this.player.sprite);
        this.apples = new Apple(this);
        this.apples.collision(this.player.sprite);
    }

    update() {
        this.player.move();
        this.traps.sawMove();
        this.traps.spikeHeadMove();
        this.coins.animation();
        this.apples.animation();
        if (this.player.sprite.x >= 1568) {
            this.score = this.registry.get("score");
            switch (this.actualLevel) {
                case 1:
                    this.levelScore = "level1Score";
                    break;
                case 2:
                    this.levelScore = "level2Score";
                    break;
                case 3:
                    this.levelScore = "level3Score";
                    break;
                case 4:
                    this.levelScore = "level4Score";
                    break;
                case 5:
                    this.levelScore = "level5Score";
                    this.scene.stop("Background");
                    this.scene.stop("PlayerStatus");
                    break;
            }
            this.registry.set(this.levelScore, this.score);
            this.registry.set("score", 0);
            this.registry.set("actualLevel", this.actualLevel + 1);
            if (this.actualLevel != 5) this.scene.start("Game");
            else this.scene.start("GameClear");
        }
    }
}*/