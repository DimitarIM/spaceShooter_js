import k from "./kaplayCtx";
import disclaimer from "./scenes/disclaimer";
import menu from "./scenes/menu";
import level_1 from "./scenes/level_1";
import gameOver from "./scenes/gameOver";

function loadSprites() {
//Backgrounds
k.loadSprite("menu-bg", "graphics/menu-bg.png");
k.loadSprite("level_1-bg", "graphics/level_1-bg.png");
k.loadSprite("level_2-bg", "graphics/level_2-bg.png");
k.loadSprite("level_3-bg", "graphics/level_3-bg.png");

//Projectiles
k.loadSprite("bullet", "graphics/projectiles/bullet.png", {
    sliceX: 2,
    sliceY: 1,
    anims: {
       move: { from: 0, to: 1, loop: true, speed: 30 } 
    },
});
k.loadSprite("bullet_big", "graphics/projectiles/bullet_big.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
       move: { from: 0, to: 3, loop: true, speed: 10 } 
    },
});
k.loadSprite("ray", "graphics/projectiles/ray.png", {
    sliceX: 4,
    sliceY: 1,
    anims: {
       move: { from: 0, to: 3, loop: true, speed: 30 } 
    },
});
k.loadSprite("torpedo", "graphics/projectiles/torpedo.png", {
    sliceX: 3,
    sliceY: 1,
    anims: {
       move: { from: 0, to: 2, loop: true, speed: 30 } 
    },
});
k.loadSprite("wave", "graphics/projectiles/wave.png", {
    sliceX: 6,
    sliceY: 1,
    anims: {
       move: { from: 0, to: 5, loop: true, speed: 30 } 
    },
});

//Entities
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
k.loadSprite("asteroid-explode", "graphics/destruction/asteroid-explode.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        explode: { from: 0, to: 7, loop: false, speed: 30 }
    }
});

k.loadSprite("fighter", "graphics/enemies/fighter.png",{
    sliceX: 9,
    sliceY: 2,
    anims: {
        idle: { from: 0, to: 0, loop: true},
        explode: { from: 0, to: 8, loop: false, speed: 30},
        shoot: { from: 9, to: 14, loop: false, speed: 10}
    }
});

k.loadSprite("frigate", "graphics/enemies/frigate.png");
k.loadSprite("frigate-explode", "graphics/destruction/frigate-explode.png",{
    sliceX: 9,
    sliceY: 1,
    anims: {
        explode: { from: 0, to: 8, loop: false, speed: 30}
    }
});
k.loadSprite("frigate-shield", "graphics/shields/frigate-shield.png",{
    sliceX: 40,
    sliceY: 1,
    anims: {
        shielding: { from: 0, to: 39, loop: true, speed: 30}
    }
});
k.loadSprite("fighter-weapon", "graphics/shooting/fighter-weapon.png",{
    sliceX: 6,
    sliceY: 1,
    anims: {
        shoot: { from: 0, to: 5, loop: false, speed: 30}
    }
});

k.loadSprite("battlecruiser", "graphics/enemies/battlecruiser.png");
k.loadSprite("battlecruiser-explode", "graphics/destruction/battlecruiser-explode.png",{
    sliceX: 14,
    sliceY: 1,
    anims: {
        explode: { from: 0, to: 13, loop: false, speed: 30}
    }
});
k.loadSprite("battlecruiser-weapon", "graphics/shooting/battlecruiser-weapon.png",{
    sliceX: 30,
    sliceY: 1,
    anims: {
        shoot: { from: 0, to: 29, loop: false, speed: 30}
    }
});

k.loadSprite("gartagua", "graphics/enemies/gartagua.png");
k.loadSprite("gartagua-explode", "graphics/destruction/gartagua-explode.png",{
    sliceX: 12,
    sliceY: 1,
    anims: {
        explode: { from: 0, to: 11, loop: false, speed: 60}
    }
});
k.loadSprite("gartagua-shield", "graphics/shields/frigate-shield.png",{
    sliceX: 10,
    sliceY: 1,
    anims: {
        shielding: { from: 0, to: 9, loop: true, speed: 30}
    }
});
k.loadSprite("gartagua-weapon", "graphics/shooting/gartagua-weapon.png",{
    sliceX: 60,
    sliceY: 1,
    anims: {
        shoot: { from: 0, to: 59, loop: false, speed: 30}
    }
});

k.loadSprite("support", "graphics/enemies/support.png");
k.loadSprite("support-explode", "graphics/destruction/support-explode.png",{
    sliceX: 10,
    sliceY: 1,
    anims: {
        explode: { from: 0, to: 9, loop: false, speed: 30}
    }
});

//Sounds
k.loadSound("main-menu_ambience", "sounds/main-menu_ambience.mp3");
k.loadSound("player-shot","sounds/player-shot.mp3");

//Fonts
k.loadFont("pixelopolis", "fonts/pixelopolis9000.ttf");
}

loadSprites();

//Scenes
k.scene("disclaimer", disclaimer);
k.scene("menu", menu);
k.scene("level_1", level_1);
// k.scene("level_2", level_2)
// k.scene("level_3", level_3)
k.scene("gameOver", gameOver);
// k.scene("gameWon")
k.go("disclaimer");