import k from "../kaplayCtx";
export function makeFighter(pos) {
    const fighter = k.add([
        k.sprite("fighter", { anim: "idle", flipY: true }),
            k.area({
                shape: new k.Rect(k.vec2(0), 20, 16)
            }),
            k.anchor("center"),
            k.scale(3),
            k.pos(pos),
            "enemy",
    ])
    return fighter;
}