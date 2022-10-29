import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'
import {linearInterpolation} from '../../utils/functions'
import {generateTimes} from '../../utils/functions'

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
    this.timePoints = []

  }

  setSecondaries() {
    this.circle.setSecondaries()
    this.circle.signal = this.signal
    this.text.signal = this.signal
  }

  startAt(t0) {
    this.timePoints = generateTimes(t0, 0)
  }

  getProps() {

    const timeFunction = this.timePoints.length !== 0? linearInterpolation(this.timePoints) : (t) => t

    const props ={
      points: this.points,
      strokeWidth: this.width,
      signal: this.signal,
      transform: this.transform,
      fill: this.fill,
      circle: this.circle.getProps(),
      text: this.text.getProps(),
      timeFunction: timeFunction

    } 

    return props
  }
}

export {Notgate}