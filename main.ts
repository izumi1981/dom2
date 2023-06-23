const div: HTMLDivElement = document.createElement("div");
div.textContent = "DOMのdivです。";
div.style.position = "absolute";
document.body.appendChild(div);

let x: number = 0.0;

function loop(): void {
    requestAnimationFrame(loop);

    div.style.left = x + "px";

    x += 1.0;
}

loop();