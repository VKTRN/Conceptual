  import {Connection}      from '../../components/Connection'
import {Connection}      from '../../components/Connection'
import {Circle}          from '../../components/Circle'
import {Conduction}      from '../../classes/Conduction'
import {TimePoint}           from '../../classes/TimePoint'
import {TimeLine}           from '../../classes/TimeLine'
import {getPolyline}     from '../../utils/util'
import {translate}     from '../../utils/util'
import {lerpPolyline}     from '../../utils/functions'
import {getInterpolationIndex}     from '../../utils/functions'
import {bezier}          from '../../utils/util'
import                        '../../style.css'

const transistorAnimation = () => {

  const p1  = new TimePoint()
  const p2  = new TimePoint()
  const p3  = new TimePoint()
  
  p1.setKeyframe(t0, 0, 0)
  p2.setKeyframe(t0, 0, 0)
  p3.setKeyframe(t0, 0, 0)
  p1.setKeyframe(175, -100, 0)
  p2.setKeyframe(175, 0, 100)
  p3.setKeyframe(175, 100, 0)

  const testPoints = [p1, p2, p3]
  return testPoints
}

const cx = 1920/2
const cy = 1080/2

const t0 = 0
const t1 = 50
const t2 = 125
const t3 = 250
const t4 = 250

const a = 400
const b = 600
const c = 300

const p1  = new TimePoint()
const p2  = new TimePoint()
const p3  = new TimePoint()
const p4  = new TimePoint()
const p5  = new TimePoint()
const p6  = new TimePoint()

const p7  = new TimePoint()
const p8  = new TimePoint()
const p9  = new TimePoint()
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

const timeLine_conductionUp   = new TimeLine(points_conductionUp)
const timeLine_conductionDown = new TimeLine(points_conductionDown)
const timeLine_transistor     = new TimeLine(points_transistor)

timeLine_conductionUp.insert(timeLine_transistor, .45)
timeLine_conductionDown.insert(timeLine_transistor, .55)

const conductionUp            = new Conduction(timeLine_conductionUp.values)
const conductionDown          = new Conduction(timeLine_conductionDown.values)

//////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////


conductionUp.setSecondaries()
conductionDown.setSecondaries()

conductionUp.turnOff()
conductionDown.turnOff()

const props_conductionUp = conductionUp.getProps()
const props_conductionDown = conductionDown.getProps()

/// COMPONENT ///

export const Scene = () => {

  return (
    <>
      <Connection {...props_conductionUp}/>
      <Connection {...props_conductionDown}/>
    </>
  )
}