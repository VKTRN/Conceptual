const getConduction = () => {
  const points = [
    {x:    0, y:   0},
    {x:    0, y: 100},
    {x: -100, y: 200},
    {x: -100, y: 300},
    {x:    0, y: 400},
    {x:    0, y: 500}
  ]
  return points
}

const getInput = (a,b) => {
  const points = [
    {x: -100-a, y: 250},
    {x: -100-b, y: 250}
  ]
  return points
}

const getTransistor = () => {
  const points = [
    {x: -100, y: 150},
    {x: -100, y: 350}
  ]
  return points
}

const getPoints = (a, b) => {
  const points = {
    conduction: getConduction(),
    input: getInput(a, b),
    transistor: getTransistor()
  }
  return points
}

export {getPoints}


