import {Connection} from '../Connection'
import {NotGate}    from '../LogicGates/NotGate'
import {Transform} from '../Transform'
import {LightLayer} from '../LightLayer'

const style = {
  filter: 'drop-shadow(0px 0px 7px rgb(0 0 0 /1))'
}


export const OrGate = ({conduction1,conduction2,conduction3,conduction4, notgate1, notgate2, transform = {}}) => {

  return (
      <Transform transform={transform}>
        <Connection {...conduction1}/>
        <Connection {...conduction2}/>
        <Connection {...conduction3}/>
        <Connection {...conduction4}/>
        <NotGate {...notgate1}/>
        <NotGate {...notgate2}/>
        <LightLayer/>
      </Transform>
  )
}