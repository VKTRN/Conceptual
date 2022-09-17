import {Connection} from '../Connection'
import {Line}       from '../Line'

export const NotGate = ({conduction, input, output, transistor}) => {
  return (
    <>
      <Connection {...conduction}/>
      <Connection {...input}/>
      <Connection {...output}/>
      <Line       {...transistor}/>
    </>
  )
}