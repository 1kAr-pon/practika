import { playerTick } from "../sprites/player.js"

const appConstans = {
    size: {
        WIDTH: window.innerWidth ? window.innerWidth : 800,
        HEIGHT: window.innerHeight ? window.innerHeight : 600,
    },
    containers: {
        player: 'player',
        bullets: 'bullets',
        targets: 'targets',
    },
    timeouts: {
        playerLock: 2000,
        shotTime: 500,
    },
    count: {
        countTarget: Math.floor(window.innerWidth / 40),
    }
}

export default appConstans