import k from "../kaplayCtx";

export function makeAsteroid (pos,size) {

    const asteroid = k.add([
        k.sprite("asteroid"),
        k.area({
            shape: new k.Rect(k.vec2(0), 38, 38),
        }),
        k.anchor("center"),
        k.scale(size),
        k.pos(pos),
        k.animate(),
        k.rotate(Math.floor(Math.random() * 360) + 1),
        k.offscreen(),
        "enemy"
    ]);
    return asteroid;
}