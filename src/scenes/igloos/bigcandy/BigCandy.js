import IglooScene from '../IglooScene'


/* START OF COMPILED CODE */

class BigCandy extends IglooScene {

    constructor() {
        super("BigCandy");

        /** @type {Phaser.GameObjects.Image} */
        this.floor;
        /** @type {Phaser.GameObjects.Image} */
        this.mask;

        /* START-USER-CTR-CODE */

        this.floorSpawn = [720, 720]
        this.wallSpawn = [720, 260]
        this.wallBounds = [350, 1200]
        this.floorFrame = 2

        /* END-USER-CTR-CODE */
    }

    _preload() {

        this.load.pack("bigcandy-pack", "assets/media/igloos/buildings/sprites/bigcandy/bigcandy-pack.json");
    }

    _create() {

        // floor
        const floor = this.add.image(760, 636, "bigcandy", "floor");
        floor.setOrigin(0.5003940110323088, 0.5013477088948787);

        // mask
        const mask = this.add.image(760, 647, "bigcandy", "mask");
        mask.setOrigin(0.500395256916996, 0.5014749262536873);
        mask.visible = false;

        // door
        this.add.image(243, 478, "bigcandy", "door");

        // wall_1
        const wall_1 = this.add.image(321, 389, "bigcandy", "wall_1");
        wall_1.setOrigin(0.5010266940451745, 0.5);

        // wall_2
        const wall_2 = this.add.image(762, 295, "bigcandy", "wall_2");
        wall_2.setOrigin(0.5008695652173913, 0.5);

        // wall_3
        this.add.image(1210, 401, "bigcandy", "wall_3");

        // window
        const window = this.add.image(1072, 485, "bigcandy", "window");
        window.setOrigin(0.5014164305949008, 0.5);

        // window_1
        const window_1 = this.add.image(529, 481, "bigcandy", "window");
        window_1.setOrigin(0.5014164305949008, 0.5);
        window_1.flipX = true;

        // chimney
        const chimney = this.add.image(1127, 133, "bigcandy", "chimney");
        chimney.setOrigin(0.5050505050505051, 0.5);

        this.floor = floor;
        this.mask = mask;
    }

    /* START-USER-CODE */
    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default BigCandy
