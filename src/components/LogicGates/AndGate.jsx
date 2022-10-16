import {NotGate} from '../LogicGates/NotGate'
import {Transform} from '../Transform'
import {LightLayer} from '../LightLayer'

export const AndGate = ({notgate1, notgate2, transform = {}}) => {
  return (
    <Transform transform = {transform}>
      <NotGate {...notgate1}/>
      <NotGate {...notgate2}/>
    </Transform>
  )
} 