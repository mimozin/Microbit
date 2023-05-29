input.onButtonPressed(Button.A, function () {
    radio.sendString("Si")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("¿Juegas?")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "¿Juegas?") {
        basic.showString("¿Juegas?")
    } else if (receivedString == "Si") {
        basic.showString("Si")
    } else {
        basic.showString("No")
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("No")
})
radio.setGroup(1)
