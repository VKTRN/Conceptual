import {yellowStep} from '../../utils/util'

const color = 'yellow'
const a     = 14 // width of the conduction lines
const v     = 8 // velocity of the conduction lines
const b     = 1.75*a // width of the transistor
const l1    = 800 // length of the input line
const l2    = 300 // length of the conduction line'


const input1 = {
  color:    color, 
  width:    a, 
  velocity: v, 
  length:   l1
}

const input2 = {
  color:    color, 
  width:    a, 
  velocity: v, 
  length:   l2
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

const notgate1 = {
  input: input1,
  conduction: conduction,
  transistor: transistor
}

const notgate2 = {
  input: input2,
  conduction: conduction,
  transistor: transistor
}

export const config = {conduction, notgate1, notgate2}