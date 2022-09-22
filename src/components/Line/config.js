import {transform} from '../../constants'
import {signal} from '../../constants'

const color    = 'yellow'
const width    = 14
const velocity = 8
const points   = [{x:0,y:0},{x:100,y:0}]

const config = {
  points:    points,
  width:     width, 
  velocity:  velocity,
  transform: transform,
  signal:    signal
}


export {config}