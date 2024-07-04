import {AnimatedSprite, Texture, Container, filters} from "../pixi.mjs"; //Потом анимарованный надо будет сделать так {AnimatedSprite, Texture, Container, filters}
import appConstans from "../common/constans.js";
import { allTextures } from "../common/textures.js";
import { getTexture } from "../common/assets.js";

let app
let bullets
let timeoutShot

const bulletTextures = {}

const bulletTypes = ['bullet']

const shotTextures = {}

 const speed = 1

export const initBullet = (currApp, root) => {
    bullets = new Container()
    bullets.name = appConstans.containers.bullets,
    app = currApp
    return bullets
 }

export const clearBullet = () => {
    bullets.children.forEach((b) => {
        bullets.removeChild(b)
        b.destroy({children: true})
    })
 }

 export const addBullet = (coord) => {
    if(timeoutShot){
        return
    }

    const bulletFrame = bulletTypes[0]

    let textures = []
    if(bulletTextures[bulletFrame]){
        textures = bulletTextures[bulletFrame]
    } else {
        for(let i = 0;i<5;i++){
            const texture = Texture.from (`${bulletFrame}${i+1}.png`)
            textures.push(texture)
        }
        bulletTextures[bulletFrame] = textures
    }
    const bullet = new AnimatedSprite(textures)
    const filter = new filters.ColorMatrixFilter()
    bullet.loop = false
    const {matrix} = filter
    matrix[1] = Math.sin(Math.random * 10)
    matrix[2] = Math.cos(Math.random * 10)
    matrix[3] = Math.cos(Math.random * 10)
    matrix[4] = Math.sin(Math.random * 10)
    matrix[5] = Math.sin(Math.random * 10)
    matrix[6] = Math.sin(Math.random * 10)
    bullet.filters = [filter]
    bullet.animationSpeed = 0.2
    bullet.anchor.set(0.5)
    // bullet.scale.set(1.5)
    bullet.position.x = coord.x
    bullet.position.y = coord.y - 10
    bullet.alpha = 1;
    bullets.addChild(bullet)
    bullet.play()
    timeoutShot = setTimeout(() => {
        timeoutShot = null
    }, appConstans.timeouts.shotTime)
    console.log("shoooot")
 } 

 export const deleteOneBullet = (bullet) => {
    bullets.removeChild(bullet)
    bullet.destroy({children: true})
 }

 export const bulletTick = () => {
    const removeShot = []
    bullets.children.forEach((b) => {
        b.position.y -=speed * 2
        if(b.position.y<0){
            removeShot.push(b)
        }
    })
    removeShot.forEach((b) => {
        bullets.removeChild(b)
        b.destroy({children: true})
    })
 }