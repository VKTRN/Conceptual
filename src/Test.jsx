import {useCurrentFrame} from 'remotion'
import {Connection} from './components/Connection'
import {linearInterpolation} from './utils/functions'
import {Andgate} from './components/LogicGateSymbols/Andgate'
import {durationInFrames} from './constants'
import './style.css'

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


const a = 400

const p1 = {t:0,   point: {x:400, y:400}}
const p2 = {t:100, point: {x:400+a, y:400}}
const p3 = {t:200, point: {x:400+a, y:400+a}}
const p4 = {t:300, point: {x:400, y:400+a}}
const p5 = {t:400, point: {x:400, y:400}}

const timePoints = [p1, p2, p3, p4, p5]

const positionArray = getPositionArray(timePoints, durationInFrames)































export const Test = (props) => {

  const t = useCurrentFrame()


  return (
    <>
      <circle cx = {positionArray[t].x} cy = {positionArray[t].y} r = '10' fill = 'red' />
    </>
  )
}




