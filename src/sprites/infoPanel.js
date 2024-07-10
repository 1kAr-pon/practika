import { TextStyle } from "../pixi.mjs"

let info
let app

let ufoText
let helthText

let ufoCount = 0
let helthCount = 0

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
    
}