import {NotGate as NotgateComp} from '../components/NotGate/NotGate'
import {Notgate}                from '../classes/Notgate/Notgate'

import {AndGate as AndgateComp} from '../components/AndGate/AndGate'
import {Andgate}                from '../classes/Andgate/Andgate'

import {OrGate as OrgateComp} from '../components/OrGate/OrGate'
import {Orgate}               from '../classes/Orgate/Orgate'

const notgate = new Notgate()
const andgate = new Andgate()
const orgate  = new Orgate()

const transform = {
  translation : {x: 200, y: 400},
  rotation : -Math.PI/2,
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

notgate.setSecondaries()
andgate.setSecondaries()
orgate.setSecondaries()

const notgateProps = notgate.getProps()
const andgateProps = andgate.getProps()
const orgateProps  = orgate.getProps()

console.log(orgate)

console.log('orgateProps', orgateProps)

const Scene = () => {
  return (
    <>
      {/* <NotgateComp {...notgateProps} /> */}
      {/* <AndgateComp {...andgateProps} /> */}
      <OrgateComp {...orgateProps} />
    </>
  )
}

export {Scene}