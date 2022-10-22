import {NorGate as GateComp} from '../components/LogicGates/NorGate'
import {Norgate}             from '../classes/LogicGates/Norgate/Norgate'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {norgate as table}    from '../logicTables'


  ///////////// 
 /// TITLE ///
/////////////

const title = 'NOR-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Norgate()

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