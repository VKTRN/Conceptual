import {NotGate as GateComp} from '../components/LogicGates/NotGate'
import {Notgate}             from '../classes/LogicGates/Notgate/Notgate'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {notgate as table}    from '../logicTables'


  ///////////// 
 /// TITLE ///
/////////////

const title = 'NOT-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Notgate()

  /////////////// 
 /// SIGNALS ///
///////////////

gate.tInput = 0

  ////////////////// 
 /// TRANSFORMS ///
//////////////////

gate.transform = {
  translation : {x: constant(180), y: constant(600)},
  rotation : constant(-90),
  scale : constant(1.5),
}

  /////////////////////// 
 /// SET SECONDARIES ///
///////////////////////

gate.setSecondaries()

///////////////// 
/// GET PROPS ///
/////////////////

const props      = gate.getProps()

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