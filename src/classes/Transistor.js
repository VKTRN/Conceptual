import {Element}         from './Element.js'
import {transistorWidth} from '../constants.js'
import {signalVelocity}  from '../constants.js'
import {signal}          from '../constants.js'
import {getRoundedPath}  from '../utils/util'
import {transformPoints} from '../utils/util'
import {yellowStep}      from '../utils/util'

class Transistor extends Element {
  constructor(points) {
    super(points)
    this.color    = yellowStep
    this.t0       = 0
    this.signal   = {t0: this.t0, color: this.color}
    this.width    = transistorWidth
    this.stop     = 10000
  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.points, this.transform)
  }

  setSecondaries() {
    this.transformPoints()
  }

  getProps() {

    const props = {
      points: this.transformedPoints,
      strokeWidth: this.width,
      signal: this.signal,
    }

    return props
  }

}

export {Transistor}


