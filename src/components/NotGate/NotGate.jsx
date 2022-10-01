import {Connection} from '../Connection'
import {Line}       from '../Line'

export const NotGate = ({conduction, input, transistor}) => {
  console.log(conduction)
  return (
    <>
      <Connection {...conduction}/>
      <Connection {...input}/>
      <Line       {...transistor}/>
    </>
  )
}