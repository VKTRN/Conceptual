import {Connection} from '../Connection'
import {Line}       from '../Line'
import {NotGate}    from '../NotGate/NotGate'

export const OrGate = ({conduction1,conduction2,conduction3,conduction4, notgate1, notgate2}) => {
  
  return (
    <>
      <Connection {...conduction1}/>
      <Connection {...conduction2}/>
      <Connection {...conduction3}/>
      <Connection {...conduction4}/>
      <NotGate {...notgate1}/>
      <NotGate {...notgate2}/>
    </>
  )
}