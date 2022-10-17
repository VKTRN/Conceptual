import {Connection} from '../Connection'
import {Line}       from '../Line'
import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Circle}     from '../Circle'
import {Text}       from '../Text'

export const Andgate = ({points, strokeWidth, signal, text, transform = {}}) => {

  return (
    <g id = 'andgate'>
      <Transform transform={transform}>
        <Polygon points = {points} strokeWidth = {strokeWidth} signal = {signal}/>
        <Text {...text}/>
      </Transform>
    </g>
  )
}