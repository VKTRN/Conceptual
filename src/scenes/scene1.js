import {makeOrGate} from '../components/OrGate/make'
import {OrGate}     from '../components/OrGate/OrGate'

const or_gate1  = makeOrGate( 0, 12,  70,   -Math.PI/2,  .8, 300, 500)

const Scene = () => {
  return (
    <>
      <OrGate  {...or_gate1}/>
    </>
  )
}

export {Scene}

