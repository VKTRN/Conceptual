import {NotGate as GateComp} from '../components/LogicGates/NotGate'
import {Notgate}             from '../classes/LogicGates/Notgate/Notgate'
import {Conduction}          from '../classes/Conduction'
import {Connection}          from '../components/Connection'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {buffer as table}    from '../logicTables'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'BUFFER'

  /////////////// 
 /// OBJECTS ///
///////////////

const points = [{x: 860, y: 590}, {x: 860, y: 500}]

const gate  = new Notgate()
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

output.turnOff()

/// input true, output false ///

// gate
//   .startFromTransistor(40)
//   .startInputAt(0)

// output.startAt(71)
  
  ///////////////// 
 /// GET PROPS ///
/////////////////

const props       = gate.getProps()
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