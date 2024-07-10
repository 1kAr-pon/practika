import * as PIXI from "../pixi.mjs";

export const randomIntInterval = (min,max) => {
    return Math.floor(Math.random() * (max-min+1)+min)
}

export const checkCollis = (obj1, obj2) => {
    if(obj1 && obj2){
    const bound1 = obj1.getBounds()
    const bound2 = obj2.getBounds()

    return bound1.x < bound2.x + bound2.width && 
    bound1.y < bound2.y + bound2.height && 
    bound2.x < bound1.x + bound1.width && 
    bound2.y < bound1.y + bound1.height
    }
    return false;
}

export const destroySprite = (sprite) => {
    sprite.parent.removeChild(sprite);
    sprite.destroy({children: true})
}

export const addToCache = (key, texture) => {
    if (!PIXI.utils.TextureCache[key]) {
        PIXI.utils.TextureCache[key] = texture;
    } else {
        console.warn('Image with key ' + key + ' is already in the cache.');
    }
}