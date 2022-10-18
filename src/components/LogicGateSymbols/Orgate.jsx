import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Text}       from '../Text'

export const Orgate = ({points, strokeWidth, signal, fill, text, transform = {}}) => {

  return (
    <g id = 'orgate'>
      <Transform transform={transform}>
        <Polygon points = {points} strokeWidth = {strokeWidth} fill = {fill} signal = {signal}/>
        <Text {...text}/>
      </Transform>
    </g>
  )
}