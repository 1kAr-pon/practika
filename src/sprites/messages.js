import { Container, Graphics, Text, TextStyle } from "../pixi.mjs"
import appConstants from "../common/constans.js";
import { restartGame } from "../common/events.js";


const style = new TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fontStyle: "normal",
    fontWeight: "bold",
    fill: ["#ffffff", "#00ff99"],
    stroke: "#4a1850",
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
    lineJoin: "round",
  });
  
  const gameOverMessage = new Container();
  gameOverMessage.interactive = true;
  
  const graphics = new Graphics();
  graphics.lineStyle(1, 0xff00ff, 1);
  graphics.beginFill(0x650a5a, 0.25);
  graphics.drawRoundedRect(0, 0, 250, 100, 16);
  graphics.endFill();
  
  gameOverMessage.addChild(graphics);
  
  const text = new Text("Game Over", style);
  text.anchor.set(0.5);
  text.x = 250 / 2;
  text.y = 100 / 2;
  gameOverMessage.addChild(text);
  gameOverMessage.on("pointertap", () => {
    restartGame(appConstants.events.gameOver);
  });
  
  export const getGameOver = () => {
    gameOverMessage.position.x = appConstants.size.WIDTH / 2 - gameOverMessage.width / 2;
    gameOverMessage.position.y = appConstants.size.HEIGHT / 2 - gameOverMessage.height / 2;
    return gameOverMessage;
  };
  