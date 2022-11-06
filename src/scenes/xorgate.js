import {XorGate as GateComp} from '../components/LogicGates/XorGate'
import {Xorgate}             from '../classes/LogicGates/Xorgate/Xorgate'
import {constant}            from '../utils/functions'
import {Conduction}          from '../classes/Conduction'
import {Connection}          from '../components/Connection'
import {DropShadow}          from '../components/DropShadow'
import {xorgate as data}    from '../logicTables'
import {signalVelocity}      from '../constants'
import {generateTimes}        from '../utils/functions'
import {linearInterpolation}  from '../utils/functions'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'XOR-GATE'
const t0    = 120

  /////////////// 
 /// OBJECTS ///
///////////////

const points = [{x: 1295, y: 600}, {x: 1400, y: 600}]

const gate  = new Xorgate()
const output = new Conduction(points)

////////////////// 
 /// TRANSFORMS ///
//////////////////

gate.transform = {
  translation : {x: constant(100), y: constant(400)},
  rotation : constant(0),
  scale : constant(1),
}

  /////////////////////// 
 /// SET SECONDARIES ///
///////////////////////

gate.setSecondaries()
output.setSecondaries()

// gate.falseFalse(t0)
// output.turnOff()
// const times         = generateTimes(0,120,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

// gate.falseTrue(t0)
// output.startAt(210+t0)
// const times         = generateTimes(0,210,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

// gate.trueFalse(t0)
// output.startAt(210+t0)
// const times         = generateTimes(0,300,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

gate.trueTrue(t0)
output.startAt(-1000)
output.signalLength = (1000+260+t0) * signalVelocity

const times         = generateTimes(0,390,90)
const table = {
  data,
  timeFunction : linearInterpolation(times)
}

  ///////////// 
 /// CASES ///
/////////////

/// false false -> true ///

// gate
//   .startConduction1At(0)
//   .turnOffFirstInput()
//   .turnOffSecondInput()
//   .stopOnFirstTransistor()

/// false true -> true ///

// gate
//   .startSecondInputAt(0)
//   .turnOffFirstInput()
//   .startConduction1At(40)
//   .stopOnFirstTransistor()
//   .startConduction2At(100)
//   .stopOnRightTransistor()

/// true false -> true ///

// gate
//   .startFirstInputAt(0)
//   .turnOffSecondInput()
//   .startConduction1At(40)
//   .stopOnSecondTransistor()
//   .startConduction2At(160)
//   .stopOnRightTransistor()

/// true true -> false ///

// gate
//   .startFirstInputAt(0)
//   .startSecondInputAt(40)
//   .startConduction1At(80)
//   .startConduction2At(260)
  



///////////////// 
/// GET PROPS ///
/////////////////

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