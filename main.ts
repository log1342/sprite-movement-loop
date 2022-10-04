input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 3; index++) {
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            sprite.move(-1)
        }
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, 1)
            sprite.change(LedSpriteProperty.X, 1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            basic.pause(100)
            sprite.change(LedSpriteProperty.Y, -1)
        }
        basic.pause(100)
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.X, -1)
            sprite.change(LedSpriteProperty.Y, 1)
            basic.pause(100)
        }
        for (let index = 0; index < 4; index++) {
            sprite.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(4, 0)
basic.forever(function () {
	
})
