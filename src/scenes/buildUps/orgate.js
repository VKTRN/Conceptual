import {Connection} from '../../components/Connection'
import {Circle}     from '../../components/Circle'
import {Conduction} from '../../classes/Conduction'
import {TimePoint}  from '../../classes/TimePoint'
import {TimeLine}   from '../../classes/TimeLine'
import              '../../style.css'

const transistorAnimation = () => {

  const p1  = new TimePoint()
  const p2  = new TimePoint()
  const p3  = new TimePoint()
  const p4  = new TimePoint()
  
  p1.setKeyframe(t0, 0, 0)
  p2.setKeyframe(t0, 0, 0)
  p3.setKeyframe(t0, 0, 0)
  p4.setKeyframe(t0, 0, 0)

  p1.setKeyframe(175, -150,   0)
  p2.setKeyframe(175,  -50, 100)
  p3.setKeyframe(175,   50, 100)
  p4.setKeyframe(175,  150,   0)


  const testPoints = [p1, p2, p3, p4]
  return testPoints
}

const verticalLineAnimation = (length, t1) => {
  const p1 = new TimePoint()
  const p2 = new TimePoint()

  p1.setKeyframe(t0, 0, 0)
  p2.setKeyframe(t0, 0, 0)

  p1.setKeyframe(t1, 0, 0)
  p2.setKeyframe(t1, 0, length)


  const timeLine = new TimeLine([p1, p2])
  return timeLine
}

const cx = 1920/2
const cy = 1080/2

const t0 = 0
const t1 = 50
const t2 = 125
const t3 = 250
const t4 = 250

const a = 600
const b = 750
const c = 250

const p1   = new TimePoint()
const p2   = new TimePoint()
const p3   = new TimePoint()
const p4   = new TimePoint()
const p5   = new TimePoint()
const p6   = new TimePoint()

const p7   = new TimePoint()
const p8   = new TimePoint()
const p9   = new TimePoint()
const p10  = new TimePoint()
const p11  = new TimePoint()
const p12  = new TimePoint()

p1.setKeyframe(t0, cx, cy)
p2.setKeyframe(t0, cx, cy)
p3.setKeyframe(t0, cx, cy)
p4.setKeyframe(t0, cx, cy)
p5.setKeyframe(t0, cx, cy)
p6.setKeyframe(t0, cx, cy)

p1.setKeyframe(t1, cx - b, cy)
p2.setKeyframe(t1, cx - a, cy)
p3.setKeyframe(t1, cx - a, cy)
p4.setKeyframe(t1, cx + a, cy)
p5.setKeyframe(t1, cx + a, cy)
p6.setKeyframe(t1, cx + b, cy)

p1.setKeyframe(t2, cx - b, cy)
p2.setKeyframe(t2, cx - a, cy)
p3.setKeyframe(t2, cx - a, cy + c)
p4.setKeyframe(t2, cx + a, cy + c)
p5.setKeyframe(t2, cx + a, cy)
p6.setKeyframe(t2, cx + b, cy)

p7.setKeyframe(t0, cx, cy)
p8.setKeyframe(t0, cx, cy)
p9.setKeyframe(t0, cx, cy)
p10.setKeyframe(t0, cx, cy)
p11.setKeyframe(t0, cx, cy)
p12.setKeyframe(t0, cx, cy)

p7.setKeyframe(t1, cx - b, cy)
p8.setKeyframe(t1, cx - a, cy)
p9.setKeyframe(t1, cx - a, cy)
p10.setKeyframe(t1, cx + a, cy)
p11.setKeyframe(t1, cx + a, cy)
p12.setKeyframe(t1, cx + b, cy)

p7.setKeyframe(t2, cx - b, cy)
p8.setKeyframe(t2, cx - a, cy)
p9.setKeyframe(t2, cx - a, cy - c)
p10.setKeyframe(t2, cx + a, cy - c)
p11.setKeyframe(t2, cx + a, cy)
p12.setKeyframe(t2, cx + b, cy)

const points_conductionUp     = [p7, p8, p9, p10, p11, p12]
const points_conductionDown   = [p1, p2, p3, p4, p5, p6]
const points_transistor       = transistorAnimation()
const input1                  = verticalLineAnimation(100, 250)
const input2                  = verticalLineAnimation(100, 250)


const timeLine_conductionUp   = new TimeLine(points_conductionUp)
const timeLine_conductionDown = new TimeLine(points_conductionDown)
const timeLine_transistor     = new TimeLine(points_transistor)

timeLine_conductionUp.insert(timeLine_transistor, .45)
timeLine_conductionDown.insert(timeLine_transistor, .55)

const P1 = timeLine_conductionUp.lerp(.5)
const P2 = timeLine_conductionDown.lerp(.5)
input1.translate(P1)
input2.translate(P2)

const conductionUp   = new Conduction(timeLine_conductionUp.values)
const conductionDown = new Conduction(timeLine_conductionDown.values)
const input1_          = new Conduction(input1.values)
const input2_          = new Conduction(input2.values)


//////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////

conductionUp.setSecondaries()
conductionDown.setSecondaries()
input1_.setSecondaries()
input2_.setSecondaries()

conductionUp.turnOff()
conductionDown.turnOff()
input1_.turnOff()
input2_.turnOff()

const props_conductionUp = conductionUp.getProps()
const props_conductionDown = conductionDown.getProps()
const props_input = input1_.getProps()
const props_input2 = input2_.getProps()

/// COMPONENT ///

export const Scene = () => {

  return (
    <>
      <Connection {...props_conductionUp}/>
      <Connection {...props_conductionDown}/>
      <Connection {...props_input}/>
      <Connection {...props_input2}/>
    </>
  )
}