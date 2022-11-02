import {useCurrentFrame} from 'remotion'
import {Connection} from './components/Connection'
import {linearInterpolation} from './utils/functions'
import {Andgate} from './components/LogicGateSymbols/Andgate'
import './style.css'


export const Test = (props) => {

  const frame = useCurrentFrame()

  return (
    <g className = 'transformation-effect'>
       {...props.children}
    </g>
  )
}