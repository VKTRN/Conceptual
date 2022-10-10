import {NotGate}   from './NotGate'
import {AndGate}   from './AndGate'
import {Transform} from '../Transform'

export const NandGate = ({notgate, andgate, transform}) => {
  return (
    <Transform transform = {transform}>
      <NotGate {...notgate}/>
      <AndGate {...andgate}/>
    </Transform>
    
  )
}    