class Spike {
    constructor(scene) {
        this.scene = scene;
        this.add();
    }

    add() {
        this.spikes = this.scene.physics.add.group({ allowGravity: false });
        const spikeObjects = this.scene.map.getObjectLayer("Spikes").objects;
        for (const spike of spikeObjects) {
            this.spikes.create(spike.x + 0.5, spike.y, "spike").setOrigin(0);
        }
        for (const spike of this.spikes.children.entries) {
            spike.setCrop(0, 1, 15, 16);
            spike.body.setCircle(6, 1.5, 10);  
        }
    }
}

class Saw {
    constructor(scene) {
        this.scene = scene;
        this.add();
    }

    add() {
        // vytvorenie skupiny fyzických objektov a povolenie podpory gravitácie
        this.saws = this.scene.physics.add.group({ allowGravity: true });
        const sawObjects = this.scene.map.getObjectLayer("Saws").objects;
        for (const saw of sawObjects) {
            this.saws.create(saw.x, saw.y).setOrigin(0).setScale(0.4);
        }
        for (const saw of this.saws.children.entries) {
            saw.body.setCircle(10, 9, 9);
            saw.direction = "right";
        }
    }

    move() {
        // zabezpečovanie posúvania a prepínania smeru pohybu jednotlivých píl
        for (const saw of this.saws.children.entries) {
            if (saw.body.blocked.right || saw.body.touching.right) saw.direction = "left";
            if (saw.body.blocked.left || saw.body.touching.left) saw.direction = "right";

            if (saw.direction == "right") {
                saw.setVelocityX(50);
                saw.anims.play("sawActive", true);
            } else {
                saw.setVelocityX(-50);
                saw.anims.play("sawActive", true);
            }
        }
    }
}

class SpikeHead {
    constructor(scene) {
        this.scene = scene;
        this.add();
    }

    add() {
        this.spikeHeads = this.scene.physics.add.group({ allowGravity: false });
        const spikeHeadObjects = this.scene.map.getObjectLayer("SpikeHeads").objects;
        for (const spikeHead of spikeHeadObjects) {
            this.spikeHeads.create(spikeHead.x - 14, spikeHead.y).setOrigin(-0.3).setScale(0.5);
        }
        for (const spikeHead of this.spikeHeads.children.entries) {
            spikeHead.body.setCircle(12, 16, 15);
            spikeHead.direction = "down";
        }
    }

    move() {
        for (const spikeHead of this.spikeHeads.children.entries) {
            if (spikeHead.body.blocked.up || spikeHead.body.touching.up) spikeHead.direction = "down";
            if (spikeHead.body.blocked.down || spikeHead.body.touching.down) spikeHead.direction = "up";

            if (spikeHead.direction == "down") {
                spikeHead.setVelocityY(50);
                spikeHead.anims.play("spikeHeadBlink", true);
            } else {
                spikeHead.setVelocityY(-50);
                spikeHead.anims.play("spikeHeadBlink", true);
            }
        }
    }
}