import {OrGate as GateComp} from '../components/LogicGates/OrGate'
import {Orgate}             from '../classes/LogicGates/Orgate/Orgate'
import {constant}           from '../utils/functions'
import {DropShadow}         from '../components/DropShadow'
import {orgate as table}    from '../logicTables'


  ///////////// 
 /// TITLE ///
/////////////

const title = 'OR-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Orgate()

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
gate.stopOnFirstTransistor()
// gate.stopOnSecondTransistor()

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