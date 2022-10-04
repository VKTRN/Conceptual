import {AbsoluteFill}    from 'remotion'
import {Sequence}        from 'remotion'
import {Screen}          from './components/Screen'
import {backgroundColor} from './constants'
import {Scene}           from './scenes/test'

export const App = () => {
  
  return (
    <AbsoluteFill style={{backgroundColor: backgroundColor}}>
      <Sequence from={0}>
        <Screen>
          <Scene/>
        </Screen>
      </Sequence>
    </AbsoluteFill>
  )
}