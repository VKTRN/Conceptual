import {Element}         from './Element.js'
import {transistorWidth} from '../constants'
import {signalVelocity}  from '../constants'
import {signal}          from '../constants'
import {getRoundedPath}  from '../utils/util'
import {transformPoints} from '../utils/util'
import {yellowStep}      from '../utils/util'

class Polygon extends Element {
  constructor(points) {
    super(points)
    this.color    = yellowStep
    this.fill     = 'none'
    this.t0       = 0
    this.signal   = {t0: this.t0, color: this.color}
    this.width    = 20
  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.points, this.transform)
  }

  setSecondaries() {
    // this.transformPoints()
  }

  getProps() {

    const strokeWidth = this.width

    const props = {
      points: this.points,
      strokeWidth: strokeWidth,
      signal: this.signal,
      fill: this.fill,
    }

    return props
  }

}

export {Polygon}


