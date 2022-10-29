import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Text}       from '../Text'

export const Orgate = ({points, strokeWidth, signal, fill, text,timeFunction, transform = {}}) => {

  return (
    <g id = 'orgate'>
      <Transform transform={transform}>
      <Polygon points = {points} strokeWidth = {strokeWidth} fill = {fill} signal = {signal} timeFunction = {timeFunction}/>

        <Text {...text} timeFunction = {timeFunction}/>

      </Transform>
    </g>
  )
}