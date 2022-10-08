import {NotGate as NotgateComp} from '../components/NotGate/NotGate'
import {Notgate}                from '../classes/Notgate/Notgate'

import {AndGate as AndgateComp} from '../components/AndGate/AndGate'
import {Andgate}                from '../classes/Andgate/Andgate'

import {OrGate as OrgateComp} from '../components/OrGate/OrGate'
import {Orgate}               from '../classes/Orgate/Orgate'

import {NorGate as NorgateComp} from '../components/NorGate/NorGate'
import {Norgate}               from '../classes/Norgate/Norgate'


const notgate = new Notgate()
const andgate = new Andgate()
const orgate  = new Orgate()
const norgate = new Norgate()

const transform = {
  translation : {x: 1920/2-250, y: 1080/2-250},
  rotation : -90,
  scale : 1,
}

notgate.transform   = transform
notgate.t0          = 10
notgate.t1          = 40

andgate.transform   = transform
andgate.tInput1     = 10
andgate.tInput2     = 20
andgate.tConduction = 40

orgate.transform   = transform
orgate.tInput1     = 0
orgate.tInput2     = 20
orgate.tConduction = 40

norgate.transform   = transform
norgate.tInput1     = 0
norgate.tInput2     = 20
norgate.tConduction = 60


notgate.setSecondaries()
andgate.setSecondaries()
orgate.setSecondaries()
norgate.setSecondaries()

const notgateProps = notgate.getProps()
const andgateProps = andgate.getProps()
const orgateProps  = orgate.getProps()
const norgateProps = norgate.getProps()

const Scene = () => {
  return (
    <>
      <NotgateComp {...notgateProps} />
      {/* <AndgateComp {...andgateProps} /> */}
      {/* <OrgateComp {...orgateProps} /> */}
      {/* <NorgateComp {...norgateProps} /> */}
    </>
  )
}

export {Scene}