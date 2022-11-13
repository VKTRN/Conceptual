import {Connection}      from '../../components/Connection'
import {Connection}      from '../../components/Connection'
import {Conduction}      from '../../classes/Conduction'
import {Point}           from '../../classes/Point'
import {getPolyline}     from '../../utils/util'
import                        '../../style.css'

const cx = 1920/2
const cy = 1080/2

const a = 250
const c = 100
const d = 150
const b = 50
const e = 100
const f = 100

const t0 = 0
const t1 = 50
const t2 = 100
const t3 = 150
const t4 = 200

const p1 = new Point()
const p2 = new Point()
const p3 = new Point()
const p4 = new Point()
const p5 = new Point()
const p6 = new Point()

const tr1 = new Point()
const tr2 = new Point()

const in1 = new Point()
const in2 = new Point()

in1.setKeyframe(t0, cx, cy + c    )
in2.setKeyframe(t0, cx, cy + c    )
in2.setKeyframe(t4, cx, cy + c + f)

tr1.setKeyframe(t0, cx    , cy    )
tr1.setKeyframe(t1, cx    , cy    )
tr1.setKeyframe(t2, cx - e, cy    )
tr1.setKeyframe(t3, cx - e, cy + c)
tr2.setKeyframe(t0, cx    , cy    )
tr2.setKeyframe(t1, cx    , cy    )
tr2.setKeyframe(t2, cx + e, cy    )
tr2.setKeyframe(t3, cx + e, cy + c)

p1.setKeyframe(t0, cx    , cy    )
p2.setKeyframe(t0, cx    , cy    )
p3.setKeyframe(t0, cx    , cy    )
p4.setKeyframe(t0, cx    , cy    )
p5.setKeyframe(t0, cx    , cy    )
p6.setKeyframe(t0, cx    , cy    )
p1.setKeyframe(t1, cx - a, cy    )
p2.setKeyframe(t1, cx - d, cy    )
p3.setKeyframe(t1, cx - b, cy    )
p4.setKeyframe(t1, cx + b, cy    )
p5.setKeyframe(t1, cx + d, cy    )
p6.setKeyframe(t1, cx + a, cy    )    
p3.setKeyframe(t3, cx - b, cy + c)
p4.setKeyframe(t3, cx + b, cy + c)

const conductionPoints   = [p1, p2, p3, p4, p5, p6]
const inputPoints        = [in1, in2]
const transistorPoints   = [tr1, tr2]

const conductionTimeline = getPolyline(conductionPoints)
const inputTimeline      = getPolyline(inputPoints)
const transistorTimeline = getPolyline(transistorPoints)

const conduction         = new Conduction(conductionTimeline)
const transistor         = new Conduction(transistorTimeline)
const input              = new Conduction(inputTimeline)

/// CONFIGS ///

conduction.r = 30
conduction.width = 14
conduction.setSecondaries()
conduction.turnOff()

transistor.r = 30
transistor.width = 22
transistor.setSecondaries()
transistor.turnOff()

input.setSecondaries()
input.turnOff()

/// PROPS ///

const props1 = conduction.getProps()
const props2 = transistor.getProps()
const props3 = input.getProps()

/// COMPONENT ///

export const Scene = () => {

  return (
    <>
      <Connection {...props1}/>
      <Connection {...props2}/>
      <Connection {...props3}/>
    </>
  )
}