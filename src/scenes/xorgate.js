import {XorGate as GateComp} from '../components/LogicGates/XorGate'
import {Xorgate}             from '../classes/LogicGates/Xorgate/Xorgate'
import {constant}            from '../utils/functions'
import {Conduction}          from '../classes/Conduction'
import {Connection}          from '../components/Connection'
import {DropShadow}          from '../components/DropShadow'
import {xorgate as table}    from '../logicTables'
import {signalVelocity}      from '../constants'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'XOR-GATE'

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

// gate.falseFalse()
// output.turnOff()

// gate.falseTrue()
// output.startAt(210)

// gate.trueFalse()
// output.startAt(210)

gate.trueTrue()
output.startAt(-1000)
output.signalLength = (1000+260) * signalVelocity


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