import {NotGate as NotgateComp} from '../components/NotGate/NotGate'
import {Notgate}                from '../classes/Notgate/Notgate'

import {AndGate as AndgateComp} from '../components/AndGate/AndGate'
import {Andgate}                from '../classes/Andgate/Andgate'

const notgate = new Notgate()
const andgate = new Andgate()

const transform = {
  translation : {x: 400, y: 400},
  rotation : -Math.PI/2,
  scale : 1,
}

notgate.transform = transform
notgate.t0 = 10
notgate.t1 = 40

andgate.transform = transform
andgate.tInput1 = 10
andgate.tInput2 = 20
andgate.tConduction = 40

andgate.setColor('red')

notgate.setSecondaries()
andgate.setSecondaries()

const notgateProps = notgate.getProps()
const andgateProps = andgate.getProps()

console.log(andgateProps)


const Scene = () => {
  return (
    <>
      {/* <NotgateComp {...notgateProps} /> */}
      <AndgateComp {...andgateProps} />
    </>
  )
}

export {Scene}