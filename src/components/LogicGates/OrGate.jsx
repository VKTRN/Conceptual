import {Connection} from '../Connection'
import {NotGate}    from '../LogicGates/NotGate'
import {Transform} from '../Transform'

export const OrGate = ({conduction1,conduction2,conduction3,conduction4, notgate1, notgate2, transform = {}}) => {

  return (
    <Transform transform={transform}>
      <Connection {...conduction1}/>
      <Connection {...conduction2}/>
      <Connection {...conduction3}/>
      <Connection {...conduction4}/>
      <NotGate {...notgate1}/>
      <NotGate {...notgate2}/>
    </Transform>
  )
}