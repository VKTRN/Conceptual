import {NotGate}    from './NotGate'
import {AndGate}     from './AndGate'

export const NandGate = ({notgate, andgate, transform}) => {
  return (
    <g style = {{transform: transform}}>
      <NotGate {...notgate}/>
      <AndGate {...andgate}/>
    </g>
  )
}