import {Element}             from './Element.js'
import {conductionWidth}     from '../constants.js'
import {signalVelocity}      from '../constants.js'
import {signal}              from '../constants.js'
import {getRoundedPath}      from '../utils/util'
import {transformPoints}     from '../utils/util'
import {getTotalLength}      from '../utils/util'
import {getTravelTime}       from '../utils/util'
import {linearInterpolation} from '../utils/functions'

class Conduction extends Element {
  constructor(points) {
    super(points)
    this.color      = 'rgb(255,178,0)'
    this.t0         = 0
    this.signal     = {t0: this.t0, color:this.color}
    this.width      = conductionWidth
    this.velocity   = signalVelocity
    this.tStop      = 10000
    this.path       = []
    this.length     = 0
    this.travelTime = 0
    // this.timeFunction = (t) => t
    this.timePoints = []
  }

  setPath() {
    this.path = getRoundedPath(this.points, 30)
  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.path, this.transform)
  }

  setLength() {
    this.length = getTotalLength(this.path)
  }

  setTravelTime() {
    this.travelTime = getTravelTime(this.length, this.velocity)
  }

  setSecondaries() {
    this.setPath()
    this.setLength()
    this.setTravelTime()
  }

  getProps() {
    const timeFunction = this.timePoints.length !== 0? linearInterpolation(this.timePoints) : (t) => t

    const props = {
      points: this.path,
      strokeWidth: this.width,
      signal: this.signal,
      velocity: this.velocity,
      stop: this.tStop,
      timeFunction: timeFunction
    }

    return props
  }

}

export {Conduction}


