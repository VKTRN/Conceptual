import {NotGate as NotgateComp} from '../components/LogicGates/NotGate'
import {Notgate}                from '../classes/Notgate/Notgate'

import {AndGate as AndgateComp} from '../components/LogicGates/AndGate'
import {Andgate}                from '../classes/Andgate/Andgate'

import {OrGate as OrgateComp} from '../components/LogicGates/OrGate'
import {Orgate}               from '../classes/Orgate/Orgate'

import {NorGate as NorgateComp} from '../components/LogicGates/NorGate'
import {Norgate}               from '../classes/Norgate/Norgate'

import {NandGate as NandgateComp} from '../components/LogicGates/NandGate'
import {Nandgate}                from '../classes/Nandgate/Nandgate'

function constant(c) {
  
  const fn = (t) => c
  
  return fn 
}

function linear(c) {
  
  const fn = t => c*t
  
  return fn 
}

const notgate  = new Notgate()
const andgate  = new Andgate()
const orgate   = new Orgate()
const norgate  = new Norgate()
const nandgate = new Nandgate()

const transform = {
  translation : {x: 800, y: 1080/2},
  rotation : linear(1),
  scale : .5,
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

console.log(nandgateProps)

const Scene = () => {
  return (
    <>
      {/* <NotgateComp {...notgateProps} /> */}
      {/* <AndgateComp {...andgateProps} /> */}
      {/* <OrgateComp {...orgateProps} /> */}
      {/* <NorgateComp {...norgateProps} /> */}
      <NandgateComp {...nandgateProps} />
    </>
  )
}

export {Scene}