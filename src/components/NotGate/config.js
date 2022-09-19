import {yellowStep} from '../../utils/util'

const color = 'yellow'
const a     = 14
const b     = 1.75*a
const v     = 8

const input = {
  color:    color, 
  width:    a, 
  velocity: v, 
  length:   200
}

const conduction = {
  color:    color, 
  width:    a, 
  velocity: v
}

const transistor = {
  color:    yellowStep, 
  width:    b
}

export const config = {input, conduction, transistor}