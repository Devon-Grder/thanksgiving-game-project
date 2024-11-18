namespace SpriteKind {
    export const Turkey = SpriteKind.create()
    export const Cornacopia = SpriteKind.create()
    export const TurkeyFeather1 = SpriteKind.create()
    export const TurkeyFeather2 = SpriteKind.create()
    export const TurkeyFeather3 = SpriteKind.create()
    export const TurkeyFeather4 = SpriteKind.create()
}
function SpawnTurkey () {
    for (let index = 0; index <= TurkeyArray.length - 1; index++) {
        NewTurkey = sprites.create(TurkeyArray[index].image, TurkeyArray[index].kind())
        NewTurkey.setPosition(80, 60)
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cursor.overlapsWith(sprites.create(assets.image`myImage0`, SpriteKind.TurkeyFeather1))) {
        ClearScreen()
        MiniGame1()
        SpawnTurkey()
    } else if (Cursor.overlapsWith(sprites.create(assets.image`myImage1`, SpriteKind.TurkeyFeather2))) {
        ClearScreen()
        MiniGame2()
        SpawnTurkey()
    } else if (Cursor.overlapsWith(sprites.create(assets.image`myImage2`, SpriteKind.TurkeyFeather3))) {
    	
    } else if (Cursor.overlapsWith(sprites.create(assets.image`myImage3`, SpriteKind.TurkeyFeather4))) {
    	
    } else if (Cursor.overlapsWith(sprites.create(assets.image`myImage`, SpriteKind.Turkey))) {
        SpawnCursor()
        game.showLongText("Click on Feather for Mini-Game", DialogLayout.Bottom)
    }
})
function MiniGame3 () {
	
}
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
function MiniGame1 () {
    GuessCornSprite = sprites.create(img`
        ................eeeeeee.......................................................
        .............eeeeeeeeee.......................................................
        .............eeeeeeeeee.......................................................
        .............eeeeeeeeee.......................................................
        ..........eeeeeeeeeeeee.......................................................
        ..........eeeeeeeeeeeee.......................................................
        ..........eeeeeeeeeeeee.......................................................
        .......eeeeeeeeeeeeeeeeeee....................................................
        .......eeeeeeeeeeeeeeeeeee....................................................
        .......eeeeeeeeeeeeeeeeeee....................................................
        .......eeeeeeeeeeeeeeeeeeeeee.................................................
        .......eeeeeeeeeeeeeeeeeeeeee.................................................
        .......eeeeeeeeeeeeeeeeeeeeee.................................................
        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................
        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................
        ....eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee..............................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeee777777eeeeeeeeeeeeeeee777eee.....................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeee777777eeeeeeeeeeeeeeee777eee.....................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeee777777eeeeeeeeeeeeeeee777eee.....................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777774444444444444777555eeee.................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777774444444444444777555eeee.................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777774444444444444777555eeee.................
        .eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee7777774444444444444777555eeee.................
        .eeeeeeeeeeeeeeeeeeeeeeeee7772222222222222444444444444555eeee.........777777..
        .eeeeeeeeeeeeeeeeeeeeeeeee7772222222222222444444444444555eeee.........777777..
        .eeeeeeeeeeeeeeeeeeeeeeeee7772222222222222444444444444555eeee.........777777..
        .eeeeeeeeeeeeeeeeeeeeee77722222222222222222222225554445555555eee...777777777..
        .eeeeeeeeeeeeeeeeeeeeee77722222222222222222222225554445555555eee...777777777..
        .eeeeeeeeeeeeeeeeeeeeee77722222222222222222222225554445555555eee...777777777..
        .eeeeeeeee777eeeeeee44444422222222222222222222225555555554444eee777777777.....
        .eeeeeeeee777eeeeeee44444422222222222222222222225555555554444eee777777777.....
        .eeeeeeeee777eeeeeee44444422222222222222222222225555555554444eee777777777.....
        ....eeeeee777777777755544422222222222222222222227777775554444777777777........
        ....eeeeee777777777755544422222222222222222222227777775554444777777777........
        ....eeeeee777777777755544422222222222222222222227777775554444777777777........
        ....eeeeeeeee777777755555522222222222222222222227777777774444222222...........
        ....eeeeeeeee777777755555522222222222222222222227777777774444222222...........
        ....eeeeeeeee777777755555522222222222222222222227777777774444222222...........
        .......eeeeee777777755555577722222222222222225555555557774444222222...........
        .......eeeeee777777755555577722222222222222225555555557774444222222...........
        .......eeeeee777777755555577722222222222222225555555557774444222222...........
        ..........eeeeee555555577755544477744455555555555555557772222222222777777.....
        ..........eeeeee555555577755544477744455555555555555557772222222222777777.....
        ..........eeeeee555555577755544477744455555555555555557772222222222777777.....
        .............eee555555577755544444444422225555555555552222222222777777777777..
        .............eee555555577755544444444422225555555555552222222222777777777777..
        .............eee555555577755544444444422225555555555552222222222777777777777..
        .............eee555577755544477722222222225555555555552222222777777777777777..
        .............eee555577755544477722222222225555555555552222222777777777777777..
        .............eee555577755544477722222222225555555555552222222777777777777777..
        .............eee555577755544477722222222225555555555552222222777777777777777..
        .............77777775555554444442222222222222444444444eee4444444777777777777..
        .............77777775555554444442222222222222444444444eee4444444777777777777..
        .............77777775555554444442222222222222444444444eee4444444777777777777..
        ................77774444444444444444442222222444444444eee4444444444777777777..
        ................77774444444444444444442222222444444444eee4444444444777777777..
        ................77774444444444444444442222222444444444eee4444444444777777777..
        ................777777744444444444477777774444444444444444444444444444777.....
        ................777777744444444444477777774444444444444444444444444444777.....
        ................777777744444444444477777774444444444444444444444444444777.....
        ....................22222222222222277744444444444444444444444444444444444.....
        ....................22222222222222277744444444444444444444444444444444444.....
        ....................22222222222222277744444444444444444444444444444444444.....
        ....................22222222222222277744444444444444444444444444444444........
        ....................22222222222222277744444444444444444444444444444444........
        ....................22222222222222277744444444444444444444444444444444........
        ................7777777222222222...77744444444444444444444444444444...........
        ................7777777222222222...77744444444444444444444444444444...........
        ................7777777222222222...77744444444444444444444444444444...........
        ....................777777777777...77777774444444444444444444444..............
        ....................777777777777...77777774444444444444444444444..............
        ....................777777777777...77777774444444444444444444444..............
        .............................................4444444444444444.................
        .............................................4444444444444444.................
        .............................................4444444444444444.................
        `, SpriteKind.Cornacopia)
    pause(2000)
    GuessVariable = randint(0, 2)
    while (Player1Guess != GuessVariable || Player2Guess != GuessVariable) {
        GuessVariable = randint(0, 2)
        Player1Guess = game.askForNumber("Player 1 How many fruits are there? 1 or 2", 2)
        if (Player1Guess == GuessVariable) {
            game.splash("Player 1 Wins!")
            break;
        }
        Player2Guess = game.askForNumber("Player 2 How many fruits are there? 1 or 2", 2)
        if (Player2Guess == GuessVariable) {
            game.splash("Player 2 Wins!")
            break;
        }
    }
    ClearScreen()
}
function MiniGame2 () {
    FruitArray = [sprites.create(img`
        . . . 7 . . . . 
        . . . 7 7 . . . 
        . 4 4 e e 4 4 . 
        4 5 4 4 4 4 4 4 
        4 5 4 5 5 4 5 4 
        4 5 4 5 5 4 5 4 
        4 5 e 5 5 4 5 4 
        . 4 e 4 4 e 4 . 
        `, SpriteKind.Food), sprites.create(img`
        . . 7 . 7 . 7 . . 
        . . . 7 7 7 . . . 
        . . 2 7 7 7 2 . . 
        . 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 f 2 2 
        2 2 2 2 2 2 2 f 2 
        2 2 2 2 2 2 f 2 2 
        . 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 . . 
        `, SpriteKind.Food), sprites.create(img`
        . 7 7 . . 4 5 4 
        . . 7 7 4 5 4 5 
        7 7 7 4 5 4 5 4 
        . 7 4 5 4 5 4 . 
        . 7 5 4 5 4 7 . 
        . 7 7 5 4 7 7 7 
        7 f 7 7 7 . . 7 
        7 7 . . . . . . 
        `, SpriteKind.Food)]
    Player2Score = 0
    Player1Score = 0
    info.setScore(0)
    Basket = sprites.create(img`
        . . f f f f f f f f f f f f . . 
        . f . . . . . . . . . . . . f . 
        . f . . . . . . . . . . . . f . 
        . f f f f f f f f f f f f f f . 
        f e e e e e e e e e e e e e e f 
        f e e e e e e e e e e e e e e f 
        f f f f f f f f f f f f f f f f 
        . f e f e f e f e f e f e f f . 
        . . f e f e f e f e f e f f . . 
        . . f f e f e f e f e f e f . . 
        . . f e f e f e f e f e f f . . 
        . . f f e f e f e f e f e f . . 
        . . f e f e f e f e f e f f . . 
        . . f f e f e f e f e f e f . . 
        . . f e f e f e f e f e f f . . 
        . . . f f f f f f f f f f . . . 
        `, SpriteKind.Player)
    controller.moveSprite(Basket, 100, 0)
    Basket.setPosition(70, 100)
    info.startCountdown(15)
    while (info.countdown() != 0) {
        Fruit = sprites.create(FruitArray[randint(0, 2)].image, SpriteKind.Food)
        Fruit.setFlag(SpriteFlag.DestroyOnWall, true)
        Fruit.setVelocity(0, 50)
        pause(200)
    }
    Player1Score = info.score()
    info.setScore(0)
    Basket.setPosition(70, 100)
    info.startCountdown(15)
    while (info.countdown() != 0) {
        Fruit = sprites.create(FruitArray[randint(0, 2)].image, SpriteKind.Food)
        Fruit.setFlag(SpriteFlag.DestroyOnWall, true)
        Fruit.setVelocity(0, 50)
        pause(200)
    }
    Player2Score = info.score()
    if (Player1Score > Player2Score) {
        game.splash("Player 1 Wins!")
    } else if (Player1Score < Player2Score) {
        game.splash("Player 2 Wins!")
    } else {
        game.splash("Tie!")
    }
    ClearScreen()
}
function MiniGame4 () {
	
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(10)
})
function ClearScreen () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.Turkey)
    sprites.destroyAllSpritesOfKind(SpriteKind.TurkeyFeather1)
    sprites.destroyAllSpritesOfKind(SpriteKind.TurkeyFeather2)
    sprites.destroyAllSpritesOfKind(SpriteKind.TurkeyFeather3)
    sprites.destroyAllSpritesOfKind(SpriteKind.TurkeyFeather4)
    sprites.destroyAllSpritesOfKind(SpriteKind.Cornacopia)
}
let Fruit: Sprite = null
let Basket: Sprite = null
let Player1Score = 0
let Player2Score = 0
let FruitArray: Sprite[] = []
let Player2Guess = 0
let Player1Guess = 0
let GuessVariable = 0
let GuessCornSprite: Sprite = null
let Cursor: Sprite = null
let NewTurkey: Sprite = null
let TurkeyArray: Sprite[] = []
TurkeyArray = [
sprites.create(assets.image`myImage0`, SpriteKind.TurkeyFeather1),
sprites.create(assets.image`myImage1`, SpriteKind.TurkeyFeather2),
sprites.create(assets.image`myImage2`, SpriteKind.TurkeyFeather3),
sprites.create(assets.image`myImage3`, SpriteKind.TurkeyFeather4),
sprites.create(assets.image`myImage`, SpriteKind.Turkey)
]
SpawnTurkey()
SpawnCursor()
