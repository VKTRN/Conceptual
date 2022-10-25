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
//   .startConductionAt(0)
//   .stopOnFirstTransistor()

/// false true -> false ///

// gate
//   .startInput1At(0)
//   .turnOffInput2()
//   .startConductionAt(40)
//   .stopOnSecondTransistor()

/// true false -> false ///

// gate
//   .turnOffInput1()
//   .startInput2At(0)
//   .startConductionAt(40)
//   .stopOnFirstTransistor()

/// true true -> true ///

// gate
//   .startInput1At(0)
//   .startInput2At(40)
//   .startConductionAt(80)

gate
  .turnOnInput1()
  .turnOnInput2()
  .startFromSecondTransistor()

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