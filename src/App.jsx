import {AbsoluteFill}    from 'remotion'
import {Sequence}        from 'remotion'
import {Screen}          from './components/Screen'
import {backgroundColor} from './constants'
import {Scene}           from './scenes/test'

// import {Line} from './classes/Line'

// const line = new Line()

// const points = [
//   {x: 0, y: 0},
//   {x: 100, y: 0},
//   {x: 100, y: 100},
// ]

// line.points                = points
// line.transform.translation = {x: 100, y: 100}
// line.transform.rotation    = 0
// line.transform.scale       = 1
// line.signal.color          = 'yellow'
// line.signal.t0             = 0

// line.setSecondaries()

// console.log(line)

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