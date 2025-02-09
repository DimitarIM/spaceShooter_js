import k from "../kaplayCtx";
import { makePlayer } from "../entities/player";
import { makeAsteroid } from "../entities/asteroid";
import { makeFighter } from "../entities/fighter";

export default function level_1() {
    k.add([k.sprite("level_1-bg"), k.pos(0, 0), k.opacity(0.8)]);

    //Player Logic
    const player = makePlayer(k.vec2(k.center().x, k.center().y + 400));
    player.setControls();
    player.onCollide("enemy", () => {
        k.destroy(player);
        k.go("gameOver");
    })


//Asteroid Logic
    const spawnAsteroid = () => {
        let randPosXTop = Math.floor(Math.random() * k.width()) + 1;
        let randPosXBottom = Math.floor(Math.random() * k.width()) + 1;
        let randSize = Math.floor(Math.random() * 3) + 1;
        let randBool = Math.random() < 0.5;

        let asteroidExplosion = k.add([
            k.sprite("asteroid-explode", { anim: "explode"}),
            k.anchor("center"),
            k.scale(randSize),
            k.opacity(0),
        ])

        let ASTEROID_HEALTH = 100 * randSize;

        const asteroid = makeAsteroid(k.vec2(randPosXTop, 0), randSize);
        asteroid.onUpdate(() => {
            asteroid.moveTo(k.vec2(randPosXBottom, k.height() + 400), 400);
            if (!randBool) asteroid.rotateBy(-1);
            else asteroid.rotateBy(1);
        })

        const waitTime = k.rand(0.5, 6);
        asteroid.onCollide("p_bullet", () => {
            if (ASTEROID_HEALTH - 15 > 0) ASTEROID_HEALTH -= 15;
            else {
                let explodePos = asteroid.pos;
                let explodeAngle = asteroid.angle;
                k.destroy(asteroid);

                asteroidExplosion.pos = explodePos;
                asteroidExplosion.angle = explodeAngle;
                asteroidExplosion.opacity = 1;

                asteroidExplosion.play("explode");
            } 
        })

        asteroid.onExitScreen(() => {
            if (asteroid.pos.y > k.height()) k.destroy(asteroid);
        });

        k.wait(waitTime, spawnAsteroid);
    }
    spawnAsteroid();
//Fighter Logic
const fighter = makeFighter(k.vec2(k.center().x, k.center().y), player)
fighter.startShooting(1);

fighter.onUpdate(()=>{
    fighter.followPlayer();
})
    const spawnFighters = () => {
    }
spawnFighters();
}

