import {Connection} from '../Connection'
import {Line}       from '../Line'
import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'

export const Notgate = ({points, strokeWidth, signal, transform = {}}) => {
  return (
    <Transform transform={transform}>
      <Polygon points = {points} strokeWidth = {strokeWidth} signal = {signal}/>
    </Transform>
  )
}