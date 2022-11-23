import {Sequence}            from 'remotion'
import {Screen}              from './components/Screen'
// import {Scene, table, title} from './scenes/andgate'
import {Table}               from './Table'
import {Scene}               from './scenes/buildUps/orgate'
import './style.css'

export const App = () => {
  
  return (
    <>
      <Sequence id = 'App'  from={0}>
        <Screen>
          {/* <Test/> */}
          <Scene/>
        </Screen>
        {/* <Table {...table}/> */}
        {/* <div className = 'chapter'>{title}</div> */}
      </Sequence>
    </>
  )
}