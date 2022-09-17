import {Connection} from '../Connection'
import {Line}       from '../Line'

export const AndGate = ({conduction, input1, input2, transistor1, transistor2}) => {
  return (
    <>
      <Connection {...conduction}/>
      <Connection {...input1}/>
      <Connection {...input2}/>
      <Line       {...transistor1}/>
      <Line       {...transistor2}/>
    </>
  )
}