export let c = document.getElementById('myCanvas');
export let ctx = c.getContext('2d');

export function getImage(src) {
    im = new Image();
    im.src = src;
    return im;
}

export function renderImage(src, x, y, scale) {
    let im = new Image();
    im.src = src;
    
    im.onload = () => {
        ctx.drawImage(im, x, y, scale * im.width, scale * im.height);
    }
}
export function addFish(fish) {
    renderImage(fish.src, fish.x, fish.y, 0.2);
    fish.move();
}


