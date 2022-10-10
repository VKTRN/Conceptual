import {NotGate}    from '../LogicGates/NotGate'
import {OrGate}     from '../LogicGates/OrGate'
import {Transform} from '../Transform'

export const NorGate = ({notgate, orgate, transform}) => {
  return (
    <Transform transform={transform}>
      <NotGate {...notgate}/>
      <OrGate {...orgate}/>
    </Transform>
  )
}