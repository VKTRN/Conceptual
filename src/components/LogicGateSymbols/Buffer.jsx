import {Connection} from '../Connection'
import {Line}       from '../Line'
import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Text}       from '../Text'

export const Buffer = ({points, strokeWidth, signal, fill, text,timeFunction, transform = {}}) => {

  return (
    <g id = 'buffer'>
      <Transform transform={transform}>
      <Polygon points = {points} strokeWidth = {strokeWidth} fill = {fill} signal = {signal} timeFunction = {timeFunction}/>

        <Text {...text} timeFunction = {timeFunction}/>

      </Transform>
    </g>
  )
}