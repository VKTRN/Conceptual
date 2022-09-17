import {makeNotGate} from '../components/NotGate/make'
import {NotGate}     from '../components/NotGate/NotGate'

const not_gate1  = makeNotGate( 10, 22,  50,  57,  .5,  1, 500,  50)

const Scene = () => {
  return (
    <>
      <NotGate {...not_gate1} />
    </>
  )
}

export {Scene}

