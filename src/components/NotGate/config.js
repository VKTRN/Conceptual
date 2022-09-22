import {yellowStep} from '../../utils/util'
import {transform}  from '../../constants'
import {signal}     from '../../constants'

const color    = 'yellow'
const width1   = 14
const width2   = 1.75*width1
const velocity = 8
const length   = 200

const input = {
  color:    color, 
  width:    width1, 
  length:   length,
  signal:   signal,
}

const conduction = {
  color:    color, 
  width:    width1, 
  signal:   signal,
  tStop: 9999
}

const transistor = {
  width:    width2,
  signal:   {
    color: yellowStep,
    width: width2,
  },
}

const config = {
  input, 
  conduction, 
  transistor,
  transform,
  velocity,
}

export {config}