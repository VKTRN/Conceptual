import {Sequence}            from 'remotion'
import {Screen}              from './components/Screen'
import {Scene, table, title} from './scenes/test'
import {Table}               from './Table'
import {Test}               from './Test'
import './style.css'

export const App = () => {
  
  return (
      <Sequence id = 'App'  from={0}>
        <Screen>
          <Test/>
          <Scene/>
        </Screen>
        {/* <Table data = {table}/> */}
        {/* <div className = 'chapter'>{title}</div> */}
      </Sequence>
  )
}