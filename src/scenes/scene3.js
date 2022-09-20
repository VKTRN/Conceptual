import {makeAndGate} from '../components/AndGate/make'
import {AndGate}     from '../components/AndGate/AndGate'

const and_gate1  = makeAndGate( 10, 22,  50,  -Math.PI/2,  1, 700,  450)
console.log(and_gate1)

const Scene = () => {
  return (
    <>
      <AndGate {...and_gate1} />
    </>
  )
}

export {Scene}

