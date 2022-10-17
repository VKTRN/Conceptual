import {AbsoluteFill}    from 'remotion'
import {Sequence}        from 'remotion'
import {Screen}          from './components/Screen'
import {backgroundColor} from './constants'
import {Scene}           from './scenes/test2'
import {Test}            from './Test'
import './style.css'

export const App = () => {
  
  return (
    // <AbsoluteFill style={{...backgroundColor}}>
    // </AbsoluteFill>
      <Sequence from={0}>
        <Screen>
          <Scene/>
          {/* <Test/> */}
        </Screen>
      </Sequence>
  )
}