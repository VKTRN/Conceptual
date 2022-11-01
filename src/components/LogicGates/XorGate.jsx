import {Transform} from '../Transform'
import {Andgate} from '../LogicGateSymbols/Andgate'
import {Notgate} from '../LogicGateSymbols/Notgate'
import {Orgate} from '../LogicGateSymbols/Orgate'
import {Connection} from '../Connection'

export const XorGate = ({andgate1, andgate2, notgate, orgate, conduction1, conduction2, conduction3,conduction4,conduction5,conduction6,conduction7,conduction8, switchOrder, transform = {}}) => {

  // const conductions = switchOrder ? [conduction1,conduction2,conduction3,conduction4] : [conduction1,conduction2,conduction4,conduction3]

  return (
    <g id = 'xorgate'>
      <Transform transform={transform}>
        <Connection {...conduction1}/>
        <Connection {...conduction2}/>
        <Connection {...conduction3}/>
        <Connection {...conduction4}/>
        <Connection {...conduction5}/>
        <Connection {...conduction6}/>
        <Connection {...conduction7}/>
        {/* <Connection {...conduction8}/> */}
        <Andgate {...andgate1}/>
        <Andgate {...andgate2}/>

        <Notgate {...notgate}/>
        <Orgate {...orgate}/>
      </Transform>
    </g>
  ) 
}