import k from "../kaplayCtx";
import { makePlayer } from "../entities/player"; 

export default function menu() {
    k.onKeyPress("space", () => k.go("level_1"));
    k.add([k.sprite("level_1-bg"), k.pos(0, 0), k.opacity(0.8)]);
    k.add([
        k.text("THE GARTAGUA", { font: "pixelopolis", size: 200, letterSpacing: 18}),
        k.anchor("center"),
        k.pos(k.center().x, 200)
    ])

    k.add([
        k.text("Press space to continue", { font: "pixelopolis", size: 60, letterSpacing: 2}),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y + 60)
    ])

    const player = makePlayer(k.vec2(k.center().x, k.center().y + 400));
    player.setControls();
}