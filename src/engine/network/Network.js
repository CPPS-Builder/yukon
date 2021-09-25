import DataHandler from './DataHandler'

import io from 'socket.io-client'


export default class Network {

    constructor(game) {
        this.game = game
        this.crumbs = game.crumbs

        this.handler = new DataHandler(this)
        this.client = null

        this.saveUsername = false
        this.savePassword = false
        this.token = null

        // Used to switch back to correct login scene on an error
        this.lastLoginScene = null

        this.worldName
    }

    connectLogin(saveUsername, savePassword, onConnect) {
        this.saveUsername = saveUsername
        this.savePassword = savePassword

        this.connect(this.crumbs.worlds.login, () => {
            onConnect()
        }, () => {
            this.disconnect()
        })
    }

    connectGame(world, username, key) {
        // Only create token if save password is checked and space is available
        let createToken = this.savePassword && Object.keys(this.savedPenguins).length <= 6
        let response = { username: username, key: key, createToken: createToken }

        // If a token exists for the user add the token selector to response,
        // so that the token can be deleted/refreshed by the server
        let token = this.getToken(username)
        if (token) response.token = token.split(':')[0]

        this.connect(this.crumbs.worlds.game[world], () => {
            this.send('game_auth', response)
            this.worldName = world

        }, () => {
            this.onConnectionLost()
        })
    }

    connect(world, onConnect, onDisconnect) {
        this.disconnect()

        this.client = io.connect(`${world.host}:${world.port}`)

        this.client.once('connect', onConnect)
        this.client.once('disconnect', onDisconnect)
        this.client.on('message', (message) => { this.onMessage(message) })
    }

    disconnect() {
        if (this.client) this.client.disconnect()
    }

    send(action, args = {}) {
        this.client.emit('message', JSON.stringify({ action: action, args: args }) + '\xdd')
    }

    // Handlers

    onMessage(message) {
        this.handler.handle(message)
    }

    onConnectionLost() {
        this.disconnect()

        let prompt = this.game.scene.getScene('InterfaceController').prompt
        prompt.showError('Connection was lost.\nPlease click to learn more', 'Learn More', () => { })
    }

    // Saved penguins

    get isSavedPenguins() {
        if (localStorage.getItem('saved_penguins')) {
            return true
        } else {
            return false
        }
    }

    get savedPenguins() {
        let savedPenguins = localStorage.getItem('saved_penguins')
        if (!savedPenguins) return {}

        try {
            return JSON.parse(savedPenguins)
        } catch (error) {
            return {}
        }
    }

    getToken(username) {
        let save = this.savedPenguins[username.toLowerCase()]

        if (save && save.token) {
            return save.token
        } else {
            return null
        }
    }

}
