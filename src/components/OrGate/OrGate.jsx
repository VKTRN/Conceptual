import {Connection} from '../Connection'
import {Line}       from '../Line'
import {NotGate}    from '../NotGate/NotGate'

export const OrGate = ({conduction1,conduction2,conduction3,conduction4, notGate1, notGate2}) => {
  return (
    <>
      <Connection {...conduction1}/>
      <Connection {...conduction2}/>
      <Connection {...conduction3}/>
      <Connection {...conduction4}/>
      <NotGate {...notGate1}/>
      <NotGate {...notGate2}/>
      {/* <Connection {...input}/> */}
      {/* <Connection {...output}/> */}
      {/* <Line       {...transistor}/> */}
    </>
  )
}