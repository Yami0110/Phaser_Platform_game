class Coin {
    constructor(scene) {
        this.scene = scene;
        this.add();
    }

    add() {
        // vytvorenie skupiny fyzických objektov a zakázanie podpory gravitácie
        this.coins = this.scene.physics.add.group({ allowGravity: false });
        // získanie objektov z objektovej vrstvy Coins
        const coinObject = this.scene.map.getObjectLayer("Coins").objects;
        // pridanie objektov do vytvorenej skupiny
        for (const coin of coinObject) {
            this.coins.create(coin.x, coin.y).setOrigin(-0.3).setScale(0.7);
        }
        // nastavenie hranice kolízie a rezu jednotlivým objektom skupiny coins
        for (const coin of this.coins.children.entries) {
            coin.setCrop(0, 0, 15, 16);
            coin.body.setCircle(7, 1, 2);
        }
    }

    animation() {
        // prehranie animácií pre každý objekt skupiny coins
        for (const coin of this.coins.children.entries) {
            coin.play("coinRotation", true);
        }
    }

    collision(object) {
        /* volanie funkcie collect() pri kolízií medzi mincou
           a objektom, ktorý je zadaný ako parameter tejto funkcie */
        this.scene.physics.add.overlap(this.coins, object, this.collect, null, this);
        return this;
    }

    collect() {
        /* odstránenie konkrétnej mince
           na základe kontroly jej dotyku s iným objektom */
        for (const coin of this.coins.children.entries) {
            if (!coin.body.touching.none) {
                coin.destroy();
            }
        }
        // prehranie zvukového efektu
        this.scene.sound.add("coinPickUpSound").play();
        // aktualizácia aktuálneho skóre v registri
        this.score = this.scene.registry.get("score");
        this.score += 10;
        this.scene.registry.set("score", this.score);
    }
}

class Apple {
    constructor(scene) {
        this.scene = scene;
        this.add();
    }

    add() {
        this.apples = this.scene.physics.add.group({ allowGravity: false });
        const appleObjects = this.scene.map.getObjectLayer("Apple").objects;
        for (const apple of appleObjects) {
            this.apples.create(apple.x - 3, apple.y).setOrigin(0).setScale(0.7);
        }
        for (const apple of this.apples.children.entries) {
            apple.body.setCircle(4, 13, 14);
        }
    }

    animation() {
        for (const apple of this.apples.children.entries) {
            apple.play("apple", true);
        }
    }

    collision(object) {
        this.scene.physics.add.overlap(this.apples, object, this.collect, null, this);
        return this;
    }

    collect() {
        for (const apple of this.apples.children.entries) {
            if (!apple.body.touching.none) {
                apple.destroy();
            }
        }
        this.scene.sound.add("applePickUp").play();
        /* aktualizácia aktuálneho života, ktorá sa vykoná len v prípade,
           ak počet životov je menší ako 3 */
        this.lives = this.scene.registry.get("lives");
        if (this.lives < 3) {
            this.lives++;
            this.scene.registry.set("lives", this.lives);
        }
    }
}