import {widths} from './widths.js'

const conduction1 = [
  {x:    0, y:     0},
  {x:    0, y:   150},
  {x:  250, y:   150},
  {x:  250, y:   700},
]

const conduction2 = [
  {x:    0, y:     0},
  {x:    0, y:   150},
  {x:  -250, y:   150},
  {x:  -250, y:   300},
]

const conduction3 = [
  {x:  250, y:   1200},
  {x:  250, y:   1350},
  {x:    0, y:   1350},
  {x:    0, y:   1500},
]


const conduction4 = [
  {x:  -250, y:   800},
  {x:  -250, y:   1350},
  {x:    0, y:   1350},
  {x:    0, y:   1500},
]

const notGate1 = [conduction1[conduction1.length-1]]
const notGate2 = [conduction2[conduction2.length-1]]

const points = {
  conduction1,
  conduction2,
  conduction3,
  conduction4,
  notGate1,
  notGate2,
}


export {points}


