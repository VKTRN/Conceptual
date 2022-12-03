import {Element}         from './Element.js'
import {transistorWidth} from '../constants'
import {signalVelocity}  from '../constants'
import {signal}          from '../constants'
import {getRoundedPath}  from '../utils/util'
import {transformPoints} from '../utils/util'
import {yellowStep}      from '../utils/util'
import {linearInterpolation} from '../utils/functions'
import {generateTimes} from '../utils/functions'


class Transistor extends Element {
  constructor(points) {
    super(points)
    this.color    = yellowStep
    this.t0       = 0
    this.signal   = {t0: this.t0, color: this.color}
    this.width    = transistorWidth
    this.tStop     = 10000
    this.style    = {}
    // this.timeFunction = (t) => t
    this.timePoints = []

  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.points, this.transform)
  }

  setSecondaries() {
    // this.transformPoints()
  }

  startAt(t0) {
    this.timePoints = generateTimes(t0, 0)
  }

  getProps() {

    const strokeWidth = this.width
    const timeFunction = this.timePoints.length !== 0? linearInterpolation(this.timePoints) : (t) => t

    const props = {
      points: this.points,
      strokeWidth: strokeWidth,
      signal: this.signal,
      style: this.style,
      stop: this.tStop,
      timeFunction: timeFunction
    }

    return props
  }

}

export {Transistor}


