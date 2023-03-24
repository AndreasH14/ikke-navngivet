input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Meh)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
	
})
