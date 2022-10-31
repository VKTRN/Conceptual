import {Element}             from './Element.js'
import {conductionWidth}     from '../constants.js'
import {signalVelocity}      from '../constants.js'
import {signal}              from '../constants.js'
import {getRoundedPath}      from '../utils/util'
import {transformPoints}     from '../utils/util'
import {getTotalLength}      from '../utils/util'
import {getTravelTime}       from '../utils/util'
import {linearInterpolation} from '../utils/functions'
import {generateTimes}       from '../utils/functions'


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
    this.signalLength = 100000
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

  startAt(t0, t1=0) {
    this.timePoints = generateTimes(t0, t1)
  }

  startAtHalf() {
    this.timePoints = generateTimes(this.t0, this.travelTime/2)
  }

  startAtFull() {
    this.timePoints = generateTimes(this.t0, this.travelTime)
  }
  
  turnOn() {
    this.timePoints = generateTimes(this.t0, this.travelTime)
  }

  turnOff() {
    this.timePoints = generateTimes(10000, 0)
  }

  getProps() {
    const timeFunction = this.timePoints.length !== 0? linearInterpolation(this.timePoints) : (t) => t

    const props = {
      points: this.path,
      strokeWidth: this.width,
      signal: this.signal,
      velocity: this.velocity,
      stop: this.tStop,
      signalLength: this.signalLength,
      timeFunction: timeFunction
    }

    return props
  }

}

export {Conduction}


