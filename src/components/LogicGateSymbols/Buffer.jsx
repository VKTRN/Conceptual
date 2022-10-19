import {Connection} from '../Connection'
import {Line}       from '../Line'
import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Text}       from '../Text'

export const Buffer = ({points, strokeWidth, signal, fill, text, transform = {}}) => {

  return (
    <g id = 'buffer'>
      <Transform transform={transform}>
        <Polygon points = {points} strokeWidth = {strokeWidth} signal = {signal} fill = {fill}/>
        <Text {...text}/>
      </Transform>
    </g>
  )
}