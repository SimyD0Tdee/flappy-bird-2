input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let emptyObstacleY = 0
let ticks = 0
let bird: game.LedSprite = null
let index = 0
let obstacles: game.LedSprite[] = []
bird = game.createSprite(0, 2)
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    music.play(music.stringPlayable("G - G F F E E E ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C - C C D - D E ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F G - G - G G - ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A G A C5 A G - ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A G A - A B B ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("B - B G F G B G ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F F - B G F G - ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G - A A A - C5 A ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("G A C5 - A G G - ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 A D E - E C C ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 D - C D - C C ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("E - C A G - G A ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 E D C C - - - ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("A G A C5 - A - - ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 G A A - G F G ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - A B C5 - B - ", 300), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 - - B B B B - ", 300), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    while (obstacles.length > 0 && obstacles[0].get(LedSpriteProperty.X) == 0) {
        obstacles.removeAt(0).delete()
    }
    for (let obstacle2 of obstacles) {
        obstacle2.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        emptyObstacleY = Math.randomRange(0, 4)
        for (let index2 = 0; index2 <= 4; index2++) {
            if (index2 != emptyObstacleY) {
                obstacles.push(game.createSprite(4, index2))
            }
        }
    }
    for (let obstacle3 of obstacles) {
        if (obstacle3.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && obstacle3.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            basic.showIcon(IconNames.Skull)
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(600)
})
