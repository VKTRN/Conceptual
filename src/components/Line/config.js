import {transform}       from '../../constants'
import {signal}          from '../../constants'
import {conductionWidth} from '../../constants'
import {signalVelocity}  from '../../constants'

const points   = [{x:0,y:0},{x:100,y:0}]
const width    = conductionWidth
const velocity = signalVelocity

const config = {
  points:    points,
  width:     width, 
  velocity:  velocity,
  transform: transform,
  signal:    signal
}


export {config}