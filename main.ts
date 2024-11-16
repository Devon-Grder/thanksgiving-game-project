namespace SpriteKind {
    export const Turkey = SpriteKind.create()
}
function SpawnTurkey () {
    for (let index = 0; index <= TurkeyArray.length - 1; index++) {
        TurkeyArray[index].setPosition(80, 60)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cursor.overlapsWith(sprites.create(assets.image`myImage`, SpriteKind.Turkey))) {
        game.showLongText("Click on Feather for Mini-Game", DialogLayout.Bottom)
        SpawnCursor()
    } else if (Cursor.overlapsWith(sprites.create(assets.image`myImage0`, SpriteKind.Turkey))) {
        ClearScreen()
    } else if (Cursor.overlapsWith(sprites.create(assets.image`myImage1`, SpriteKind.Turkey))) {
        ClearScreen()
    } else if (Cursor.overlapsWith(sprites.create(assets.image`myImage2`, SpriteKind.Turkey))) {
        ClearScreen()
    } else if (Cursor.overlapsWith(sprites.create(assets.image`myImage3`, SpriteKind.Turkey))) {
        ClearScreen()
    } else {
        SpawnCursor()
        game.showLongText("Click on Feather for Mini-Game", DialogLayout.Bottom)
    }
})
function SpawnCursor () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    Cursor = sprites.create(img`
        .....f...............
        .....ff..............
        .....f1f.............
        .....f11f............
        .....f111f...........
        .....f1111f..........
        .....f11111f.........
        .....f111111f........
        .....f1111111f.......
        .....f11111111f......
        .....f111111111f.....
        .....f111111fffff....
        .....f111f11f........
        .....f11ff11f........
        .....f1f..f11f.......
        .....ff...f11f.......
        .....f.....f11f......
        ...........f11f......
        ............f11f.....
        ............f11f.....
        .............ff......
        `, SpriteKind.Player)
    Cursor.setPosition(82, 91)
    Cursor.setScale(0.8, ScaleAnchor.Middle)
    controller.moveSprite(Cursor)
}
function ClearScreen () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Turkey)
}
let Cursor: Sprite = null
let TurkeyArray: Sprite[] = []
let TurkeyBody = sprites.create(assets.image`myImage`, SpriteKind.Turkey)
let Feather1 = sprites.create(assets.image`myImage0`, SpriteKind.Turkey)
let Feather2 = sprites.create(assets.image`myImage1`, SpriteKind.Turkey)
let Feather3 = sprites.create(assets.image`myImage2`, SpriteKind.Turkey)
let Feather4 = sprites.create(assets.image`myImage3`, SpriteKind.Turkey)
ClearScreen()
TurkeyArray = [
sprites.create(assets.image`myImage0`, SpriteKind.Turkey),
sprites.create(assets.image`myImage1`, SpriteKind.Turkey),
sprites.create(assets.image`myImage2`, SpriteKind.Turkey),
sprites.create(assets.image`myImage3`, SpriteKind.Turkey),
sprites.create(assets.image`myImage`, SpriteKind.Turkey)
]
SpawnCursor()
SpawnTurkey()
