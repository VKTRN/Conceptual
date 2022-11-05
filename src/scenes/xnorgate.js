import {XnorGate as GateComp} from '../components/LogicGates/XnorGate'
import {Xnorgate}             from '../classes/LogicGates/Xnorgate/Xnorgate'
import {constant}             from '../utils/functions'
import {DropShadow}           from '../components/DropShadow'
import {xnorgate as data}     from '../logicTables'
import {Conduction}           from '../classes/Conduction'
import {Connection}           from '../components/Connection'
import {signalVelocity}       from '../constants'
import {generateTimes}        from '../utils/functions'
import {linearInterpolation}  from '../utils/functions'



  ///////////// 
 /// TITLE ///
/////////////

const title = 'XNOR-GATE'
const t0 = 120

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Xnorgate()
const points = [{x: 1630, y: 700}, {x: 1730, y: 700}]
const output = new Conduction(points)

/// false false ///

// gate.falseFalse(t0)
// output.startAt(t0+20)
// const times = generateTimes(0,120,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }


/// false true ///

// gate.falseTrue(t0)
// output.startAt(-1000)
// output.signalLength = (1000+242+t0) * signalVelocity
// const times = generateTimes(0,210,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

/// true false ///

// gate.trueFalse(t0)
// output.startAt(-1000)
// output.signalLength = (1000+242+t0) * signalVelocity
// const times = generateTimes(0,300,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

/// true true ///

gate.trueTrue(t0)
output.startAt(280+t0)
const times = generateTimes(0,390,90)
const table = {
  data,
  timeFunction : linearInterpolation(times)
}


  ////////////////// 
 /// TRANSFORMS ///
//////////////////

gate.transform = {
  translation : {x: constant(0), y: constant(400)},
  rotation : constant(0),
  scale : constant(1),
}

  /////////////////////// 
 /// SET SECONDARIES ///
///////////////////////

gate.setSecondaries()
output.setSecondaries()


const props = gate.getProps()
const outputProps = output.getProps()

const Scene = () => {
  return (
    <>
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <Connection {...outputProps} />
        <GateComp {...props} />
      </g>
    </>
  )
}

export {Scene, table, title}