import { utils } from "../pixi.mjs";
import appConstans from "./constans.js";

export const EventHub = new utils.EventEmitter()

export const infoUpdate = (data) => {
    EventHub.emit(appConstans.events.infoUpdate, data)
}

export const restartGame = (data) => {
    EventHub.emit(appConstans.events.restartGame, data)
}

export const gameOver = (data) => {
    EventHub.emit(appConstans.events.gameOver, data)
}

export const targetDestroy = (data) => {
    EventHub.emit(appConstans.events.helthYou, data)
}

export const resetTarget = (data) => {
    EventHub.emit(appConstans.events.resetTarget, data)
}