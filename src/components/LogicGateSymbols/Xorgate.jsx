import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Text}       from '../Text'
import {Line }      from '../Line'

export const Xorgate = ({points, strokeWidth, signal, fill, text, line,timeFunction, transform = {}}) => {

  return (
    <g id = 'xorgate'>
      <Transform transform={transform}>
      <Polygon points = {points} strokeWidth = {strokeWidth} fill = {fill} signal = {signal} timeFunction = {timeFunction}/>

        <Line {...line}/>
        <Text {...text} timeFunction = {timeFunction}/>

      </Transform>
    </g>
  )
}