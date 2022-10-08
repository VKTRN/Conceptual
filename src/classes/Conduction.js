import {Element}         from './Element.js'
import {conductionWidth} from '../constants.js'
import {signalVelocity}  from '../constants.js'
import {signal}          from '../constants.js'
import {getRoundedPath}  from '../utils/util'
import {transformPoints} from '../utils/util'
import {getTotalLength}  from '../utils/util'
import {getTravelTime}   from '../utils/util'

class Conduction extends Element {
  constructor(points) {
    super(points)
    this.color      = 'yellow'
    this.t0         = 0
    this.signal     = {t0: this.t0, color:this.color}
    this.width      = conductionWidth
    this.velocity   = signalVelocity
    this.stop       = 10000
    this.path       = []
    this.length     = 0
    this.travelTime = 0
  }

  setPath() {
    this.path = getRoundedPath(this.points, 30)
  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.path, this.transform)
  }

  setLength() {
    this.length = getTotalLength(this.transformedPoints)
  }

  setTravelTime() {
    this.travelTime = getTravelTime(this.length, this.velocity)
  }

  setSecondaries() {
    this.setPath()
    this.transformPoints()
    this.setLength()
    this.setTravelTime()
  }

  getProps() {

    const s = this.transform.scale

    const props = {
      points: this.transformedPoints,
      strokeWidth: this.width,
      signal: this.signal,
      velocity: this.velocity,
      // velocity: this.velocity*s,
      // strokeWidth: this.width*s,
    }

    return props
  }

}

export {Conduction}


