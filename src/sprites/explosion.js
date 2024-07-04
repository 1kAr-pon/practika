import appConstans from "../common/constans.js"
import { AnimatedSprite, Container, Texture } from "../pixi.mjs"

let app
let explosions

const explosionType = ["explosion"]

const explosionFrame = {}

export const initExplosions = (currApp, root) => {
    explosions = new Container()
    explosions.name = appConstans.containers.explosions
    app = currApp
    root.addChild(explosions)
    return explosions
}

export const  addExplosion = (coords) => {
    let textures
    if(explosionFrame[explosionType]){
        textures = explosionFrame[explosionType]
    } else {
        textures = []
        for(let i = 0;i<6;i++){
            const texture = Texture.from(`${explosionType}${i+1}.png`)
            textures.push(texture)
        }
        explosionFrame[explosionType] = textures
    }

    const explosion = new AnimatedSprite(textures)
    explosion.loop = false
    explosion.animationSpeed = 0.2
    explosion.anchor.set(0.5)
    explosion.position.x = coords.x
    explosion.position.y = coords.y
    explosions.addChild(explosion)
    explosion.play()
}

export const explosionTick = () => {
    const removeExplosion = []
    explosions.children.forEach((e) => {
        if(!e.playing){
            removeExplosion.push(e)
        }
    })

    removeExplosion.forEach((e) => {
        explosions.removeChild(e)
        e.destroy({children: true})
    })
}