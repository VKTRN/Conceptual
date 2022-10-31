import {OrGate as GateComp} from '../components/LogicGates/OrGate'
import {Orgate}             from '../classes/LogicGates/Orgate/Orgate'
import {constant}           from '../utils/functions'
import {DropShadow}         from '../components/DropShadow'
import {orgate as table}    from '../logicTables'

const title = 'OR-GATE'
const gate  = new Orgate()

gate.transform = {
  translation : {x: constant(100), y: constant(700)},
  rotation : constant(-90),
  scale : constant(.8),
}

gate.setSecondaries()

// gate.falseFalse()
// gate.falseTrue()
gate.trueFalse()
// gate.trueTrue()

const props = gate.getProps()

const Scene = () => {
  return (
    <>
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <GateComp {...props} />
      </g>
    </>
  )
}

export {Scene, table, title}