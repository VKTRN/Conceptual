import {NotGate}    from '../LogicGates/NotGate'
import {OrGate}     from '../LogicGates/OrGate'

export const NorGate = ({notgate, orgate, transform}) => {
  return (
    <g style = {{transform: transform}}>
      <NotGate {...notgate}/>
      <OrGate {...orgate}/>
    </g>
  )
}