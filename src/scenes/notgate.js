import {NotGate as GateComp} from '../components/LogicGates/NotGate'
import {Notgate}             from '../classes/LogicGates/Notgate/Notgate'
import {constant}            from '../utils/functions'
import {Conduction}          from '../classes/Conduction'
import {Connection}          from '../components/Connection'
import {DropShadow}          from '../components/DropShadow'
import {notgate as table}    from '../logicTables'
import {signalVelocity}      from '../constants'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'NOT-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const points = [{x: 250, y: 590}, {x: 250, y: 500}]

const gate   = new Notgate()
const output = new Conduction(points)


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
output.setSecondaries()


  ///////////// 
 /// CASES ///
/////////////

/// input false, output true ///

gate
  .turnOffInput()
  .startConductionAt(0)
  .stopOnTransistor()

output.startAt(6)

/// input true, output false ///

// gate
//   .startFromTransistor(40)
//   .startInputAt(0)

// output.startAt(-1000)
// output.signalLength = (1000+55) * signalVelocity

  
  ///////////////// 
 /// GET PROPS ///
/////////////////

const props = gate.getProps()
const outputProps = output.getProps()

  /////////////
 /// SCENE ///
/////////////

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