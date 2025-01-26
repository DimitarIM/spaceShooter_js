import k from "../kaplayCtx";

export function makePlayer (pos) {
    const PLAYER_SPEED = 380;
    const player = k.add([
        k.sprite("player"),
        k.area(),
        k.anchor("center"),
        k.scale(3),
        k.pos(pos),
        {
            setControls () {
                k.onButtonDown("moveLeft", () => {
                    this.move(-PLAYER_SPEED, 0);
                    if (this.pos.x < 48) this.pos.x = 48;
                    }
                );

                k.onButtonDown("moveRight", () => {
                    this.move(PLAYER_SPEED, 0);
                    if (this.pos.x > k.width() - 48) this.pos.x = k.width() - 48;
                })

                k.onButtonPress("fire", () => {
                    this.children[1].play("fire")
                })
                k.onButtonRelease("fire", () => {
                    this.children[1].play("idle")
                })

            },
        }
    ])

    player.add([
        k.sprite("player-engine", { anim: "fly"}),
        k.anchor("center"),
        k.pos(0, 1.6)
    ]);
    
    player.add([
        k.sprite("player-weapon", { anim: "idle" }),
        k.anchor("center"),
        k.pos(0, -0.8),
    ]);
    return player;
}