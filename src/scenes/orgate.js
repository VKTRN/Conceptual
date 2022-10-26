import {OrGate as GateComp} from '../components/LogicGates/OrGate'
import {Orgate}             from '../classes/LogicGates/Orgate/Orgate'
import {constant}           from '../utils/functions'
import {DropShadow}         from '../components/DropShadow'
import {orgate as table}    from '../logicTables'


  ///////////// 
 /// TITLE ///
/////////////

const title = 'OR-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Orgate()

  ////////////////// 
 /// TRANSFORMS ///
//////////////////

gate.transform = {
  translation : {x: constant(100), y: constant(700)},
  rotation : constant(-90),
  scale : constant(.8),
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
//   .turnOffUpperInput()
//   .turnOffLowerInput()
//   .startConductionAt(0)
//   .stopOnUpperTransistor()
//   .stopOnLowerTransistor()

/// false true -> true ///

// gate
//   .turnOffUpperInput()
//   .startLowerInputAt(0)
//   .startConductionAt(40)
//   .stopOnUpperTransistor()

/// true false -> true ///

// gate
//   .startUpperInputAt(0)
//   .turnOffLowerInput()
//   .startConductionAt(40)
//   .stopOnLowerTransistor()

/// true true -> true ///

gate
  .startUpperInputAt(0)
  .startLowerInputAt(0)
  .startConductionAt(40)



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