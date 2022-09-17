import {AbsoluteFill} from 'remotion'
import {Sequence}     from 'remotion'
import {Screen}       from './components/Screen'
import {Scene}        from './scenes/scene1'

export const App = () => {
  
  return (
    <AbsoluteFill style={{backgroundColor: '#5a9de0'}}>
      <Sequence from={0}>
        <Screen>
          <Scene/>
        </Screen>
      </Sequence>
    </AbsoluteFill>
  )
}