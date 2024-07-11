import * as PIXI from "./pixi.mjs";
import { loadAssets, getTexture } from "./common/assets.js";
import appConstans from "./common/constans.js";
import { addPlayer, getPlayer, playerShot, playerTick } from "./sprites/player.js";
import { bulletTick, clearBullet, deleteOneBullet, initBullet } from "./sprites/bullet.js";
import { allTextures } from "./common/textures.js";
import { destroyTarget, initTarget, restoreTarget } from "./sprites/targets.js";
import { checkCollis } from "./common/util.js";
import { explosionTick, initExplosions } from "./sprites/explosion.js";
import { initInfo } from "./sprites/infoPanel.js";
import { EventHub } from "./common/events.js";
import {getGameOver} from "./sprites/messages.js"

const WIDTH = appConstans.size.WIDTH
const HEIGHT = appConstans.size.HEIGHT

const appState = {
    stopped: false,
    moveLeft: false,
    moveRight: false,
}

let rootContainer;

const createGameScene = () => {
    const app = new PIXI.Application({
        background: '#000000',
        antialias: true,
        width: WIDTH,
        height: HEIGHT,
    })
    document.body.appendChild(app.view)
    appState.app = app

    rootContainer = app.stage

    const background = PIXI.Sprite.from(getTexture(allTextures.space));
    background.width = WIDTH;
    background.height = HEIGHT;
    background.alpha = 1;
    rootContainer.addChild(background)

    initInfo(app, rootContainer)

    rootContainer.interactive = true
    rootContainer.hitArea = app.screen

    const bullets = initBullet(app, rootContainer)
    rootContainer.addChild(bullets)


    const target = initTarget(app, rootContainer)
    restoreTarget()
    rootContainer.addChild(target)

    initExplosions(app, rootContainer)

    const player = addPlayer(app, rootContainer)
    rootContainer.addChild(player)

    return app
}

const collisionAllCheck = () => {
    const playerCont = rootContainer.getChildByName(appConstans.containers.player)
    const targetCont = rootContainer.getChildByName(appConstans.containers.targets)
    const bulletCont = rootContainer.getChildByName(appConstans.containers.bullets)
    if(bulletCont && targetCont){
        const removeBullet = []
        const removeTarget = []
        bulletCont.children.forEach((b) => {
            targetCont.children.forEach((t) => {
                if(b && t){
                    if(checkCollis(b,t)){
                        if(removeTarget.indexOf(t) === -1){
                            removeTarget.push(t)
                            console.log(t.position.x)
                        }
                        if(removeTarget.indexOf(b) === -1){
                            removeBullet.push(b)
                            console.log(b.position.x)
                        }
                    }
                }
            })
        })
        removeTarget.forEach((p) => {
            p.destroyMe(p)
        })
        removeBullet.forEach((p) => {
            p.destroyMe(p)
        })
    }
}

const initInteraction = () => {
    console.log('two')
    appState.mousePosition = getPlayer().position.x

    appState.app.stage.addEventListener("pointermove", (e) => {
        appState.mousePosition = e.global.x
    })


    document.addEventListener("keydown", (e) => {
        if(e.code === 'Space'){
            console.log("spaaaace")
            playerShot()
        }
    })

    appState.app.ticker.add((delta) => {
        playerTick(appState);
        bulletTick();
        collisionAllCheck();
        explosionTick();
    })
}

export const initGame = () => {
    loadAssets((progress) => {
        if(progress === 'all'){
            createGameScene()
            initInteraction()
        }
    })
    // createGameScene()
    // initInteraction()
}

const restartGame = () => {
    clearBullet()
    restoreTarget()
}

EventHub.on(appConstans.events.gameOver, () => {
    appState.app.ticker.stop()
    rootContainer.addChild(getGameOver())
})

EventHub.on(appConstans.events.restartGame, (event) => {
    restartGame()
    if(event === appConstans.events.gameOver){
        rootContainer.removeChild(getGameOver())
    }
    appState.app.ticker.start()
})