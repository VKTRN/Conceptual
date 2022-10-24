import {useCurrentFrame} from 'remotion'
import {Connection} from './components/Connection'
import {linearInterpolation} from './utils/functions'


export const Test = () => {

  const signal = {
    color: 'red',
    t0: 0
  }

  const points = [
    {x: 200, y: 200},
    {x: 400, y: 200},
    {x: 600, y: 700},
    {x: 300, y: 900},
    {x: 1100, y: 1000}
  ]

  const times = [
    {x: 0, y: 0},
    {x: 250, y: 250},
    {x: 500 , y: 0},
  ]

  const timeFunction = linearInterpolation(times)
  console.log(timeFunction)
  
  

  return (
    <Connection points = {points} signal = {signal} timeFunction = {timeFunction}/>
  )
}