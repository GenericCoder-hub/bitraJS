export function render(ctx, objects) {
    ctx.clearRect(0, 0, 800, 600);

    
    for (let i = 0; i <= objects.length - 1; i++) {
        if (objects[i].type === 'rect') {
            ctx.fillStyle = objects[i].color;
            ctx.fillRect(objects[i].x, objects[i].y, objects[i].w, objects[i].h);

        } else if (objects[i].type === 'text') {
            ctx.font = objects[i].font;
            ctx.fillStyle = objects[i].color;
            ctx.fillText(objects[i].text, objects[i].x, objects[i].y);

        } else if (objects[i].type === 'circle') {
            ctx.fillStyle = objects[i].color;
            ctx.beginPath();
            ctx.arc(objects[i].x, objects[i].y, objects[i].radius, 0, 2 * Math.PI); // For a full circle
            ctx.fill(); // To fill the circle

        } else if (objects[i].type === 'line') {
            ctx.fillStyle = objects[i].color;
            ctx.lineWidth = objects[i].w;
            ctx.beginPath();
            ctx.moveTo(objects[i].sx, objects[i].sy);
            ctx.lineTo(objects[i].ex, objects[i].ey);
            ctx.stroke();

        } else if (objects[i].type === 'img') {
            ctx.drawImage(objects[i].img, objects[i].x ,objects[i].y);
        }
    }
}
