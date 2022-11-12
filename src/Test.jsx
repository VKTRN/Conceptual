import {useCurrentFrame} from 'remotion'
import {Connection} from './components/Connection'
import {linearInterpolation} from './utils/functions'
import {Andgate} from './components/LogicGateSymbols/Andgate'
import {durationInFrames} from './constants'
import './style.css'
import {Connection} from './components/Connection'
import {Conduction} from './classes/Conduction'

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

// {x:    0, y:   0},
// {x:    0, y: 100},
// {x: -100, y: 200},
// {x: -100, y: 300},
// {x:    0, y: 400},
// {x:    0, y: 500}

const a = 250
const c = 100
const d = 150
const b = 50
const e = 100
const f = 100

const t1 = 50
const t2 = 100
const t3 = 150
const t4 = 200

const center = {x: 1920/2, y: 1080/2}

const p1 = []
const p2 = []
const p3 = []
const p4 = []
const p5 = []
const p6 = []

const tr1 = []
const tr2 = []

const in1 = []
const in2 = []

in1.push({t: 0, point: {x: center.x, y: center.y + c}})
in1.push({t: t4, point: {x: center.x, y: center.y + c}})

in2.push({t: 0, point: {x: center.x, y: center.y + c}})
in2.push({t: t4, point: {x: center.x, y: center.y + c+f}})

tr1.push({t: 0, point: {x: center.x, y: center.y}})
tr1.push({t: t1, point: {x: center.x, y: center.y}})
tr1.push({t: t2, point: {x: center.x - e, y: center.y}})
tr1.push({t: t3, point: {x: center.x - e, y: center.y + c}})

tr2.push({t: 0, point: {x: center.x, y: center.y}})
tr2.push({t: t1, point: {x: center.x, y: center.y}})
tr2.push({t: t2, point: {x: center.x + e, y: center.y}})
tr2.push({t: t3, point: {x: center.x + e, y: center.y + c}})

p1.push({t:0,   point: {x:center.x, y:center.y}})
p1.push({t:t1, point: {x:center.x - a, y:center.y}})

p2.push({t:0, point: {x:center.x, y:center.y}})
p2.push({t:t1, point: {x:center.x - d, y:center.y}})

p3.push({t:0,   point: {x:center.x, y:center.y}})
p3.push({t:t1, point: {x:center.x - b, y:center.y}})
p3.push({t:t3, point: {x:center.x - b, y:center.y + c}})

p4.push({t:0,   point: {x:center.x, y:center.y}})
p4.push({t:t1, point: {x:center.x + b, y:center.y}})
p4.push({t:t3, point: {x:center.x + b, y:center.y + c}})

p5.push({t:0,   point: {x:center.x, y:center.y}})
p5.push({t:t1, point: {x:center.x + d, y:center.y}})

p6.push({t:0,   point: {x:center.x, y:center.y}})
p6.push({t:t1, point: {x:center.x + a, y:center.y}})


// const positionArray1 = new Array(durationInFrames).fill({x: 50, y: 600})

const pa1 = getPositionArray(p1, durationInFrames)
const pa2 = getPositionArray(p2, durationInFrames)
const pa3 = getPositionArray(p3, durationInFrames)
const pa4 = getPositionArray(p4, durationInFrames)
const pa5 = getPositionArray(p5, durationInFrames)
const pa6 = getPositionArray(p6, durationInFrames)

const ta1 = getPositionArray(tr1, durationInFrames)
const ta2 = getPositionArray(tr2, durationInFrames)

const ia1 = getPositionArray(in1, durationInFrames)
const ia2 = getPositionArray(in2, durationInFrames)

const conductionPoints = []
const transistorPoints = []
const inputPoints      = []

for (let i = 0; i < durationInFrames; i++) {
  conductionPoints.push([pa1[i],pa2[i],pa3[i],pa4[i], pa5[i], pa6[i]])
  transistorPoints.push([ta1[i], ta2[i]])
  inputPoints.push([ia1[i], ia2[i]])
}

const conduction = new Conduction(conductionPoints)
const transistor = new Conduction(transistorPoints)
const input      = new Conduction(inputPoints)


const scale = 2
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

export const Test = (props) => {

  const t = useCurrentFrame()

  return (
    <>
      {/* <circle cx = {positionArray[t].x} cy = {positionArray[t].y} r = '10' fill = 'red' /> */}
      <Connection {...props1}/>
      <Connection {...props2}/>
      <Connection {...props3}/>
    </>
  )
}