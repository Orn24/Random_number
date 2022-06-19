input.onGesture(Gesture.ScreenDown, function () {
    dice = 0
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 8)
    music.playTone(988, music.beat(BeatFraction.Whole))
})
let dice = 0
dice = 0
basic.forever(function () {
    basic.showNumber(dice)
})
