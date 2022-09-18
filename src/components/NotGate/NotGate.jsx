import {Connection} from '../Connection'
import {Line}       from '../Line'

export const NotGate = ({conduction, input, transistor}) => {
  return (
    <>
      <Connection {...conduction}/>
      <Connection {...input}/>
      <Line       {...transistor}/>
    </>
  )
}