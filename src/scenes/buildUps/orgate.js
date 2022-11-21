  import {Connection}      from '../../components/Connection'
import {Connection}      from '../../components/Connection'
import {Circle}          from '../../components/Circle'
import {Conduction}      from '../../classes/Conduction'
import {TimePoint}           from '../../classes/TimePoint'
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

/////

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

const conductionPoints   = [p1, p2, p3, p4, p5, p6]
const conductionPoints2  = [p7, p8, p9, p10, p11, p12]
const conductionTimeline = getPolyline(conductionPoints)
const conductionTimeline2 = getPolyline(conductionPoints2)
const conduction         = new Conduction(conductionTimeline)
const conduction2        = new Conduction(conductionTimeline2)

/// CONFIGS ///

conduction.setSecondaries()
conduction2.setSecondaries()
conduction.turnOff()
conduction2.turnOff()

/// PROPS ///

const props1 = conduction.getProps()
const props2 = conduction2.getProps()

const c1 = {x: cx, y: cy}
const s = .55 
const i = getInterpolationIndex(conductionTimeline[conductionTimeline.length-1], s)

const c2 = conductionTimeline.map( points => {
  const p = lerpPolyline(points, s)
  return p
} )


//////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////



const testPoints   = transistorAnimation()
const testTimeline = getPolyline(testPoints)



const newConductionTimeline = conductionTimeline.map( (points, index) => {
  
  const ps = translate(testTimeline[index], c2[index].x, c2[index].y)
  
  points.splice(i,0,...ps)
  return points
} )


const conduction3 = new Conduction(newConductionTimeline)
conduction3.setSecondaries()
conduction3.turnOff()
const props3 = conduction3.getProps()


//////////////////////////////////////////
/////////////////////////////////////////
/////////////////////////////////////////




/// COMPONENT ///

export const Scene = () => {

  return (
    <>
      <Connection {...props3}/>
      <Connection {...props2}/>
      {/* <Circle position = {c2} radius={10} fill="red" /> */}
    </>
  )
}