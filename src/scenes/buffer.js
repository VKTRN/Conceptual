import {NotGate as GateComp} from '../components/LogicGates/NotGate'
import {Notgate}             from '../classes/LogicGates/Notgate/Notgate'
import {Conduction}          from '../classes/Conduction'
import {Connection}          from '../components/Connection'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {buffer as data}    from '../logicTables'
import {generateTimes}        from '../utils/functions'
import {linearInterpolation}  from '../utils/functions'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'BUFFER'
const t0 = 120

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

// gate
//   .turnOffInput()
//   .startConductionAt(t0)
//   .stopOnTransistor()

// output.turnOff()

// const times = generateTimes(0,90,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

/// input true, output false ///

gate
  .startFromTransistor(40+t0)
  .startInputAt(t0)

output.startAt(71+t0)

const times = generateTimes(0,180,90)
const table = {
  data,
  timeFunction : linearInterpolation(times)
}
  
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