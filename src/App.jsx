import {Sequence}            from 'remotion'
import {Screen}              from './components/Screen'
import {Scene, table, title} from './scenes/norgate'
import {Table}               from './Table'
import './style.css'

export const App = () => {
  
  return (
      <Sequence from={0}>
        <Screen>
          <Scene/>
        </Screen>
        <Table data = {table}/>
        <div className = 'chapter'>{title}</div>
      </Sequence>
  )
}