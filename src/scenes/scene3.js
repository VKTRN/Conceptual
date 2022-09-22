import {makeAndGate} from '../components/AndGate/make'
import {AndGate}     from '../components/AndGate/AndGate'
import {makeLine}    from '../components/Line/make'
import {Line}        from '../components/Line/Line'

const and_gate1 = makeAndGate( 10, 22,  50,  -Math.PI/2,  1, 500,  450)
const line      = makeLine([{x:0,y:0},{x:200, y:0}],57,-Math.PI/2,1,550,443)

const Scene = () => {
  return (
    <>
      <AndGate {...and_gate1} />
      <Line line = {line} />
    </>
  )
}

export {Scene}

