controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    testPlayer.x += 5
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    testPlayer.x += -5
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    testPlayer.y += -5
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    testPlayer.y += 5
})
let mySprite: Sprite = null
let testPlayer: Sprite = null
testPlayer = sprites.create(assets.image`player-1`, SpriteKind.Player)
testPlayer.setPosition(80, 60)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    music.play(music.stringPlayable("B A G F G A B G ", 60), music.PlaybackMode.UntilDone)
})
game.onUpdateInterval(500, function () {
	
})
