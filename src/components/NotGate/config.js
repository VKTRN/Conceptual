import {yellowStep} from '../../utils/util'

export const getConfig = (color, width1, width2, velocity, length) => {
  
  const input = {
    color:    color, 
    width:    width1, 
    velocity: velocity, 
    length:   length
  }
  
  const conduction = {
    color:    color, 
    width:    width1, 
    velocity: velocity
  }
  
  const transistor = {
    color:    yellowStep, 
    width:    width2
  }

  return {input, conduction, transistor}
}

const color    = 'yellow'
const width1   = 14
const width2   = 1.75*width1
const velocity = 8
const length   = 200

const config = getConfig(color, width1, width2, velocity, length)

export {config}