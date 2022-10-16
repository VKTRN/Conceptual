import {AbsoluteFill}    from 'remotion'
import {Sequence}        from 'remotion'
import {Screen}          from './components/Screen'
import {backgroundColor} from './constants'
import {Scene}           from './scenes/test'
import {Test}            from './Test'

export const App = () => {
  
  return (
    <AbsoluteFill style={{...backgroundColor}}>
      <Sequence from={0}>
        <Screen>
          <Scene/>
        </Screen>
      </Sequence>
    </AbsoluteFill>
  )
}