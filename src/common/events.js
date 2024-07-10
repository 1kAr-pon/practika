import { utils } from "../pixi.mjs";
import appConstans from "./constans";

export const EventHub = new utils.EventEmitter()

export const infoUpdate = (data) => {
    EventHub.emit(appConstans.events.infoUpdate, data)
}

export const win = (data) => {
    EventHub.emit(appConstans.events.win, data)
}

export const gameOver = (data) => {
    EventHub.emit(appConstans.events.gameOver, data)
}