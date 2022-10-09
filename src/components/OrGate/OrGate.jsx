import {Connection} from '../Connection'
import {NotGate}    from '../NotGate/NotGate'

export const OrGate = ({conduction1,conduction2,conduction3,conduction4, notgate1, notgate2, transform = {}}) => {

  return (
    <g style = {{transform: transform}}>
      <Connection {...conduction1}/>
      <Connection {...conduction2}/>
      <Connection {...conduction3}/>
      <Connection {...conduction4}/>
      <NotGate {...notgate1}/>
      <NotGate {...notgate2}/>
    </g>
  )
}