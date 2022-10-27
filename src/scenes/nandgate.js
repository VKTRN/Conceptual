import {NandGate as GateComp} from '../components/LogicGates/NandGate'
import {Nandgate}             from '../classes/LogicGates/Nandgate/Nandgate'
import {constant}           from '../utils/functions'
import {DropShadow}         from '../components/DropShadow'
import {nandgate as table}    from '../logicTables'


  ///////////// 
 /// TITLE ///
/////////////

const title = 'NAND-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Nandgate()

  ////////////////// 
 /// TRANSFORMS ///
//////////////////

gate.transform = {
  translation : {x: constant(100), y: constant(700)},
  rotation : constant(-90),
  scale : constant(.8),
}

  /////////////////////// 
 /// SET SECONDARIES ///
///////////////////////

gate.setSecondaries()

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

gate
  .startFirstInputAt(0)
  .startSecondInputAt(40)
  .startConduction1At(80)
  .startConduction2At(260)
  



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