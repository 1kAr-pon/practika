import { Assets } from "../pixi.mjs";
import appTextures, {allTextures} from "./textures.js";

// делаем из объекта с путями в массив и проходим его, добавляем в ассеты каждое значение
Object.entries(appTextures).forEach(([key, value]) => {
    Assets.add(key, value)
})

// Map для хранения ресурсов
const textures = new Map()

// загрузка ресурсов, аргумент - колбек при загрузке каждого ресурса; объект с ключами в массив и загружаем все ресурсы - по 2 параметрам: идентификаторы ресурсов и колбек
export const loadAssets = (onProgress) => {
    const keys = Object.entries(allTextures).map(([key, value]) => value)
    Assets.load([...keys], onProgress).then((data) => {
        Object.entries(data).forEach(([key, value]) => {
            textures.set(key, value)
        })
        onProgress('all')
    })
}

//функция для получения текстуры по id
export const getTexture = (id) => {
    if(textures.has(id)){
        return textures.get(id)
    }
    return null
}