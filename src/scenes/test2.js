import {Notgate as NotgateComp} from '../components/LogicGateSymbols/Notgate'
import {Notgate}                from '../classes/LogicGateSymbols/Notgate'

import {Andgate as AndgateComp} from '../components/LogicGateSymbols/Andgate'
import {Andgate}                from '../classes/LogicGateSymbols/Andgate'

import {Orgate as OrgateComp} from '../components/LogicGateSymbols/Orgate'
import {Orgate}               from '../classes/LogicGateSymbols/Orgate'


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

notgate.signal    = signal
andgate.signal    = signal
orgate.signal     = signal

notgate.setSecondaries()
andgate.setSecondaries()
orgate.setSecondaries()


const notgateProps1 = notgate.getProps()
const andgateProps  = andgate.getProps()
const orgateProps   = orgate.getProps()

///////////////////////////////////////////

notgateProps1.transform.translation.x = constant(1200)
orgateProps.transform.translation.x   = constant(300)

const Scene = () => {
  return (
    <>
      {/* <Glow       id = 'scene'/> */}
      <DropShadow id = 'scene'/>
      <g id='scene'>
        <NotgateComp {...notgateProps1} />
        <AndgateComp {...andgateProps}/>
        <OrgateComp  {...orgateProps}/>
      </g>
    </>
  )
}

export {Scene}