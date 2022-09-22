import {makeNotGate} from '../components/NotGate/make'
import {NotGate}     from '../components/NotGate/NotGate'
import {Line} from '../components/Line/Line'
import {makeLine} from '../components/Line/make'


const not_gate1  = makeNotGate( 10, 22,  50,80, -Math.PI/2,  1, 1920/2-250,  450)
const output = makeLine([{x:0,y:0},{x:300, y:0}, {x: 300,y:300}],100,900,-Math.PI/2,1,1920/2-200,443)

const Scene = () => {
  return (
    <>
      <NotGate {...not_gate1} />
      <Line line = {output} />
    </>
  )
}

export {Scene}

