import {cloneDeep}                    from 'lodash'
import {Notgate as NotgateComp}       from '../components/LogicGateSymbols/Notgate'
import {Notgate}                      from '../classes/LogicGateSymbols/Notgate'
import {Andgate as AndgateComp}       from '../components/LogicGateSymbols/Andgate'
import {Andgate}                      from '../classes/LogicGateSymbols/Andgate'
import {Orgate as OrgateComp}         from '../components/LogicGateSymbols/Orgate'
import {Orgate}                       from '../classes/LogicGateSymbols/Orgate'
import {constant}                     from '../utils/functions'
import {generatePointsX}              from '../utils/util'
import {transformPoints}              from '../utils/util'
import {DropShadow}                   from '../components/DropShadow'
import {Connection as ConnectionComp} from '../components/Connection'
import {Conduction}                   from '../classes/Conduction'
import {yellowStep}                   from '../utils/util'
import {computeTransform}             from '../utils/util'

export const getConductionFromConnectors = function (connector1, connector2, transform1, transform2, offset = .5) {
  const p1_        = transformPoints([connector1], computeTransform(transform1, 0))[0]
  const p2_        = transformPoints([connector2], computeTransform(transform2, 0))[0]
  
  const points     = generatePointsX(p1_, p2_, .5)
  const conduction = new Conduction(points)
  conduction.setSecondaries()
  return conduction
}

const notgate  = new Notgate()
const andgate1 = new Andgate()
const andgate2 = new Andgate()
const orgate   = new Orgate()

  /////////////// 
 /// SIGNALS ///
///////////////

const signal1 = {
  color : yellowStep,
  t0 : 0,
}

const signal2 = {
  color : yellowStep,
  t0 : 118,
}

notgate.signal   = signal1
andgate1.signal  = signal1
andgate2.signal  = signal1
orgate.signal    = signal1

//   //////////////// 
//  / TRANSFORMS ///
// ////////////////

notgate.transform = {
  translation : {x: constant(600), y: constant(200)},
  rotation : constant(0),
  scale : constant(2),
}

andgate1.transform = {
  translation : {x: constant(200), y: constant(200)},
  rotation : constant(0),
  scale : constant(2),
}

andgate2.transform = {
  translation : {x: constant(1600), y: constant(800)},
  rotation : constant(0),
  scale : constant(2),
}

orgate.transform = {
  translation : {x: constant(400), y: constant(600)},
  rotation : constant(0),
  scale : constant(2),
}


  /////////////////////// 
 /// SET SECONDARIES ///
///////////////////////

notgate.setSecondaries()
andgate1.setSecondaries()
andgate2.setSecondaries()
orgate.setSecondaries()

///////////////////////
/// SET CONDUCTIONS ///
///////////////////////

const conduction1 = getConductionFromConnectors(andgate1.connectors.output, notgate.connectors.input, andgate1.transform, notgate.transform)
const conduction2 = getConductionFromConnectors(notgate.connectors.output, andgate2.connectors.input.a, notgate.transform, andgate2.transform)
const conduction3 = getConductionFromConnectors(orgate.connectors.output, andgate2.connectors.input.b, orgate.transform, andgate2.transform)



///////////////// 
/// GET PROPS ///
/////////////////

const notgateProps      = notgate.getProps()
const andgate1Props     = andgate1.getProps()
const andgate2Props     = andgate2.getProps()
const orgateProps       = orgate.getProps()

const conduction1Props = conduction1.getProps()
const conduction2Props = conduction2.getProps()
const conduction3Props = conduction3.getProps()


const Scene = () => {
  return (
    <>
      {/* <Glow       id = 'scene'/> */}
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <ConnectionComp {...conduction1Props}/>
        <ConnectionComp {...conduction2Props}/>
        <ConnectionComp {...conduction3Props}/>
        <NotgateComp {...notgateProps} />
        <AndgateComp {...andgate1Props}/>
        <AndgateComp {...andgate2Props}/>
        <OrgateComp {...orgateProps}/>
        <OrgateComp  {...orgateProps}/>
        {/* <XorgateComp {...xorgateProps}/> */}
        {/* <NorgateComp {...norgateProps}/> */}
        {/* <NandgateComp {...nandgateProps}/> */}
        {/* <XnorgateComp {...xnorgateProps}/> */}
        {/* <BufferComp {...bufferProps}/>  */}
      </g>
    </>
  )
}

export {Scene}












// const p1_        = transformPoints([notgate1.connectors.output], computeTransform(transform1, 0))[0]
// const p2_        = transformPoints([andgate.connectors.input.a], computeTransform(transform2, 0))[0]
// const points     = generatePointsX(p1_, p2_, .5)
// const conduction = new Conduction(points)

// conduction.setSecondaries()
// const conductionProps = conduction.getProps()

// const p3_        = transformPoints([notgate2.connectors.output], computeTransform(transform3, 0))[0]
// const p4_        = transformPoints([andgate.connectors.input.b], computeTransform(transform2, 0))[0]
// const points2     = generatePointsX(p3_, p4_, .5)
// const conduction3 = new Conduction(points2)

// conduction3.setSecondaries()
// const conductionProps2 = conduction3.getProps()