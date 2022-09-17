import {widths} from './widths.js'

const a = widths.conduction/2

const conduction = [
  {x:    0, y:   0},
  {x:    0, y: 100},
  {x: -100, y: 200},
  {x: -100, y: 300},
  {x:    0, y: 400},
  {x:    0, y: 500}
]

const output = [
  {x:    a, y:  50},
  {x:  100, y:  50}
]

const input = [
  {x: -200, y: 250},
  {x: -100-a, y: 250}
]

const transistor = [
  {x: -100, y: 150},
  {x: -100, y: 350}
]

const points = {
  conduction,
  input,
  output,
  transistor
}


export {points}


