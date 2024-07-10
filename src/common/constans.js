const appConstans = {
    size: {
        WIDTH: window.innerWidth ? window.innerWidth : 800,
        HEIGHT: window.innerHeight ? window.innerHeight : 600,
    },
    containers: {
        player: 'player',
        bullets: 'bullets',
        targets: 'targets',
        explosions: 'explosions',
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
        win: 'win',
        gameOver: 'gameOver',
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