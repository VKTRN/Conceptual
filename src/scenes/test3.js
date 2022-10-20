import {Notgate as NotgateComp} from '../components/LogicGateSymbols/Notgate'
import {Notgate}                from '../classes/LogicGateSymbols/Notgate'

import {Andgate as AndgateComp} from '../components/LogicGateSymbols/Andgate'
import {Andgate}                from '../classes/LogicGateSymbols/Andgate'


import {cloneDeep} from 'lodash'
import {constant} from '../utils/functions'
import {generatePointsX} from '../utils/util'
import {transformPoints} from '../utils/util'
import {DropShadow} from '../components/DropShadow'
import {Connection as ConnectionComp} from '../components/Connection'
import {Conduction} from '../classes/Conduction'
import {yellowStep} from '../utils/util'

const computeTransform = (transform, t) => {
  const translation = {
    x : transform.translation.x(t),
    y : transform.translation.y(t),
  }
  const rotation = transform.rotation(t)
  const scale = transform.scale(t)
  return {translation, rotation, scale}
}

const notgate1 = new Notgate()
const notgate2 = new Notgate()
const andgate  = new Andgate()

const signal = {
  color : yellowStep,
  t0 : 0,
}

const signal2 = {
  color : yellowStep,
  t0 : 118,
}

const transform1 = {
  translation : {x: constant(200), y: constant(200)},
  rotation : constant(0),
  scale : constant(2),
}

const transform2 = {
  translation : {x: constant(1200), y: constant(400)},
  rotation : constant(0),
  scale : constant(2),
}

const transform3 = {
  translation : {x: constant(200), y: constant(600)},
  rotation : constant(0),
  scale : constant(2),
}

////////////////////////

notgate1.transform  = cloneDeep(transform1)
notgate2.transform = cloneDeep(transform3)
andgate.transform  = cloneDeep(transform2)

notgate1.signal     = signal
notgate2.signal     = signal
andgate.signal     = signal2

notgate1.setSecondaries()
andgate.setSecondaries()
notgate2.setSecondaries()

const notgateProps1 = notgate1.getProps()
const notgateProps2 = notgate2.getProps()
const andgateProps  = andgate.getProps()


///////////////////////////////////////////

const p1_        = transformPoints([notgate1.connectors.output], computeTransform(transform1, 0))[0]
const p2_        = transformPoints([andgate.connectors.input.a], computeTransform(transform2, 0))[0]
const points     = generatePointsX(p1_, p2_, .5)
const conduction = new Conduction(points)

conduction.setSecondaries()
const conductionProps = conduction.getProps()

const p3_        = transformPoints([notgate2.connectors.output], computeTransform(transform3, 0))[0]
const p4_        = transformPoints([andgate.connectors.input.b], computeTransform(transform2, 0))[0]
const points2     = generatePointsX(p3_, p4_, .5)
const conduction3 = new Conduction(points2)

conduction3.setSecondaries()
const conductionProps2 = conduction3.getProps()

///////////////////////////////////////////

const Scene = () => {
  return (
    <>
      {/* <Glow       id = 'scene'/> */}
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <ConnectionComp {...conductionProps}/>
        <ConnectionComp {...conductionProps2}/>
        <NotgateComp {...notgateProps1} />
        <NotgateComp {...notgateProps2} />
        <AndgateComp {...andgateProps}/>
        {/* <OrgateComp  {...orgateProps}/> */}
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