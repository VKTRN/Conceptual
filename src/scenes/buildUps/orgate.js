  import {Connection}      from '../../components/Connection'
import {Connection}      from '../../components/Connection'
import {Conduction}      from '../../classes/Conduction'
import {Point}           from '../../classes/Point'
import {getPolyline}     from '../../utils/util'
import                        '../../style.css'

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

const p1  = new Point()
const p2  = new Point()
const p3  = new Point()
const p4  = new Point()
const p5  = new Point()
const p6  = new Point()

const p7  = new Point()
const p8  = new Point()
const p9  = new Point()
const p10  = new Point()
const p11  = new Point()
const p12  = new Point()

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

/// COMPONENT ///

export const Scene = () => {

  return (
    <>
      <Connection {...props1}/>
      {/* <Connection {...props2}/> */}
    </>
  )
}