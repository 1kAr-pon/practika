import {Sprite} from "../pixi.mjs";
import { getTexture } from "../common/assets.js";
import appConstans from "../common/constans.js";
import { allTextures } from "../common/textures.js";
import { addBullet } from "./bullet.js";
import { targetLenth } from "./targets.js";

let player
let app
let lockTime

export const addPlayer = (currApp, root) => {
    if(player){
        return player
    }
    app = currApp
    player = new Sprite(getTexture(allTextures.heroShipFinal))
    player.name = appConstans.containers.player
    player.anchor.set(0.5)
    player.scale.set(0.4)
    player.helth = targetLenth
    player.position.x = appConstans.size.WIDTH / 2
    player.position.y = appConstans.size.HEIGHT - 200
    return player
}

export const getPlayer = () => player

export const lockPlayer = () => {
    if(lockTime){
        return
    }
    player.locked = true
    lockTime = setTime(() => {
        lockTime = null
        player.locked = false
    }, appConstans.timeouts.playerLock)
}

export const playerShot = () => {
    player.helth = targetLenth
    console.log(player.helth)
    if(!lockTime){
        addBullet({x: player.position.x, y: player.position.y})
    }
}

export const playerTick = (state) => {
    if(lockTime){
        player.alpha = 0.5
    } else {
        player.alpha = 1
    }

    const positionPlayer = player.position.x

    player.position.x = state.mousePosition
    
    if(player.position.x < positionPlayer) {
        player.rotation = -0.3
    } else if(player.position.x > positionPlayer) {
        player.rotation = 0.3
    } else {
        player.rotation = 0.0
    }
}