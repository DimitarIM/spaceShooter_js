import k from "../kaplayCtx";
import { makePlayer } from "../entities/player"; 

export default function menu() {
    let SHIP_SPEED = 200;
    const speedIncrease = 200;

    const ambienceSfx = k.play("main-menu_ambience", {volume: 0.02, loop: true});

    k.add([k.sprite("menu-bg"), k.pos(0, 0), k.opacity(0.8)]);
    const gartaguaText = k.add([
        k.text("THE GARTAGUA", { font: "pixelopolis", size: 200, letterSpacing: 18}),
        k.anchor("center"),
        k.pos(k.center().x, 200),
        k.fixed(),
        k.z(100)
    ])
    const spaceText = k.add([
        k.text("Press space to continue", { font: "pixelopolis", size: 60, letterSpacing: 2}),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y + 60),
        k.fixed(),
        k.z(100)
    ])

    const player = makePlayer(k.vec2(k.center().x, k.center().y + 400));
    player.setControls();

    let spacePressed = false;

    k.onKeyPress("space", () => {
        if (spacePressed === false) {
            spacePressed = true;
            player.onUpdate(() => {
                player.move(0, - SHIP_SPEED);
                SHIP_SPEED += speedIncrease;
            })
            gartaguaText.destroy();
            spaceText.destroy();
        }
    });

    player.onExitScreen(() => {
        ambienceSfx.paused = true;
        k.go("level_1");
    });
    
}