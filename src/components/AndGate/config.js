import {transform} from '../../constants'
import {signal}    from '../../constants'

const color    = 'yellow'
const width1   = 14
const width2   = 1.75*width1
const velocity = 8

const config = {
  color,
  width1,
  width2,
  velocity,
  transform,
  signal,
  timings: {
    conduction1: 0,
    conduction2: 0,
    input1:      0,
    input2:      0,
    transistor1: 0,
    transistor2: 0,
  }
}


export {config}