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

  /////////////// 
 /// SIGNALS ///
///////////////

gate.tInput = 0

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