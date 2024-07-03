import {AnimatedSprite, Texture, Container, filters} from "../pixi.mjs"; //Потом анимарованный надо будет сделать так {AnimatedSprite, Texture, Container, filters}
import { Sprite } from "../pixi.mjs";
import appConstans from "../common/constans.js";
import { allTextures } from "../common/textures.js";
import { getTexture } from "../common/assets.js";

let app
let bullets
let timeoutShot

const shotTextures = {}

const bulletTypes = ['bullet1', 'bullet2', 'bullet3']

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
    const bulletNew = bulletTypes[Math.floor(Math.random()* bulletTypes.length)]
    let textures = []
    if(allTextures[bulletNew]){
        textures = allTextures[bulletNew]
    } else{
        // for(let i = 0; 0<6; i++){
        //     const texture = Texture.from (`${bulletNew} ${i+1}.png`)
        //     textures.push(texture)
        // }
        textures.push(allTextures[bulletNew])
        allTextures[bulletNew] = textures
    }

    const bulletTest = new Sprite(getTexture(bulletNew))

    // const bullet = new AnimatedSprite(textures)
    // const filter = new filters.ColorMatrixFilter()
    // bullet.loop = false
    // const {matrix} = filter
    // matrix[1] = Math.sin(Math.random * 10)
    // matrix[2] = Math.cos(Math.random * 10)
    // matrix[3] = Math.cos(Math.random * 10)
    // matrix[4] = Math.sin(Math.random * 10)
    // matrix[5] = Math.sin(Math.random * 10)
    // matrix[6] = Math.sin(Math.random * 10)
    // bullet.filters = [filter]
    // bullet.animationSpeed = 0.2
    bulletTest.anchor.set(0.5)
    bulletTest.position.x = coord.x
    bulletTest.position.y = coord.y - 10
    bulletTest.alpha = 1;
    // bullets.addChild(bullet)
    // bulletT.play()
    timeoutShot = setTimeout(() => {
        timeoutShot = null
    }, appConstans.timeouts.shotTime)
    console.log("shoooot")
    bullets.addChild(bulletTest)
 } 

 export const deleteOneBullet = (bullet) => {
    bullets.removeChild(bullet)
    bullets.destroy({children: true})
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