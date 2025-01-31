import k from "../kaplayCtx";

export function makePlayer (pos) {
    const PLAYER_SPEED = 380;
    const BULLET_SPEED = 1200;
    const player = k.add([
        k.sprite("player"),
        k.area({
            shape: new k.Rect(k.vec2(0), 24, 22),
        }),
        k.anchor("center"),
        k.scale(3),
        k.pos(pos),
        k.offscreen(),
        k.animate(),
        {
            setControls () {
                let playerWeapon = this.children[1];
                let fireLeft = k.loop(0.1 , () => {
                    spawnBullet(k.vec2(this.pos.x - (this.width + 6) / 2, (this.pos.y - this.width / 2) - 20));
                    k.play("player-shot", {volume: 0.01, loop: false});
                });
                let fireRight = k.loop(0.12, () => {
                    spawnBullet(k.vec2(this.pos.x + (this.width + 6) / 2, (this.pos.y - this.width / 2) - 20));
                    k.play("player-shot", {volume: 0.01, loop: false});
                });
                fireLeft.paused = true; 
                fireRight.paused = true;  

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
                    playerWeapon.play("fire");
                    fireLeft.paused = false;
                    fireRight.paused = false;
                })
                k.onButtonRelease("fire", () => {
                    playerWeapon.play("idle");
                    fireLeft.paused = true;
                    fireRight.paused = true;
                })

            },
        },
    ])

    function spawnBullet(p) {
        const bullet = k.add([
            k.sprite("bullet", { anim: "move" }),
            k.area({
                shape: new k.Rect(k.vec2(0), 4, 6)
            }),
            k.anchor("center"),
            k.pos(p),
            k.scale(3),
            k.move(-90, BULLET_SPEED),
            k.offscreen({ destroy: true }),
            "p_bullet",
        ]
        )
        bullet.onCollide("enemy", () => {
            k.destroy(bullet);
        })
    }

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