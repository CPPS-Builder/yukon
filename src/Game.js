import Network from '@/network/Network'
import Preload from '@/preload/Preload'


export default class Game extends Phaser.Game {

    constructor(config) {
        super(config)

        this.crumbs = config.crumbs
        this.network = new Network(this)

        this.scene.add('Preload', Preload, true)
    }

    get world() {
        return this.scene.getScene('World')
    }

}
