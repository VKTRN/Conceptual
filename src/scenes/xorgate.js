import {XorGate as GateComp} from '../components/LogicGates/XorGate'
import {Xorgate}             from '../classes/LogicGates/Xorgate/Xorgate'
import {constant}           from '../utils/functions'
import {DropShadow}         from '../components/DropShadow'
import {xorgate as table}    from '../logicTables'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'XOR-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Xorgate()

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

gate.falseTrue()
// gate.trueTrue()

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