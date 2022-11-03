import {XnorGate as GateComp} from '../components/LogicGates/XnorGate'
import {Xnorgate}             from '../classes/LogicGates/Xnorgate/Xnorgate'
import {constant}           from '../utils/functions'
import {DropShadow}         from '../components/DropShadow'
import {xorgate as table}    from '../logicTables'
import {Conduction}          from '../classes/Conduction'
import {Connection}          from '../components/Connection'
import {signalVelocity}      from '../constants'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'XNOR-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Xnorgate()
const points = [{x: 1630, y: 700}, {x: 1730, y: 700}]
const output = new Conduction(points)


// gate.falseFalse()
// output.startAt(20)

// gate.falseTrue()
// output.startAt(-1000)
// output.signalLength = (1000+242) * signalVelocity

// gate.trueFalse()
// output.startAt(-1000)
// output.signalLength = (1000+242) * signalVelocity

gate.trueTrue()
output.startAt(280)

  ////////////////// 
 /// TRANSFORMS ///
//////////////////

gate.transform = {
  translation : {x: constant(0), y: constant(400)},
  rotation : constant(0),
  scale : constant(1),
}

  /////////////////////// 
 /// SET SECONDARIES ///
///////////////////////

gate.setSecondaries()
output.setSecondaries()

const props = gate.getProps()
const outputProps = output.getProps()

const Scene = () => {
  return (
    <>
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <Connection {...outputProps} />
        <GateComp {...props} />
      </g>
    </>
  )
}

export {Scene, table, title}