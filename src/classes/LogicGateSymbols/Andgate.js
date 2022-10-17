import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'

const points = [
  {x: 0, y: 0},
  {x: 80, y: 0},
  {x: 90, y: 10},
  {x: 90, y: 60},
  {x: 80, y: 70},
  {x: 0, y: 70},

]

class Andgate extends Polygon{
  constructor() {
    super(points)
    this.transform = {}
    this.width     = 6
    this.text      = new Text({x: 10, y: 37}, 'AND')
    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
  }

  setSecondaries() {
    this.text.signal = this.signal
  }


  getProps() {

    const props ={
      points: this.points,
      strokeWidth: this.width,
      signal: this.signal,
      transform: this.transform,
      text: this.text.getProps(),
    } 

    return props
  }
}

export {Andgate}