import {useCurrentFrame} from 'remotion'
import {Connection} from './components/Connection'
import {linearInterpolation} from './utils/functions'
import {Andgate} from './components/LogicGateSymbols/Andgate'
import {durationInFrames} from './constants'
import './style.css'
import {Connection} from './components/Connection'
import {Conduction} from './classes/Conduction'
import {Point} from './classes/Point'

function sigmoid(t, f0, df, c) {
  return df / (1 + Math.exp(-c*(t-t0))) + f0
}

function getPositionArray(timePoints, duration){
  const T = Array.from({length: duration}, () => ({x: 0, y: 0}))
  
  timePoints.forEach((item, index) => {
    T.fill(item.point, item.t, duration)
  })

  let T2 = T

  for (let i = 0; i < 80; i++) {
    T2 = diffusion(T2)
  }

  return T2

}

function diffusion(array){
  const newArray = array.map((point, index) => {
    if(index === array.length - 1 || index === 0) return point
    return {
      x: (array[index-1].x + array[index].x + array[index+1].x)/3,
      y: (array[index-1].y + array[index].y + array[index+1].y)/3
    }
  })
  return newArray
}
// conductionPoints.push([pa1[i],pa2[i],pa3[i],pa4[i], pa5[i], pa6[i]])

function getPolyline(points){
  const timelines = points.map(point => point.getTimeline())
  console.log("🚀 ~ file: Test.jsx ~ line 42 ~ getPolyline ~ timelines", timelines)
  const timeline = []
  for (let i = 0; i < timelines[0].length; i++) {
    const points = []
    for (let j = 0; j < timelines.length; j++) {
      points.push(timelines[j][i])
    }
    timeline.push(points)
  }
  return timeline
}

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

const cx = 1920/2
const cy = 1080/2


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

// in1.diffuse()
// in2.diffuse()
// tr1.diffuse()
// tr2.diffuse()
// p1.diffuse()
// p2.diffuse()
// p3.diffuse()
// p4.diffuse()
// p5.diffuse()
// p6.diffuse()

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

const props1 = conduction.getProps()
const props2 = transistor.getProps()
const props3 = input.getProps()

/// COMPONENT ///

export const Test = (props) => {

  const t = useCurrentFrame()

  return (
    <>
      <Connection {...props1}/>
      <Connection {...props2}/>
      <Connection {...props3}/>
    </>
  )
}