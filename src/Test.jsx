import {useCurrentFrame} from 'remotion'
import {Connection} from './components/Connection'
import {linearInterpolation} from './utils/functions'
import {Andgate} from './components/LogicGateSymbols/Andgate'

export const Test = (props) => {

  const frame = useCurrentFrame()

  return (
    <>
       {...props.children}
    </>
  )
}