import {Andgate as GateComp} from '../components/LogicGateSymbols/Andgate'
import {Andgate}             from '../classes/LogicGateSymbols/Andgate'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {andgate as table}    from '../logicTables'
import {Test} from '../Test'

const title = 'AND-GATE'
const gate  = new Andgate()

gate.transform = {
  translation : {x: constant(700), y: constant(500)},
  rotation : constant(0),
  scale : constant(4),
}

gate.setSecondaries()
const props = gate.getProps()


const Scene = () => {
  return (
    <>
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <Test>
          <GateComp {...props} />
        </Test>
      </g>
    </>
  )
}

export {Scene, table, title}