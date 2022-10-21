import {AbsoluteFill}    from 'remotion'
import {Sequence}        from 'remotion'
import {Screen}          from './components/Screen'
import {backgroundColor} from './constants'
import {Scene}           from './scenes/test'
import {Test}            from './Test'
import './style.css'

export const App = () => {
  
  return (
    // <AbsoluteFill style={{...backgroundColor}}>
    // </AbsoluteFill>
      <Sequence from={0}>
        <Screen>
          <Scene/>
        </Screen>
        <Test/>
        <div className = 'chapter'>NOT-GATE</div>
      </Sequence>
  )
}