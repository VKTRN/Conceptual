import {AndGate as GateComp} from '../components/LogicGates/AndGate'
import {Andgate}             from '../classes/LogicGates/Andgate/Andgate'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {andgate as table}    from '../logicTables'


  ///////////// 
 /// TITLE ///
/////////////

const title = 'AND-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Andgate()

  /////////////// 
 /// SIGNALS ///
///////////////

gate.tInput = 0
gate.tStop = 103

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
// gate.stopOnFirstTransistor()
gate.stopOnSecondTransistor()

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