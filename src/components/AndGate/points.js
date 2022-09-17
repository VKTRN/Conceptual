import {widths} from './widths.js'

const a = widths.conduction/2

const conduction = [
  {x:    0, y:   -400},
  {x:    0, y: -300},
  {x: -100, y: -200},
  {x: -100, y: -100},
  {x:    0, y:   0},
  {x:    0, y: 100},
  {x: -100, y: 200},
  {x: -100, y: 300},
  {x:    0, y: 400},
  {x:    0, y: 500}
]



const input1 = [
  {x: -200, y: -150},
  {x: -100-a, y: -150}
]

const input2 = [
  {x: -200, y: 250},
  {x: -100-a, y: 250}
]


const transistor1 = [
  {x: -100, y: 150},
  {x: -100, y: 350}
]

const transistor2 = [
  {x: -100, y: -250},
  {x: -100, y: -50}
]

const points = {
  conduction,
  input1,
  input2,
  transistor1,
  transistor2
}


export {points}


