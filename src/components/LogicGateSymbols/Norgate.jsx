import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Text}       from '../Text'
import {Circle}     from '../Circle'

export const Norgate = ({points, strokeWidth, signal, fill, circle, text,timeFunction, transform = {}}) => {

  return (
    <g id = 'norgate'>
      <Transform transform={transform}>
      <Polygon points = {points} strokeWidth = {strokeWidth} fill = {fill} signal = {signal} timeFunction = {timeFunction}/>

        <Circle {...circle} fill = {fill} timeFunction = {timeFunction}/>
        <Text {...text} timeFunction = {timeFunction}/>

      </Transform>
    </g>
  )
} 