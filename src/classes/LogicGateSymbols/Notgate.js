import {Polygon} from '../Polygon.js'

const points = [
  {x: 0, y: 0},
  {x: 0, y: 100},
  {x: 100, y: 50},
]

class Notgate extends Polygon{
  constructor() {
    super(points)
    this.signal = {}
    this.transform = {}
    this.width = 20
  }


  getProps() {

    const props ={
      points: this.points,
      strokeWidth: this.width,
      signal: this.signal,
      transform: this.transform,
    } 

    console.log('Notgate getProperties', props)

    return props
  }
}

export {Notgate}