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
  scale : constant(1),
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
//   .startConduction2At(40)
//   .stopOnRightTransistor()

/// false true -> true ///

// gate
//   .startConduction1At(-1000)
//   .turnOffFirstInput()
//   .startSecondInputAt(0)
//   .stopOnFirstTransistor()
//   .startConduction2At(-1000)
//   .stopOnRightTransistor()

/// true false -> true ///

// gate
//   .startFirstInputAt(0)
//   .startFromFirstTransistor(40)
//   .turnOffSecondInput()
//   .stopOnSecondTransistor()
//   .startConduction2At(-1000)
//   .stopOnRightTransistor()

/// true true -> false ///

gate
  .startFirstInputAt(-1000)
  .startSecondInputAt(0)
  .startFromSecondTransistor(40)
  .startFromRightTransistor(120)
  
  



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