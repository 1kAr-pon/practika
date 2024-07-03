import { getTexture } from "../common/assets.js";
import { Container, Sprite } from "../pixi.mjs";
import appConstans from "../common/constans.js";
import { allTextures } from "../common/textures.js";
import { randomIntInterval } from "../common/util.js";

let app;
let rootContainer;
let targets
let aliveTargets = []
let targetFrames = null

export const initTarget = (currApp, root) => {
    if(!targetFrames){
        targetFrames = [getTexture(allTextures.target1),getTexture(allTextures.target2),getTexture(allTextures.target3)];
    }
    targets = new Container();
    targets.name = appConstans.containers.targets;
    app = currApp;
    rootContainer = root;
    return targets;
};

let x = 10
let y = appConstans.size.HEIGHT

const calculateTargets = () => {
    const result = []
    targets.children.forEach((p) => {
        if(p.alive){
            result.push(p.position.x)
        }
    })
};

export const restoreTarget = () => {
    aliveTargets.length = 0;
    x = 30;
    y = appConstans.size.HEIGHT;
    const removeTarget = [];

    targets.children.forEach((p) => {
        removeTarget.push(p);
    });

    removeTarget.forEach((p) => {
        targets.removeChild(p);
        p.destroy({children: true});
    });

    for(let i = 0; i<40; i++){
        const frame = targetFrames[randomIntInterval(0, targetFrames.length-1)];
        const target = new Sprite(frame);
        target.anchor.set(0.5,1);
        target.name = i;
        target.position.x = x;
        target.position.y = y;
        target.alive = true;
        x+=target.width+10;
        targets.addChild(target);
    }
    // calculateTargets()
};

export const destroyTarget = (p) => {
    if(p.alive){
        targets.removeChild(p)
        p.destroy({children: true})
    }
};

export const targetTick = () => {
    
}


