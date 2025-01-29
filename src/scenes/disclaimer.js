import k from "../kaplayCtx"
export default function disclaimer () {
    k.add([
        k.text("DISCLAIMER: All assets used are publicly owned", { font: "pixelopolis", size: 120, letterSpacing: 10}),
        k.anchor("center"),
        k.pos(k.center().x, k.center().y)
    ])
    
    k.onKeyPress(() => {
        k.go("menu");
    })
    k.onMousePress(() => {
        k.go("menu");
    })
}