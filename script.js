import { b } from './bitrajs/index.js';

const ctx = b(800, 600, update);

const bluesquare = {
    x : 50,
    y : 50,
    w : 175,
    h : 75,
    color : 'blue',
    type : 'rect'
}

const text = {
    text : "i am blue square!",
    x : 55,
    y : 90,
    font : ' bold 20px Arial',
    color : 'green',
    type : 'text'
}

const circle = {
    x : 300,
    y : 300,
    radius : 30,
    color : 'yellow',
    type : 'circle'
}

const line = {
    sx : 400,
    sy : 400,
    ex : 500,
    ey : 500,
    w : 10,
    color : 'lightblue',
    type : 'line'
}

const burgerImg = new Image();
burgerImg.src = './bitrajs/imgs/burger.png'
const burger = {
    x : 350,
    y : 350,
    img : burgerImg,
    type : 'img'
}

function update() {
    b.render(ctx, [bluesquare, text, circle, line, burger]);
    requestAnimationFrame(update);
}


