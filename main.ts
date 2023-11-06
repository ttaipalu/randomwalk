basic.showIcon(IconNames.Pitchfork)
cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
music.setVolume(41)
let Obstacle_ahead = 0
let Going_ahead = 0
let Changing_direction = 0
let At_border = 0
let Direction2 = 1
let Line_side = 1
basic.forever(function () {
    if (Obstacle_ahead == 1) {
        cuteBot.motors(Direction2 * -20, Direction2 * 20)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    } else if (At_border == 1) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x0000ff)
        cuteBot.motors(Line_side * -20, Line_side * 20)
    } else if (Going_ahead == 1) {
        cuteBot.motors(15, 15)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
    } else if (Changing_direction == 1) {
        cuteBot.motors(Direction2 * -20, Direction2 * 20)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    } else {
        cuteBot.motors(0, 0)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x999999)
    }
})
basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 10) {
        Obstacle_ahead = 1
        music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.InBackground)
        basic.pause(200)
    } else {
        Obstacle_ahead = 0
    }
})
basic.forever(function () {
    Going_ahead = 1
    basic.pause(randint(500, 5000))
    Going_ahead = 0
    Changing_direction = 1
    if (Math.randomBoolean()) {
        Direction2 = 1
    } else {
        Direction2 = -1
    }
    basic.pause(randint(250, 1000))
    Changing_direction = 0
})
basic.forever(function () {
    if (cuteBot.trackSide(cuteBot.MbPins.Left, cuteBot.MbEvents.FindLine) || cuteBot.trackSide(cuteBot.MbPins.Right, cuteBot.MbEvents.FindLine)) {
        At_border = 1
        music.play(music.builtinPlayableSoundEffect(soundExpression.yawn), music.PlaybackMode.InBackground)
        basic.pause(1000)
        At_border = 0
    }
})
