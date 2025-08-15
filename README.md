# bitraJS
a game library to simplify javascript game development
## Basics
heres some basic things to get started with the software.
### Setup
download the software from this repo, and you can get started by editing script.js!

you NEED these lines of code
- import { b } from './bitrajs/index.js';
- const ctx = b(800, 600, update);
replace 800 and 600 with your preferred resolution
you also need an update function with b.render(ctx, [list of objects to render])

### how to define a rectangle

const bluesquare = {
    x : 50,
    y : 50,
    w : 175,
    h : 75,
    color : 'blue',
    type : 'rect'
}

### how to define some text

const text = {
    text : "i am blue square!",
    x : 55,
    y : 90,
    font : ' bold 20px Arial',
    color : 'green',
    type : 'text'
}

### how to define a circle

const circle = {
    x : 300,
    y : 300,
    radius : 30,
    color : 'yellow',
    type : 'circle'
}

### how to define a line

const line = {
    sx : 400,
    sy : 400,
    ex : 500,
    ey : 500,
    w : 10,
    color : 'lightblue',
    type : 'line'
}

### how to define an image

const burgerImg = new Image();
burgerImg.src = './bitrajs/imgs/burger.png'
const burger = {
    x : 350,
    y : 350,
    img : burgerImg,
    type : 'img'
}

## remember that to have something render (as of now) you need to put the variable in the list in b.render

## to have the loop, you need:

requestAnimationFrame(update);
