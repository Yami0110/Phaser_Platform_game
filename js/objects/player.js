class Player {
    constructor(scene, x, y) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.input = this.scene.input.keyboard.createCursorKeys();
        this.add();
    }

    add() {
        // vytvorenie hráčskej postavy a jej vloženie na scénu
        this.sprite = this.scene.physics.add.sprite(this.x, this.y).setScale(0.6);
        // sledovanie hráčskej postavy
        this.scene.cameras.main.setBounds(0, 0, 1600, 160).startFollow(this.sprite).setZoom(5);
        // nastavenie hranice kolízie hráčskej postavy
        this.sprite.body.setCircle(10, 7, 9);
        // nastavenie stavu hráča na nezraneného
        this.injured = false;
    }

    move() {
        // zabezpečenie pohybu a animácii hráčskej postavy na základe vstupov
        if (this.input.right.isDown) {
            this.sprite.setVelocityX(100).setFlip(false);
            this.sprite.anims.play("playerRun", true);
        } else if (this.input.left.isDown) {
            this.sprite.setVelocityX(-100).setFlip(true);
            this.sprite.anims.play("playerRun", true);
        } else {
            this.sprite.setVelocityX(0);
            this.sprite.anims.play("playerIdle", true);
        }
        // zabezpečenie skákania a spustenia zvukového efektu
        if (this.input.space.isDown && this.sprite.body.onFloor()) {
            this.sprite.setVelocityY(-320);
            this.scene.sound.add("jumpSound").play();
        }
    }

    dangerousCollision(object) {
        // volanie metódy pre odobratie života v prípade vzniknutia kolízie
        this.scene.physics.add.overlap(this.sprite, object, this.removeHeart, null, this);
        return this;
    }

    removeHeart() {
        // život je odobraný len v prípade, ak hráč nie je zranený
        if (this.injured == false) {
            this.lives = this.scene.registry.get("lives");
            this.lives--;
            this.scene.registry.set("lives", this.lives);
            this.injured = true;
            this.scene.time.delayedCall(1000, function() { this.injured = false }, [], this);
            this.scene.sound.add("injuredSound").play();
            // v prípade straty všetkých životov sa pošle údaj o smrti do registra
            if (this.lives == 0) {
                this.die = true;
                this.scene.registry.set("die", this.die);
            }
        }
    }
}