import k from "../kaplayCtx";
export function makeFighter(pos, player) {
    const BULLET_SPEED = 200;
    const fighter = k.add([
        k.sprite("fighter", { anim: "idle", flipY: true }),
            k.area({
                shape: new k.Rect(k.vec2(0), 20, 16)
            }),
            k.anchor("center"),
            k.scale(3),
            k.pos(pos),
            k.rotate(),
            k.timer(),
            "enemy",
            {
                startShooting(pace) {
                    k.loop(pace, () => {
                        this.play("shoot");
                        spawnBullet(k.vec2(this.pos.x + (this.width - 25) / 2, (this.pos.y - this.width / 2) + 42));
                        k.wait(0.3, () => {
                            spawnBullet(k.vec2(this.pos.x - (this.width - 25) / 2, (this.pos.y - this.width / 2) + 42));
                        })
                    })
                },

                followPlayer() {
                    this.rotateTo(getPlayerLocation(true));
                }
            }
    ])

    function getPlayerLocation(isUsed) {
        //Y = 1080 X = 1920
        let a = player.pos.x - fighter.pos.x;
        let b = player.pos.y - fighter.pos.y;

        let distance = Math.sqrt((a * a) + (b * b));

        //let fInitialYDist = (1080 - (1080 - player.pos.y)) - this.pos.y;

        let xDiff = player.pos.x - fighter.pos.x;

        let sin = xDiff / distance;
        let degrees = Math.asin(sin) * (180 / Math.PI);
        if (isUsed) return -degrees
        return 0;

    }

    function spawnBullet(e) {
        const bullet = k.add([
            k.sprite("bullet_big", { anim: "move", flipY: true }),
            k.area({
                shape: new k.Rect(k.vec2(0), 4, 6)
            }),
            k.anchor("center"),
            k.pos(e),
            k.scale(2.5),
            k.move(fighter.angle + 90, BULLET_SPEED),
            k.offscreen({ destroy: true }),
            "e_bullet",
        ]
        )
        bullet.onCollide("player", () => {
            k.destroy(bullet);
        })
    }

    return fighter;
}