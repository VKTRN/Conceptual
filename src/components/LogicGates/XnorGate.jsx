import {Transform}  from '../Transform'
import {Andgate}    from '../LogicGateSymbols/Andgate'
import {Notgate}    from '../LogicGateSymbols/Notgate'
import {Orgate}     from '../LogicGateSymbols/Orgate'
import {Connection} from '../Connection'
import {XorGate}    from './XorGate'

export const XnorGate = ({xorgate, notgate, conduction, transform = {}}) => {
  console.log(conduction)

  return (
    <g id = 'xnor'>
      <Transform transform={transform}>
        <XorGate {...xorgate}/>
        <Connection {...conduction}/>
        <Notgate {...notgate}/>
      </Transform>
    </g>
  ) 
}