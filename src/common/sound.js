import { Howl } from "hovler";
import appConstans from "./constans.js";

const allSounds = {}

let flagEffect = false;

const effects = [
    appConstans.sounds.shot,
    appConstans.sounds.explosion,
    appConstans.sounds.background,
]

allSounds[appConstans.sounds.shot] = new Howl({
    src: ['resourse/sound/blaster1.mp3'],
    volume: 0.5,
})

allSounds[appConstans.sounds.explosion] = new Howl({
    src: ['resourse/sound/damage1.mp3'],
    volume: 0.5,
})

allSounds[appConstans.sounds.background] = new Howl({
    src: ['resourse/sound/main_theme2.mp3'],
    volume: 0.5,
})

export const playBackground = () => {
    allSounds[appConstans.sounds.background].play
}

export const play = (id) => {
    if(flagEffect){
        if(effects.indexOf(id) === -1){
            allSounds[id].play()
        } else {
            allSounds[id].play
        }
    }
}

export const pause = (id) => {
    allSounds[id].pause()
}

export const resume = (id) => {
    allSounds[id].resume()
}

export const stop = (id) => {
    allSounds[id].stop()
}

export const muteAll = () => {
    Howler.mute()
}

export const unmuteAll = () => {
    Howler.mute(false)
}

export const muteEffects = () => {
    flagEffect = true
}

export const unmuteEffects = () => {
    flagEffect = false
}