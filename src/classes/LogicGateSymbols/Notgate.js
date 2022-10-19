import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'

const points = [
  {x: 0, y: -50},
  {x: 0, y: 50},
  {x: 100, y: 0},
]

class Notgate extends Polygon{
  constructor() {
    super(points)
    this.transform = {}
    this.width     = 6
    this.fill      = '#733535'
    this.circle    = new Circle({x: 108, y: 0}, 7)
    this.text      = new Text({x: 10, y: 3}, 'NOT')
    this.connectors = {input: {x: 0, y: 0}, output: {x: 100, y: 0}}
    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
  }

  setSecondaries() {
    this.circle.setSecondaries()
    this.circle.signal = this.signal
    this.text.signal = this.signal
  }


  getProps() {

    const props ={
      points: this.points,
      strokeWidth: this.width,
      signal: this.signal,
      transform: this.transform,
      fill: this.fill,
      circle: this.circle.getProps(),
      text: this.text.getProps(),
    } 

    return props
  }
}

export {Notgate}