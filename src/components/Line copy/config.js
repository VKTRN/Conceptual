export const getConfig = (color, width, velocity) => {
  
  const line = {
    color:    color, 
    width:    width, 
    velocity: velocity
  }

  return line
}

const color    = 'yellow'
const width    = 14
const velocity = 8

const config = getConfig(color, width, velocity)

export {config}