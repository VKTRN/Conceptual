import {Connection}      from '../../components/Connection'
import {Connection}      from '../../components/Connection'
import {Conduction}      from '../../classes/Conduction'
import {TimePoint}           from '../../classes/TimePoint'
import {getPolyline}     from '../../utils/util'
import                        '../../style.css'

const cx = 1920/2
const cy = 1080/2

const t0 = 0
const t1 = 50
const t2 = 100
const t3 = 200
const t4 = 250

const p1  = new TimePoint()
const p2  = new TimePoint()
const p3  = new TimePoint()
const p4  = new TimePoint()
const p5  = new TimePoint()
const p6  = new TimePoint()
const p7  = new TimePoint()
const p8  = new TimePoint()
const p9  = new TimePoint()
const p10 = new TimePoint()

const tr1L = new TimePoint()
const tr2L = new TimePoint()
const tr1R = new TimePoint()
const tr2R = new TimePoint()


const in1L = new TimePoint()
const in2L = new TimePoint()
const in1R = new TimePoint()
const in2R = new TimePoint()

in1L.setKeyframe(t0, cx - 250, cy + 100)
in2L.setKeyframe(t0, cx - 250, cy + 100)
in2L.setKeyframe(t4, cx - 250, cy + 200)

in1R.setKeyframe(t0, cx + 250, cy + 100)
in2R.setKeyframe(t0, cx + 250, cy + 100)
in2R.setKeyframe(t4+20, cx + 250, cy + 200)


tr1L.setKeyframe(t0, cx - 250 , cy)
tr1L.setKeyframe(t2, cx - 150, cy)
tr1L.setKeyframe(t3, cx - 150, cy + 100)

tr2L.setKeyframe(t0, cx - 250 , cy)
tr2L.setKeyframe(t2, cx - 350, cy)
tr2L.setKeyframe(t3, cx - 350, cy + 100)


tr1R.setKeyframe(t0, cx + 250 , cy)
tr1R.setKeyframe(t2 + 20, cx + 150, cy)
tr1R.setKeyframe(t3 + 20, cx + 150, cy + 100)

tr2R.setKeyframe(t0, cx + 250 , cy)
tr2R.setKeyframe(t2 + 20, cx + 350, cy)
tr2R.setKeyframe(t3 + 20, cx + 350, cy + 100)

p1.setKeyframe(t0, cx    , cy    )
p2.setKeyframe(t0, cx    , cy    )
p3.setKeyframe(t0, cx    , cy    )
p4.setKeyframe(t0, cx    , cy    )
p5.setKeyframe(t0, cx    , cy    )
p6.setKeyframe(t0, cx    , cy    )
p7.setKeyframe(t0, cx    , cy    )
p8.setKeyframe(t0, cx    , cy    )
p9.setKeyframe(t0, cx    , cy    )
p10.setKeyframe(t0, cx    , cy    )


p1.setKeyframe(t1, cx - 500, cy   )
p2.setKeyframe(t1, cx - 400, cy   )
p3.setKeyframe(t1, cx - 300, cy   )
p4.setKeyframe(t1, cx - 200, cy   )
p5.setKeyframe(t1, cx - 100, cy   )

p6.setKeyframe(t1, cx + 100, cy   )
p7.setKeyframe(t1, cx + 200, cy   )
p8.setKeyframe(t1, cx + 300, cy   )
p9.setKeyframe(t1, cx + 400, cy   )
p10.setKeyframe(t1, cx + 500, cy   )

p3.setKeyframe(t3, cx - 300, cy + 100)
p4.setKeyframe(t3, cx - 200, cy + 100)
p7.setKeyframe(t3 + 20, cx + 200, cy + 100)
p8.setKeyframe(t3 + 20, cx + 300, cy + 100)


const conductionPoints   = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10]
const inputPointsL        = [in1L, in2L]
const inputPointsR        = [in1R, in2R]
const transistorPointsL   = [tr1L, tr2L]
const transistorPointsR   = [tr1R, tr2R]

const conductionTimeline = getPolyline(conductionPoints)
const inputTimelineL      = getPolyline(inputPointsL)
const inputTimelineR      = getPolyline(inputPointsR)
const transistorTimelineL = getPolyline(transistorPointsL)
const transistorTimelineR = getPolyline(transistorPointsR)


const conduction         = new Conduction(conductionTimeline)
const transistorL         = new Conduction(transistorTimelineL)
const transistorR         = new Conduction(transistorTimelineR)
const inputL              = new Conduction(inputTimelineL)
const inputR              = new Conduction(inputTimelineR)

/// CONFIGS ///

conduction.r = 20
conduction.width = 14
conduction.setSecondaries()
conduction.turnOff()

transistorL.r = 20
transistorL.width = 22
transistorL.setSecondaries()
transistorL.turnOff()

transistorR.r = 20
transistorR.width = 22
transistorR.setSecondaries()
transistorR.turnOff()

inputL.setSecondaries()
inputL.turnOff()
inputR.setSecondaries()
inputR.turnOff()


/// PROPS ///

const props1 = conduction.getProps()
const props2 = transistorL.getProps()
const props4 = transistorR.getProps()
const props3 = inputL.getProps()
const props5 = inputR.getProps()

/// COMPONENT ///

export const Scene = () => {

  return (
    <>
      <Connection {...props1}/>
      <Connection {...props2}/>
      <Connection {...props3}/>
      <Connection {...props4}/>
      <Connection {...props5}/>
    </>
  )
}