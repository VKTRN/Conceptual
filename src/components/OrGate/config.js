import {getConfig as getNotGateConfig} from '../NotGate/config'

export const getConfig = (color, width1, width2, velocity, length1, length2) => {
  
  const conduction = {
    color:    color, 
    width:    width1, 
    velocity: velocity
  }

  const notgate1 = getNotGateConfig(color, width1, width2, velocity, length1)
  const notgate2 = getNotGateConfig(color, width1, width2, velocity, length2)  

  return {conduction, notgate1, notgate2}
  
}
 
const color    = 'yellow'    // color of the not gate
const width1   = 14          // width of the conduction lines
const width2   = 1.75*width1 // velocity of the conduction lines
const velocity = 8           // width of the transistor
const length1  = 800         // length of the input line
const length2  = 300         // length of the conduction line'

const config = getConfig(color, width1, width2, velocity, length1, length2)

export {config}