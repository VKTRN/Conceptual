import {Transform}  from '../Transform'
import {Polygon}    from '../Polygon'
import {Text}       from '../Text'
import {Line }      from '../Line'
import {Circle}     from '../Circle'

export const Xnorgate = ({points, strokeWidth, signal, fill, circle, text,timeFunction, line, transform = {}}) => {

  return (
    <g id = 'xnorgate'>
      <Transform transform={transform}>
      <Polygon points = {points} strokeWidth = {strokeWidth} fill = {fill} signal = {signal} timeFunction = {timeFunction}/>

        <Circle {...circle} fill = {fill} timeFunction = {timeFunction}/>
        <Line {...line}/>
        <Text {...text} timeFunction = {timeFunction}/>

      </Transform>
    </g>
  )
}