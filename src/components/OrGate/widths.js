const a               = 14
const b               = 1.75*a

const notGatewidths = {
  conduction: a, 
  input:      a, 
  transistor: b
}

const widths = {
  conduction: a, 
  input:      a, 
  output:     a, 
  transistor: b,
  notGate:    notGatewidths
}

export {widths}