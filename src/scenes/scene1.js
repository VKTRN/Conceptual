import {makeAndGate} from '../components/AndGate/make'
import {AndGate}     from '../components/AndGate/AndGate'


const and_gate1  = makeAndGate( 20, 32,  70,  1111,   -Math.PI/2,  1, 900,  600)

const Scene = () => {
  return (
    <>
      <AndGate {...and_gate1} />
    </>
  )
}

export {Scene}

