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
let testPlayer: Sprite = null
scene.setBackgroundImage(assets.image`bg-2`)
testPlayer = sprites.create(assets.image`player-1`, SpriteKind.Player)
testPlayer.setPosition(80, 60)
game.onUpdateInterval(500, function () {
	
})
