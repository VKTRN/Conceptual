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

gate
  .startUpperInputAt(0)
  .startLowerInputAt(40)
  .startConductionAt(80)



///////////////// 
/// GET PROPS ///
/////////////////

const props = gate.getProps()

  ///////////// 
 /// SCENE ///
/////////////

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