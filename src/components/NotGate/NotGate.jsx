import {Connection} from '../Connection'
import {Line}       from '../Line'

export const NotGate = ({conduction, input, transistor, transform = {}}) => {
  console.log(transform)
  return (
    <g style = {{transform: transform}}>
      <Connection {...conduction}/>
      <Connection {...input}/>
      <Line       {...transistor}/>
    </g>
  )
}