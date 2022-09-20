import {getConfig as getNotGateConfig} from '../NotGate/config'

export const getConfig = (color, width1, width2, velocity) => {
  
  const notgate1 = getNotGateConfig(color, width1, width2, velocity, 200)
  const notgate2 = getNotGateConfig(color, width1, width2, velocity, 200)  

  return {notgate1, notgate2}
}

const color    = 'yellow'
const width1   = 14
const width2   = 1.75*width1
const velocity = 8

const config = getConfig(color, width1, width2, velocity)

export {config}