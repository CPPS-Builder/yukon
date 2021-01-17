import BaseScene from '@scenes/base/BaseScene'

import InterfaceController from '@engine/interface/InterfaceController'
import WorldController from '@engine/world/WorldController'

import Load from '@scenes/interface/menus/load/Load'
import Preload from '@engine/boot/Preload'


export default class Boot extends BaseScene {

    create() {
        this.scene.add('InterfaceController', InterfaceController)
        this.scene.add('WorldController', WorldController)

        this.scene.add('Load', Load)

        this.interface.showLoading('Loading Content', true)
        this.interface.loading.events.on('create', this.onLoadCreate, this)
    }

    onLoadCreate() {
        this.scene.add('Preload', Preload, true)
    }

}
