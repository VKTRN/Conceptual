import {OrGate as GateComp} from '../components/LogicGates/OrGate'
import {Orgate}             from '../classes/LogicGates/Orgate/Orgate'
import {constant}           from '../utils/functions'
import {DropShadow}         from '../components/DropShadow'
import {orgate as data}    from '../logicTables'
import {generateTimes}        from '../utils/functions'
import {linearInterpolation}  from '../utils/functions'

const title = 'OR-GATE'
const gate  = new Orgate()
const t0 = 120

gate.transform = {
  translation : {x: constant(100), y: constant(700)},
  rotation : constant(-90),
  scale : constant(.8),
}

gate.setSecondaries()

// gate.falseFalse(t0)
// const times = generateTimes(0,120,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

// gate.falseTrue(t0)
// const times = generateTimes(0,210,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

// gate.trueFalse(t0)
// const times = generateTimes(0,300,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

gate.trueTrue(t0)
const times = generateTimes(0,390,90)
const table = {
  data,
  timeFunction : linearInterpolation(times)
}


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