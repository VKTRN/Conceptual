import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Text}       from '../Text'
import {Circle}     from '../Circle'

export const Norgate = ({points, strokeWidth, signal, fill, circle, text, transform = {}}) => {

  return (
    <g id = 'norgate'>
      <Transform transform={transform}>
        <Polygon points = {points} strokeWidth = {strokeWidth} fill = {fill} signal = {signal}/>
        <Circle {...circle} fill = {fill}/>
        <Text {...text}/>
      </Transform>
    </g>
  )
} 