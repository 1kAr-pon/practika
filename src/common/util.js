export const randomIntInterval = (min,max) => {
    return Math.floor(Math.random() * (max-min+1)+min)
}

export const checkCollis = (obj1, obj2) => {
    const bound1 = obj1.getBounds()
    const bound2 = obj2.getBounds()

    return bound1.x < bound2.x + bound2.width && 
    bound1.x < bound2.x + bound2.height && 
    bound2.x < bound1.x + bound1.width && 
    bound2.x < bound1.x + bound1.height
}