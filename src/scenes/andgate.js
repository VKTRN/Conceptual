import {AndGate as GateComp} from '../components/LogicGates/AndGate'
import {Andgate}             from '../classes/LogicGates/Andgate/Andgate'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {andgate as data}    from '../logicTables'
import {generateTimes}        from '../utils/functions'
import {linearInterpolation}  from '../utils/functions'

  ///////////// 
 /// TITLE ///
/////////////

const title = 'AND-GATE'
const t0 = 120

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Andgate()

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

  ///////////// 
 /// CASES ///
/////////////

/// false false -> false ///

// gate
//   .turnOffInput1()
//   .turnOffInput2()
//   .startConductionAt(t0)
//   .stopOnFirstTransistor()

// const times = generateTimes(0,120,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

/// false true -> false ///

// gate
// .turnOffInput1()
// .stayAtFirstTransistor()
// .startInput2At(t0)
// const times = generateTimes(0,210,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }

/// true false -> false ///

// gate
//   .startFromFirstTransistor(40+t0)
//   .startInput1At(t0)
//   .turnOffInput2()
//   .stopOnSecondTransistor()
// const times = generateTimes(0,300,90)
// const table = {
//   data,
//   timeFunction : linearInterpolation(times)
// }



/// true true -> true ///

gate
  .turnOnInput1()
  .startInput2At(t0)
  .startFromSecondTransistor(40+t0)
const times = generateTimes(0,390,90)
const table = {
  data,
  timeFunction : linearInterpolation(times)
}

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