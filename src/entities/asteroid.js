import k from "../kaplayCtx";

export function makeAsteroid (pos,size) {

    const asteroid = k.add([
        k.sprite("asteroid"),
        k.area(),
        k.anchor("center"),
        k.scale(size),
        k.pos(pos),
        k.offscreen(),
        "enemy"
    ]);
    console.log("asteroid spawned")
    return asteroid;
}