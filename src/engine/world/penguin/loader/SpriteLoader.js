import TintedSprite from '@engine/utils/tint/TintedSprite'


export default class SpriteLoader {

    constructor(world) {
        this.world = world

        this.anims = world.anims
        this.animations = world.crumbs.penguin
    }

    loadSprite(penguin, id, depth) {
        let sprite

        if (id == 'penguin-body') {
            sprite = new TintedSprite(penguin.room, 0, 0, id, '1_1')
            sprite.tint = this.world.getColor(penguin.color)

            penguin.bodySprite = sprite
            penguin.room.add.existing(sprite)

        } else {
            sprite = penguin.room.add.sprite(0, 0, id, '1_1')
        }

        // Attach depth so that children can be sorted using penguin.sort('depth')
        sprite.depth = depth

        this.addAnims(id, sprite)
        penguin.add(sprite)

        return sprite
    }

    addAnims(id) {
        let anims = this.anims

        if (anims.exists(`${id}_1`)) return // If sprite animations are already loaded

        for (let [animationId, animation] of Object.entries(this.animations)) {

            let config = { prefix: `${animationId}_` }

            if (animation.frames) {
                // Animations with defined frame sequences (e.g waving)
                config.frames = animation.frames
            } else {
                config.start = (animation.start) ? animation.start : 1
                config.end = animation.end
            }

            let frames = anims.generateFrameNames(id, config)

            anims.create({
                key: `${id}_${animationId}`,
                frames: frames,
                frameRate: 24,
                repeat: (animation.repeat) ? animation.repeat : 0
            })
        }
    }

}
