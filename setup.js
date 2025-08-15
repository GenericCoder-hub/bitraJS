export function b(width, height, update) {
    // SETUP CANVAS
    const body = document.querySelector("body"); 
    const canvas = document.createElement("canvas");
    body.appendChild(canvas);
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");

    // LOOP
    requestAnimationFrame(update);

    return ctx; // Returns for main game loop
}

