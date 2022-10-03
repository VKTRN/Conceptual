import {Element}         from './Element.js'
import {conductionWidth} from '../constants.js'
import {signalVelocity}  from '../constants.js'
import {signal}          from '../constants.js'
import {getRoundedPath}  from '../utils/util'
import {transformPoints} from '../utils/util'


class Line extends Element {
  constructor() {
    super()
    this.signal = signal
    this.width = conductionWidth
    this.velocity = signalVelocity
    this.stop = 10000
    this.path = []
  }

  setPath() {
    this.path = getRoundedPath(this.points, 30)
  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.path, this.transform)
  }

  setSecondaries() {
    this.setPath()
    this.transformPoints()
  }

  getProps() {
    const props = {
      points: this.transformedPoints,
      strokeWidth: this.width,
      signal: this.signal,
      velocity: this.velocity,
    }

    return props
  }

}

export {Line}


