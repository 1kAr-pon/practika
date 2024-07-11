import { Sprite } from "../pixi.mjs";
import { getTexture } from "../common/assets.js";
import appConstants from "../common/constans.js";
import { allTextures } from "../common/textures.js";

let app;
let rootContainer;
let background

export const addBackground = (currApp, root) => {
  app = currApp;
  rootContainer = root

  background = new Sprite(getTexture(allTextures.background1))
  background.name = appConstants.containers.background
  
  background.width = appConstants.size.WIDTH 
  background.height = appConstants.size.HEIGHT

  rootContainer.addChild(background)

  return background;
};

export const setBackground = () => {
  background.texture = getTexture(allTextures[`space`])
}