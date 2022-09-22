import {makeOrGate} from '../components/OrGate/make'
import {OrGate}     from '../components/OrGate/OrGate'
import {makeNotGate} from '../components/NotGate/make'
import {NotGate}     from '../components/NotGate/NotGate'

const or_gate1  = makeOrGate( 0, 12,  120,   -Math.PI/2,  .8, 100, 500)
const not_gate1 = makeNotGate( 0, 12,  381,9999,   -Math.PI/2,  .8, 1300, 500)

const Scene = () => {
  return (
    <>
      <OrGate  {...or_gate1}/>
      <NotGate {...not_gate1}/>
    </>
  )
}

export {Scene}

