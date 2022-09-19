import {makeOrGate} from '../components/OrGate/make'
import {OrGate}     from '../components/OrGate/OrGate'
import {makeNotGate} from '../components/NotGate/make'
import {NotGate}     from '../components/NotGate/NotGate'

const or_gate1  = makeOrGate( 0, 12,  70,   -Math.PI/2,  .8, 300, 500)
const not_gate1 = makeNotGate( 0, 12,  331,   -Math.PI/2,  .8, 1500, 500)

const Scene = () => {
  return (
    <>
      <OrGate  {...or_gate1}/>
      <NotGate {...not_gate1}/>
    </>
  )
}

export {Scene}

