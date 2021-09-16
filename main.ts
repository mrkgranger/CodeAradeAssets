let gameStart: Sprite = null
let Swatter = sprites.create(assets.image`Fly Swatter`, SpriteKind.Player)
let fly = sprites.create(assets.image`Fly_green`, SpriteKind.Enemy)
scene.setBackgroundColor(1)
gameStart.say("Swat those flys!")
