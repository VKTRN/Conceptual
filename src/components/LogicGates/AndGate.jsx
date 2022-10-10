import {NotGate} from '../LogicGates/NotGate'

export const AndGate = ({notgate1, notgate2, transform = {}}) => {
  return (
    <g style = {{transform: transform}}>
      <NotGate {...notgate1}/>
      <NotGate {...notgate2}/>
    </g>
  )
} 