import {NotGate as NotgateComp}   from '../components/LogicGates/NotGate'
import {Notgate}                  from '../classes/LogicGates/Notgate/Notgate'

import {AndGate as AndgateComp}   from '../components/LogicGates/AndGate'
import {Andgate}                  from '../classes/LogicGates/Andgate/Andgate'

import {OrGate as OrgateComp}     from '../components/LogicGates/OrGate'
import {Orgate}                   from '../classes/LogicGates/Orgate/Orgate'

import {NorGate as NorgateComp}   from '../components/LogicGates/NorGate'
import {Norgate}                  from '../classes/LogicGates/Norgate/Norgate'

import {NandGate as NandgateComp} from '../components/LogicGates/NandGate'
import {Nandgate}                 from '../classes/LogicGates/Nandgate/Nandgate'

import {constant}  from '../utils/functions'
import {linear}    from '../utils/functions'
import {sigmoid}   from '../utils/functions'
import {cloneDeep} from 'lodash'

import {DropShadow} from '../components/DropShadow'
import {Glow} from '../components/Glow'

const notgate  = new Notgate()
const andgate  = new Andgate()
const orgate   = new Orgate()
const norgate  = new Norgate()
const nandgate = new Nandgate()

const x = constant(200)
const y = constant(400)

const transform = {
  translation : {x: x, y: y},
  rotation : constant(-90),
  // scale : sigmoid(.5,1.2,100,.1),
  scale : constant(1),
}

notgate.transform    = transform
notgate.t0           = 10
notgate.t1           = 40

andgate.transform    = transform
andgate.tInput1      = 10
andgate.tInput2      = 20
andgate.tConduction  = 40

orgate.transform     = transform
orgate.tInput1       = 0
orgate.tInput2       = 20
orgate.tConduction   = 40

norgate.transform    = transform
norgate.tInput1      = 0
norgate.tInput2      = 20
norgate.tConduction  = 60

nandgate.transform   = transform
nandgate.tInput1     = 0
nandgate.tInput2     = 20
nandgate.tConduction = 60

notgate.setSecondaries()
andgate.setSecondaries()
orgate.setSecondaries()
norgate.setSecondaries()
nandgate.setSecondaries()

const notgateProps  = notgate.getProps()
const andgateProps  = andgate.getProps()
const orgateProps   = orgate.getProps()
const norgateProps  = norgate.getProps()
const nandgateProps = nandgate.getProps()
const andgateProps2 = cloneDeep(andgateProps)
// andgateProps.transform.translation.x = linear(2)
// andgateProps2.transform.translation.x = linear(1)
// andgateProps2.transform.translation.y = constant(500)

const Scene = () => {
  return (
    <>
      <Glow       id = 'orgate'/>
      {/* <DropShadow id = 'andgate'/> */}
      {/* <NotgateComp {...notgateProps} /> */}

      {/* <AndgateComp {...andgateProps} /> */}
      {/* <AndgateComp {...andgateProps2} /> */}
      <OrgateComp {...orgateProps} />
      {/* <NorgateComp {...norgateProps} /> */}
      {/* <NandgateComp {...nandgateProps} /> */}
    </>
  )
}

export {Scene}