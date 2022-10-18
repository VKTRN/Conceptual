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


import {cloneDeep} from 'lodash'

import {constant} from '../utils/functions'
import {linear}   from '../utils/functions'
import {sigmoid}  from '../utils/functions'
import {DropShadow} from '../components/DropShadow'
import {Glow} from '../components/Glow'


import {yellowStep} from '../utils/util'


const notgate  = new Notgate()
const andgate  = new Andgate()
const orgate   = new Orgate()
const xorgate  = new Xorgate()
const norgate  = new Norgate()

const x = constant(700)
const y = constant(300)

const signal = {
  color : yellowStep,
  t0 : 40,
}

const transform = {
  translation : {x: x, y: y},
  rotation : constant(0),
  scale : constant(3),
}

////////////////////////

notgate.transform = cloneDeep(transform)
andgate.transform = cloneDeep(transform)
orgate.transform  = cloneDeep(transform)
xorgate.transform = cloneDeep(transform)
norgate.transform = cloneDeep(transform)

notgate.signal    = signal
andgate.signal    = signal
orgate.signal     = signal
xorgate.signal    = signal
norgate.signal    = signal

notgate.setSecondaries()
andgate.setSecondaries()
orgate.setSecondaries()
xorgate.setSecondaries()
norgate.setSecondaries()


const notgateProps1 = notgate.getProps()
const andgateProps  = andgate.getProps()
const orgateProps   = orgate.getProps()
const xorgateProps  = xorgate.getProps()
const norgateProps  = norgate.getProps()

///////////////////////////////////////////

notgateProps1.transform.translation.x = constant(1200)
orgateProps.transform.translation.x   = constant(300)
xorgateProps.transform.translation.y   = constant(700)
norgateProps.transform.translation.x   = constant(1200)
norgateProps.transform.translation.y   = constant(700)

console.log(norgateProps)
console.log(notgateProps1)

const Scene = () => {
  return (
    <>
      {/* <Glow       id = 'scene'/> */}
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <NotgateComp {...notgateProps1} />
        <AndgateComp {...andgateProps}/>
        <OrgateComp  {...orgateProps}/>
        <XorgateComp {...xorgateProps}/>
        <NorgateComp {...norgateProps}/>
      </g>
    </>
  )
}

export {Scene}