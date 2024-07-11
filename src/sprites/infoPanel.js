import appConstans from "../common/constans.js"
import { allTextures } from "../common/textures.js";
import { getTexture } from "../common/assets.js";
import { EventHub, gameOver } from "../common/events.js";
import { Container, Graphics, Sprite, TextStyle, Text } from "../pixi.mjs"

let info
let app

let ufoText

let ufoCount = 0

let musicOff
let musicOffStatus = false

let effectsOff
let effctsOffStatus

const style = new TextStyle({
    fontFamily: 'Ariel',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'],
    stroke: '#4a1850',
    strokeThickness: 5,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: 'round',
})

export const initInfo = (currApp, root) => {
    info = new Container()
    info.name = appConstans.containers.infoPanel

    app = currApp

    const infoPanel = new Container()

    infoPanel.position.x = 20
    infoPanel.position.y = 200

    const grafics = new Graphics()
    grafics.lineStyle(1, 0xff00ff, 1)
    grafics.beginFill(0x650a5a, 0.25)
    grafics.drawRoundedRect(0, 0, 150, 100, 16)
    grafics.endFill()
    infoPanel.addChild(grafics)

    const ufo = new Sprite(getTexture(allTextures.target2))
    ufo.scale.set(0.3)
    ufo.anchor.set(0, 0.5)
    ufo.name = 'ufo'
    ufo.x = 20
    ufo.y = 40

    infoPanel.addChild(ufo)

    ufoText = new Text('0', style)
    ufoText.anchor.set(0.5)
    ufoText.x = 100
    ufoText.y = 40
    ufoText.name = 'ufoText'

    infoPanel.addChild(ufoText)

    info.addChild(infoPanel)
    info.alpha = 0.6

    root.addChild(info)

    return info
}

EventHub.on(appConstans.events.helthYou, (event) => {
    ufoCount -=1
    ufoText.text = `${ufoCount}`
    if(ufoCount === 0){
        gameOver()
    }
})

EventHub.on(appConstans.events.resetTarget, (event) => {
    ufoCount = event.count
    ufoText.text = `${event.count}`
})