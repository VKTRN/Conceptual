import {NorGate as GateComp} from '../components/LogicGates/NorGate'
import {Norgate}             from '../classes/LogicGates/Norgate/Norgate'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {Glow}                from '../components/Glow'
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

gate.tConduction = 0
gate.tInput1 = 20
gate.tInput2 = 50

  ////////////////// 
 /// TRANSFORMS ///
//////////////////

gate.transform = {
  translation : {x: constant(50), y: constant(700)},
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
      <Glow id = 'scene'/>
    </>
  )
}

export {Scene, table, title}