import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'

const points = [
  {x: 0, y: 0},
  {x: 0, y: 100},
  {x: 100, y: 50},
]

class Notgate extends Polygon{
  constructor() {
    super(points)
    this.transform = {}
    this.width     = 6
    this.circle    = new Circle({x: 110, y: 50}, 7)
    this.text      = new Text({x: 10, y: 52}, 'NOT')
    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
  }

  setSecondaries() {
    this.circle.setSecondaries()
    this.text.signal = this.signal
    this.circle.signal = this.signal
  }


  getProps() {

    const props ={
      points: this.points,
      strokeWidth: this.width,
      signal: this.signal,
      transform: this.transform,
      circle: this.circle.getProps(),
      text: this.text.getProps(),
    } 

    console.log(props)

    return props
  }
}

export {Notgate}