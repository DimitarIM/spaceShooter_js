import k from "./kaplayCtx";
import menu from "./scenes/menu"
import level_1 from "./scenes/level_1"

k.loadSprite("level_1-bg", "graphics/level_1-bg.png");

k.loadSprite("player", "graphics/player/player.png");
k.loadSprite("player-engine", "graphics/player/player-engine.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
       fly: { from: 0, to: 2, loop: true, speed: 15 } 
    },
});
k.loadSprite("player-weapon", "graphics/player/player-weapon.png", {
    sliceX: 7,
    sliceY: 1,
    anims: {
        idle: { from: 0, to: 0, loop: true },
        fire: { from: 1, to: 6, loop: true, speed: 30 }
    }
});

k.loadSprite("asteroid", "graphics/enemies/asteroid.png");
k.loadSprite("asteroid-explode", "destruction/asteroid-explode.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        destroy: { from: 0, to: 7, loop: false, speed: 30 }
    }
});

k.loadSound("main-menu_ambience", "sounds/main-menu_ambience.mp3");

k.loadFont("pixelopolis", "fonts/pixelopolis9000.ttf");

k.scene("menu", menu)
k.scene("level_1", level_1)
// k.scene("level_2", level_2)
// k.scene("level_3", level_3)
// k.scene("game-over")
// k.scene("game-won")
k.go("menu");