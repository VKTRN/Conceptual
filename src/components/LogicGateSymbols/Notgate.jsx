import {Connection} from '../Connection'
import {Line}       from '../Line'
import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Circle}     from '../Circle'
import {Text}       from '../Text'

export const Notgate = ({points, strokeWidth, signal, circle, text, transform = {}}) => {

  return (
    <g id = 'notgate'>
      <Transform transform={transform}>
        <Polygon points = {points} strokeWidth = {strokeWidth} signal = {signal}/>
        <Circle {...circle}/>
        <Text {...text}/>
      </Transform>
    </g>
  )
}