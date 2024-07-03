import * as PIXI from "./pixi.mjs";
import { loadAssets, getTexture } from "./common/assets.js";
import appConstans from "./common/constans.js";
import { addPlayer, getPlayer, playerShot, playerTick } from "./sprites/player.js";
import { bulletTick, initBullet } from "./sprites/bullet.js";
import { allTextures } from "./common/textures.js";
import { initTarget, restoreTarget } from "./sprites/targets.js";

const WIDTH = appConstans.size.WIDTH
const HEIGHT = appConstans.size.HEIGHT

const appState = {
    stopped: false,
    moveLeft: false,
    moveRight: false,
}

const createGameScene = () => {
    const app = new PIXI.Application({
        background: '#000000',
        antialias: true,
        width: WIDTH,
        height: HEIGHT,
    })
    document.body.appendChild(app.view)
    appState.app = app

    const rootContainer = app.stage

    const background = PIXI.Sprite.from(getTexture(allTextures.space));
    background.width = WIDTH;
    background.height = HEIGHT;
    background.alpha = 1;
    rootContainer.addChild(background)

    rootContainer.interactive = true
    rootContainer.hitArea = app.screen

    const bullets = initBullet(app, rootContainer)
    rootContainer.addChild(bullets)

    const player = addPlayer(app, rootContainer)
    rootContainer.addChild(player)

    const target = initTarget(app, rootContainer)
    restoreTarget()
    rootContainer.addChild(target)

    return app
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
        playerTick(appState)
        bulletTick()
    })
}

export const initGame = () => {
    loadAssets((progress) => {
        if(progress === 'all'){
            createGameScene()
            initInteraction()
        }
    })
}