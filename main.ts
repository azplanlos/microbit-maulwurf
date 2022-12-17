let start = 0
let stop = 0
let m = 0
let tm = TM1638.create(
DigitalPin.P1,
DigitalPin.P0,
DigitalPin.P2,
7,
8
)
let p = 0
tm.showNumber(0)
basic.forever(function () {
    m = randint(1, 8)
    stop = randint(1, 10)
    start = input.runningTime()
    while (tm.readButtons() == 0 && input.runningTime() < start + stop * 1000) {
    	
    }
    start = input.runningTime()
    stop = 9
    if (tm.readButtons() == 0) {
        tm.setLed(m, true)
        while (tm.readButtons() == 0 && input.runningTime() < start + stop * 1000) {
        	
        }
        if (tm.buttonPressed(m)) {
            p += 1
            music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.OnceInBackground)
        } else {
            p += -1
        }
        tm.setLed(m, false)
        if (p < 0) {
            p = 0
        }
        tm.showNumber(p)
    }
})
