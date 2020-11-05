import RoomScene from '../RoomScene'


/* START OF COMPILED CODE */

class Village extends RoomScene {

    constructor() {
        super("Village");

        /** @type {Phaser.GameObjects.Image[]} */
        this.sort;

        /* START-USER-CTR-CODE */
        // Write your code here.
        /* END-USER-CTR-CODE */
    }

    preload() {

        this.load.pack("village-pack", "assets/media/rooms/village/village-pack.json");
    }

    _create() {

        // bg
        const bg = this.add.image(-31, -17, "village", "bg");
        bg.setOrigin(0, 0);

        // lodge_door
        const lodge_door = this.add.image(1067, 304, "village", "lodge_door");
        lodge_door.setOrigin(0.27807486631016043, 0.5560538116591929);

        // lodge_stairs
        this.add.image(960, 434, "village", "lodge_stairs");

        // lodge_front
        const lodge_front = this.add.image(1077, 377, "village", "lodge_front");
        lodge_front.setOrigin(0.4807692307692308, 0.5352112676056338);

        // lodge_snow
        const lodge_snow = this.add.image(1095, 417, "village", "lodge_snow");
        lodge_snow.setOrigin(0.5368217054263565, 0.4838709677419355);

        // phone
        this.add.image(1371, 303, "village", "phone");

        // phone_door
        const phone_door = this.add.image(1359, 377, "village", "phone_door");
        phone_door.setOrigin(0.22797927461139897, 0.6206896551724138);

        // phone_snow
        const phone_snow = this.add.image(1358, 590, "village", "phone_snow");
        phone_snow.setOrigin(0.509090909090909, 0.5272727272727272);

        // lift
        this.add.image(360, 194, "village", "lift");

        // smoke0001
        this.add.image(1104, 24, "village", "smoke0001");

        // left_sign
        const left_sign = this.add.image(134, 668, "village", "left_sign");
        left_sign.setOrigin(0.4444444444444444, 0.5217391304347826);

        // right_sign
        const right_sign = this.add.image(1469, 661, "village", "right_sign");
        right_sign.setOrigin(0.4861111111111111, 0.7831325301204819);

        // tours
        const tours = this.add.image(786, 469, "village", "tours");
        tours.setOrigin(0.5, 0.8846153846153846);

        // tours_text
        const tours_text = this.add.image(789, 490.2201404552512, "village", "tours_text");
        tours_text.setOrigin(0.5, 3.9212529261510674);

        // lists
        const sort = [tours, tours_text]

        this.sort = sort;
    }

    /* START-USER-CODE */

    get roomTriggers() {
        return [
            {
                body: this.roomPhysics.lodge,
                x: 1044,
                y: 406,
                callback : () => { this.triggerRoom(220, 320, 640) }
            }
        ]
    }

    /* END-USER-CODE */
}

/* END OF COMPILED CODE */

export default Village
