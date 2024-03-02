import Plugin from '../Plugin'


export default class Pet extends Plugin {

    constructor(network) {
        super(network)

        this.events = {
            'get_pets': this.getPets,
            'pet_move': this.petMove,
            'pet_play': this.petPlay,
            'pet_rest': this.petRest,
            'pet_feed': this.petFeed,
            'pet_bath': this.petBath,
            'pet_gum': this.petGum,
            'pet_cookie': this.petCookie,
            'pet_frame': this.petFrame,
            'update_pet': this.updatePet,
            'pet_start_walk': this.petStartWalk,
        }
    }

    get isIglooReady() {
        return this.world.room.isReady && this.world.room.isIgloo
    }

    get pets() {
        return this.isIglooReady ? this.world.room.pets : {}
    }

    petAvailable(id) {
        return this.isIglooReady && id in this.pets
    }

    getPets(args) {
        if (this.isIglooReady) {
            this.world.room.loadPets(args.pets)
        }
    }

    petMove(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].move(args)
        }
    }

    petPlay(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].startPlay(args.playType)
            this.pets[args.id].updateStats(args.energy, args.health, args.rest)
        }
    }

    petRest(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].startRest()
            this.pets[args.id].updateStats(args.energy, args.health, args.rest)
        }
    }

    petFeed(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].startFeed()
            this.pets[args.id].updateStats(args.energy, args.health, args.rest)
        }
    }

    petBath(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].startBath()
            this.pets[args.id].updateStats(args.energy, args.health, args.rest)
        }
    }

    petGum(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].startGum()
            this.pets[args.id].updateStats(args.energy, args.health, args.rest)
        }
    }

    petCookie(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].startCookie()
            this.pets[args.id].updateStats(args.energy, args.health, args.rest)
        }
    }

    petFrame(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].startFrame(args.frame)
        }
    }

    updatePet(args) {
        if (this.petAvailable(args.id)) {
            this.pets[args.id].updateStats(args.energy, args.health, args.rest)
        }
    }

    petStartWalk(args) {
        if (this.petAvailable(args.petId)) {
            this.pets[args.petId].startWalk()
        }
    }
}
