import { initGame } from "./game.js";
import * as PIXI from "./pixi.mjs"


document.getElementById('startButton').addEventListener('click', starting);
// функция инициализации игры
function starting(){
    var b = document.getElementById("startButton");
    b.remove();
    initGame()
}