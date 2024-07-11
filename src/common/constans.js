const appConstans = {
    size: {
        WIDTH: window.innerWidth ,
        HEIGHT: window.innerHeight,
    },
    containers: {
        player: 'player',
        bullets: 'bullets',
        targets: 'targets',
        explosions: 'explosions',
        infoPanel: 'infoPanel',
    },
    timeouts: {
        playerLock: 2000,
        shotTime: 500,
    },
    count: {
        countTarget: Math.floor(window.innerWidth / 40),
    },
    events: {
        infoUpdate: 'infoUpdate',
        restartGame: 'restartGame',
        gameOver: 'gameOver',
        helthYou: 'helthYou',
        resetTarget: 'resetTarger'
    },
    sounds: {
        shot: 'shot',
        explosion: 'explosion',
        background: 'background',
        // gameOver: 'gameOver',
        // youWin: 'youWin',
    }
}

export default appConstans