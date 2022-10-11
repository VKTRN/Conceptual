import {Notgate as NotgateComp} from '../components/LogicGateSymbols/Notgate'
import {Notgate}                from '../classes/LogicGateSymbols/Notgate'

import {constant} from '../utils/functions'
import {linear}   from '../utils/functions'
import {sigmoid}  from '../utils/functions'

const notgate  = new Notgate()

console.log(notgate)

const x = constant(800)
const y = constant(400)

const transform = {
  translation : {x: x, y: y},
  rotation : constant(0),
  scale : sigmoid(1,3,60,.1),
}

notgate.transform    = transform
notgate.t0           = 10
notgate.t1           = 40

// notgate.setSecondaries()

const notgateProps  = notgate.getProps()

console.log(notgateProps)

const Scene = () => {
  return (
    <>
      <NotgateComp {...notgateProps} />
    </>
  )
}

export {Scene}