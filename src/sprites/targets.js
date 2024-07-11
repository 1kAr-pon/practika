import { getTexture } from "../common/assets.js";
import { Container, Sprite } from "../pixi.mjs";
import appConstans from "../common/constans.js";
import { allTextures } from "../common/textures.js";
import { destroySprite, randomIntInterval } from "../common/util.js";
import { addExplosion } from "./explosion.js";
import { resetTarget, targetDestroy} from "../common/events.js";

let app;
let rootContainer;
let targets
let aliveTargets = []
let targetFrames = null
export let targetLenth;

export const initTarget = (currApp, root) => {
    if(!targetFrames){
        targetFrames = [getTexture(allTextures.target1),getTexture(allTextures.target2)];
    }
    targets = new Container();
    targets.name = appConstans.containers.targets;
    app = currApp;
    rootContainer = root;
    return targets;
};

const calculateTargets = () => {
    const result = []
    targets.children.forEach((p) => {
        if(p.alive){
            result.push(p.position.x)
        }
    })
    return result.length
};

let x;
let y;

export const restoreTarget = () => {
    aliveTargets.length = 0;
    x = 30;
    y = 100;
    const removeTarget = [];

    targets.children.forEach((p) => {
        removeTarget.push(p);
    });

    removeTarget.forEach((p) => {
        destroySprite(p)
    });

    let i = 0

    while(x < appConstans.size.WIDTH){
        const frame = targetFrames[randomIntInterval(0, targetFrames.length-1)];
        const target = new Sprite(frame);
        target.anchor.set(0.5,1);
        target.name = i;
        target.scale.set(0.5)
        target.position.x = x;
        target.position.y = y;
        target.alive = true;
        target.destroyMe = function(){
            destroyTarget(this)
        }
        x+=target.width+10;
        targets.addChild(target);
        i++
    }
    resetTarget({count: targets.children.length})
    targetLenth = calculateTargets()
};

export const destroyTarget = (t) => {
    addExplosion({x: t.position.x, y: t.position.y})
    if(t.alive){
        destroySprite(t)
        targetDestroy()
        calculateTargets()
    } else {
        destroySprite(t)
    }
    targetLenth = calculateTargets()
};

export const targetTick = () => {
}


