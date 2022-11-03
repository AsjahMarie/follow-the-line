input.onButtonPressed(Button.A, function () {
    while (true) {
        Current_Surface_Reading_L = pins.analogReadPin(AnalogPin.P0)
        Current_Surface_reading_R = pins.analogReadPin(AnalogPin.P2)
        serial.writeLine("" + Current_Surface_Reading_L + "," + Current_Surface_reading_R)
        motobit.enable(MotorPower.On)
        if ((Current_Surface_Reading_L >= White_Line_L - 100 && Current_Surface_reading_R) >= White_Line_R - 100) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
            basic.pause(10)
            Move_RIght = 0
        } else if (Current_Surface_Reading_L >= White_Line_L - 100) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 40)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
            basic.showLeds(`
                # # # . .
                # # . . .
                # . # . .
                . . # . .
                . . # . .
                `)
            basic.pause(10)
            Move_Left = 0
        } else if (Current_Surface_reading_R >= White_Line_R - 100) {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50 + 5)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 40)
            basic.showLeds(`
                . . # # #
                . . . # #
                . . # . #
                . . # . .
                . . # . .
                `)
            basic.pause(10)
            Move_Left = 0
        } else {
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
            basic.pause(15)
            if (Move_Left < 3) {
                motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 40)
                motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50 + Move_Left * 10)
                basic.showLeds(`
                    # # # . .
                    # # . . .
                    # . # . .
                    . . # . .
                    . . # . .
                    `)
                basic.pause(10)
                Move_Left = Move_Left + 1
            } else {
                motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
                motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 40)
                basic.showLeds(`
                    . # # # #
                    . . . # #
                    . . # . #
                    . . # . .
                    . . # . .
                    `)
                basic.pause(10)
                Move_Left = 0
            }
        }
        motobit.enable(MotorPower.Off)
    }
})
input.onButtonPressed(Button.B, function () {
    White_Line_L = pins.analogReadPin(AnalogPin.P0)
    White_Line_R = pins.digitalReadPin(DigitalPin.P2)
    serial.writeLine("White_Line_L_(i.e._Baseline_Value_of_Line_Following_Sensor_on_p0)" + "," + "White_Line_R_(i.e._Baseline_Value_of_Line_Following_Sensor_on_p2)")
    serial.writeLine("" + White_Line_L + "," + White_Line_R)
})
let Move_Left = 0
let Move_RIght = 0
let Current_Surface_reading_R = 0
let Current_Surface_Reading_L = 0
let White_Line_R = 0
let White_Line_L = 0
serial.redirectToUSB()
motobit.invert(Motor.Left, true)
motobit.invert(Motor.Right, true)
motobit.enable(MotorPower.On)
White_Line_L = pins.analogReadPin(AnalogPin.P0)
White_Line_R = pins.analogReadPin(AnalogPin.P2)
serial.writeLine("White_Line_L_(i.e._Baseline_Value_of_Line_Following_Sensor_on_p0)" + "White_Line_R_(i.e._Baseline_Value_of_Line_Following_Sensor_on_p2)")
serial.writeLine("" + White_Line_L + "," + White_Line_R)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    # . . . .
    . # . . .
    # # # . .
    . # . . .
    # . . . .
    `)
basic.showLeds(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # #
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
