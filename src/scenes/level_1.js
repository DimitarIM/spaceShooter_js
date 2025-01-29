import k from "../kaplayCtx";
import { makePlayer } from "../entities/player";
import { makeAsteroid } from "../entities/asteroid";

export default function level_1() {
    k.add([k.sprite("level_1-bg"), k.pos(0, 0), k.opacity(0.8)]);

    const spawnAsteroid = () => {
        let randPosXTop = Math.floor(Math.random() * k.width()) + 1;
        let randPosXBottom = Math.floor(Math.random() * k.width()) + 1;
        let randSize = Math.floor(Math.random() * 3) + 1;

        const asteroid = makeAsteroid(k.vec2(randPosXTop, 0), randSize);
        asteroid.onUpdate(() => {
            asteroid.moveTo(k.vec2(randPosXBottom, k.height() + 400), 400);
        })
        const waitTime = k.rand(0.5, 6)
        asteroid.onExitScreen(() => {
            if (asteroid.pos.y > k.height()) k.destroy(asteroid);
        });

        k.wait(waitTime, spawnAsteroid);
    }
    spawnAsteroid();

    const player = makePlayer(k.vec2(k.center().x, k.center().y + 400));

    player.setControls();


}

