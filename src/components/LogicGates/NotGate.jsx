import {Connection} from '../Connection'
import {Line}       from '../Line'
import {Transform}  from '../Transform'

const style = {
  clipPath : 'inset(0% -5% 0% -5%)'
}


export const NotGate = ({conduction, input, transistor, transform = {}}) => {
  return (
    <Transform transform={transform} style = {style} id = 'notgate'>
      <Connection {...conduction}/>
      <Connection {...input}/>
      <Line       {...transistor}/>
    </Transform>
  )
}