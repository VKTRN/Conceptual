import {Connection} from '../Connection'
import {NotGate}    from '../LogicGates/NotGate'
import {Transform} from '../Transform'
import {LightLayer} from '../LightLayer'

const style = {
  filter: 'drop-shadow(0px 0px 7px rgb(0 0 0 /1))'
}


export const OrGate = ({conduction1,conduction2,conduction3,conduction4, notgate1, notgate2, switchOrder, transform = {}}) => {

  const conductions = switchOrder ? [conduction1,conduction2,conduction3,conduction4] : [conduction1,conduction2,conduction4,conduction3]

  return (
    <g id = 'orgate'>
      <Transform transform={transform}>
        <Connection {...conductions[0]}/>
        <Connection {...conductions[1]}/>
        <Connection {...conductions[2]}/>
        <Connection {...conductions[3]}/>
        <NotGate {...notgate1}/>
        <NotGate {...notgate2}/>
        <LightLayer/>
      </Transform>
    </g>
  )
}