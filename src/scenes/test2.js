import {Notgate as NotgateComp} from '../components/LogicGateSymbols/Notgate'
import {Notgate}                from '../classes/LogicGateSymbols/Notgate'

import {Andgate as AndgateComp} from '../components/LogicGateSymbols/Andgate'
import {Andgate}                from '../classes/LogicGateSymbols/Andgate'

import {Orgate as OrgateComp} from '../components/LogicGateSymbols/Orgate'
import {Orgate}               from '../classes/LogicGateSymbols/Orgate'

import {Xorgate as XorgateComp} from '../components/LogicGateSymbols/Xorgate'
import {Xorgate}                from '../classes/LogicGateSymbols/Xorgate'

import {Norgate as NorgateComp} from '../components/LogicGateSymbols/Norgate'
import {Norgate}                from '../classes/LogicGateSymbols/Norgate'

import {Nandgate as NandgateComp} from '../components/LogicGateSymbols/Nandgate'
import {Nandgate}                from '../classes/LogicGateSymbols/Nandgate'

import {Xnorgate as XnorgateComp} from '../components/LogicGateSymbols/Xnorgate'
import {Xnorgate}                from '../classes/LogicGateSymbols/Xnorgate'

import {Buffer as BufferComp} from '../components/LogicGateSymbols/Buffer'
import {Buffer}               from '../classes/LogicGateSymbols/Buffer'

import {cloneDeep} from 'lodash'

import {constant} from '../utils/functions'
import {linear}   from '../utils/functions'
import {sigmoid}  from '../utils/functions'
import {generatePointsX} from '../utils/util'
import {generatePointsY} from '../utils/util'
import {transformPoints} from '../utils/util'
import {DropShadow} from '../components/DropShadow'
import {Glow} from '../components/Glow'
import {Line} from '../components/Line'
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


const notgate  = new Notgate()
const andgate  = new Andgate()
const orgate   = new Orgate()
const xorgate  = new Xorgate()
const norgate  = new Norgate()
const nandgate = new Nandgate()
const xnorgate = new Xnorgate()
const buffer   = new Buffer()

const signal = {
  color : yellowStep,
  t0 : 40,
}

const x0 = 200
const dx = 350
const y0 = 300
const dy = 300

const x1 = constant(x0)
const y1 = constant(y0+dy)
const x2 = constant(x0+dx+500)
const y2 = constant(y0)
const x3 = constant(x0+2*dx)
const y3 = constant(y0)
const x4 = constant(x0+3*dx)
const y4 = constant(y0)
const x5 = constant(x0+2*dx)
const y5 = constant(y0+dy)
const x6 = constant(x0+1*dx)
const y6 = constant(y0+dy)
const x7 = constant(x0+3*dx)
const y7 = constant(y0+dy)
const x8 = constant(x0)
const y8 = constant(y0)

const transform1 = {
  translation : {x: x1, y: y1},
  rotation : constant(0),
  scale : constant(2),
}

const transform2 = {
  translation : {x: x2, y: y2},
  rotation : constant(0),
  scale : constant(2),
}

const transform3 = {
  translation : {x: x3, y: y3},
  rotation : constant(0),
  scale : constant(2),
}

const transform4 = {
  translation : {x: x4, y: y4},
  rotation : constant(0),
  scale : constant(2),
}

const transform5 = {
  translation : {x: x5, y: y5},
  rotation : constant(0),
  scale : constant(2),
}

const transform6 = {
  translation : {x: x6, y: y6},
  rotation : constant(0),
  scale : constant(2),
}

const transform7 = {
  translation : {x: x7, y: y7},
  rotation : constant(0),
  scale : constant(2),
}

const transform8 = {
  translation : {x: x8, y: y8},
  rotation : constant(0),
  scale : constant(2),
}

////////////////////////

notgate.transform  = cloneDeep(transform1)
andgate.transform  = cloneDeep(transform2)
orgate.transform   = cloneDeep(transform3)
xorgate.transform  = cloneDeep(transform4)
norgate.transform  = cloneDeep(transform5)
nandgate.transform = cloneDeep(transform6)
xnorgate.transform = cloneDeep(transform7)
buffer.transform   = cloneDeep(transform8)

notgate.signal     = signal
andgate.signal     = signal
orgate.signal      = signal
xorgate.signal     = signal
norgate.signal     = signal
nandgate.signal    = signal
xnorgate.signal    = signal
buffer.signal      = signal

notgate.setSecondaries()
andgate.setSecondaries()
orgate.setSecondaries()
xorgate.setSecondaries()
norgate.setSecondaries()
nandgate.setSecondaries()
xnorgate.setSecondaries()
buffer.setSecondaries()


const notgateProps1 = notgate.getProps()
const andgateProps  = andgate.getProps()
const orgateProps   = orgate.getProps()
const xorgateProps  = xorgate.getProps()
const norgateProps  = norgate.getProps()
const nandgateProps = nandgate.getProps()
const xnorgateProps = xnorgate.getProps()
const bufferProps   = buffer.getProps()

///////////////////////////////////////////





const p1_ = transformPoints([notgate.connectors.output], computeTransform(transform1, 0))[0]
const p2_ = transformPoints([andgate.connectors.input.a], computeTransform(transform2, 0))[0]
// const p1 = {x: p1_.x(0), y: p1_.y(0)}
// const p2 = {x: p2_.x(0), y: p2_.y(0)}


const points = generatePointsX(p1_, p2_, .2)
const conduction = new Conduction(points)
conduction.setSecondaries()
const conductionProps = conduction.getProps()


///////////////////////////////////////////

const Scene = () => {
  return (
    <>
      {/* <Glow       id = 'scene'/> */}
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <ConnectionComp {...conductionProps}/>
        <NotgateComp {...notgateProps1} />
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