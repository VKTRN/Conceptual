import {makeNotGate} from '../components/NotGate/make'
import {NotGate}     from '../components/NotGate/NotGate'

const not_gate1  = makeNotGate( 10, 22,  50,  57,  -Math.PI/2,  1, 600,  450)

const Scene = () => {
  return (
    <>
      <NotGate {...not_gate1} />
    </>
  )
}

export {Scene}

