import {NorGate as GateComp} from '../components/LogicGates/NorGate'
import {Norgate}             from '../classes/LogicGates/Norgate/Norgate'
import {constant}            from '../utils/functions'
import {DropShadow}          from '../components/DropShadow'
import {Glow}                from '../components/Glow'
import {norgate as table}    from '../logicTables'


  ///////////// 
 /// TITLE ///
/////////////

const title = 'NOR-GATE'

  /////////////// 
 /// OBJECTS ///
///////////////

const gate  = new Norgate()

  /////////////// 
 /// SIGNALS ///
///////////////

gate.tConduction = 0
gate.tInput1 = 20
gate.tInput2 = 50

  ////////////////// 
 /// TRANSFORMS ///
//////////////////

gate.transform = {
  translation : {x: constant(50), y: constant(700)},
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

// gate.falseFalse()
// gate.falseTrue()
// gate.trueFalse()
gate.trueTrue()


/// false true -> true ///

// gate
//   .turnOffUpperInput()
//   .startLowerInputAt(0)
//   .startConduction1At(40)
//   .stopOnUpperTransistor()
//   .startConduction2At(320)

/// true false -> false ///

// gate
//   .turnOffLowerInput()
//   .startUpperInputAt(0)
//   .startConduction1At(40)
//   .stopOnLowerTransistor()
//   .startConduction2At(320)

/// true true -> false ///
  
// gate
//   .startUpperInputAt(0)
//   .startLowerInputAt(0)
//   .startConduction1At(40)
//   .startConduction2At(320)

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
      <Glow id = 'scene'/>
    </>
  )
}

export {Scene, table, title}