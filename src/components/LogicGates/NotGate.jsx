import {Connection} from '../Connection'
import {Line}       from '../Line'
import {Transform}  from '../Transform'

export const NotGate = ({conduction, input, transistor, transform = {}}) => {
  return (
    <Transform transform={transform}>
      <Connection {...conduction}/>
      <Connection {...input}/>
      <Line       {...transistor}/>
    </Transform>
  )
}