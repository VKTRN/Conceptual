import {yellowStep} from '../../utils/util'

const conductionColor = 'yellow'
const inputColor      = 'yellow'
const outputColor     = 'yellow'
const transistorColor = yellowStep

const notGatecolors = {
  conduction: conductionColor, 
  input:      inputColor, 
  transistor: transistorColor
}

const colors = {
  conduction: conductionColor, 
  input:      inputColor, 
  output:     outputColor, 
  notGate:    notGatecolors
}

export {colors}