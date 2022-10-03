import {Line as LineComp} from '../components/Line/Line'
import {Line}             from '../classes/Line'

const output = new Line()

const p = [
  {x:  0,  y:  100},
  {x: 0,   y:    0}, 
  {x: 200,   y:    -200}, 
] 

output.points                  = p
output.transform.translation.x = 750
output.transform.translation.y = 293

output.setSecondaries()

const outputProps = output.getProps()

const Scene = () => {
  return (
    <>
      <LineComp line = {outputProps} />
    </>
  )
}

export {Scene}