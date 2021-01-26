import Plugin from '../Plugin'


export default class Actions extends Plugin {

    constructor(network) {
        super(network)
        this.events = {
            'send_position': this.sendPosition,
            'send_frame': this.sendFrame,
            'snowball': this.snowball
        }
    }

    sendPosition(args) {
        this.world.room.penguins[args.id].movePenguin(args.x, args.y)
    }

    sendFrame(args) {
        this.world.room.penguins[args.id].playFrame(args.frame, args.loop)
    }

    snowball(args) {
        this.interface.main.snowballFactory.throwBall(args.id, args.x, args.y)
    }

}
