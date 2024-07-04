// константы для всех изображений
export const allTextures = {
    heroShip1: 'heroShip1',
    heroShip2: 'heroShip2',
    heroShipFinal: 'heroShipFinal',
    // bullet1: 'bullet1',
    // bullet2: 'bullet2',
    // bullet3: 'bullet3',
    bullet: 'bullet',
    space: 'space',
    target1: 'target1',
    target2: 'target2' ,
    target3: 'target3',
}

// константа с путями к ресурсам, ключами выступают константы выше
const appTextures = {
    [allTextures.heroShip1]: 'resourse/done/player/player1.png',
    [allTextures.heroShip2]: 'resourse/done/player/player2.png',
    [allTextures.heroShipFinal]: 'resourse/done/player/playerFinal.png',
    // [allTextures.bullet1]: 'resourse/done/bullet/bullet1.png',
    // [allTextures.bullet2]: 'resourse/done/bullet/bullet2.png',
    // [allTextures.bullet3]: 'resourse/done/bullet/bullet3.png',
    [allTextures.bullet]: 'resourse/done/bullet/bullet.json',
    [allTextures.space]: 'resourse/done/space.png',
    [allTextures.target1]: 'resourse/done/object/object.png',
    [allTextures.target2]: 'resourse/done/object/object2.png',
    [allTextures.target3]: 'resourse/done/object/object3.png',
}

export default appTextures