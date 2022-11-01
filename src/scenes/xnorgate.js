import {XnorGate as GateComp} from '../components/LogicGates/XnorGate'
import {Xnorgate}             from '../classes/LogicGates/Xnorgate/Xnorgate'
import {constant}           from '../utils/functions'
import {DropShadow}         from '../components/DropShadow'
import {xorgate as table}    from '../logicTables'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'XNOR-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Xnorgate()

// gate.falseFalse()
// gate.falseTrue()
// gate.trueFalse()
gate.trueTrue()

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