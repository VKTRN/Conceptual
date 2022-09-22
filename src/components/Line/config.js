export const getConfig = (color, width, velocity) => {
  
  const line = {
    points:   [{x:0,y:0},{x:100,y:0}],
    color:    color, 
    width:    width, 
    velocity: velocity,
    transform: {
      rotation: 0,
      scale:    1,
      translation: {x:0,y:0}
    }
  }

  return line
}

const color    = 'yellow'
const width    = 14
const velocity = 8

const config = getConfig(color, width, velocity)

export {config}