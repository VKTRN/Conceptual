import {Element}             from './Element'
import {conductionWidth}     from '../constants'
import {signalVelocity}      from '../constants'
import {signal}              from '../constants'
import {getRoundedPath}      from '../utils/util'
import {transformPoints}     from '../utils/util'
import {getTotalLength}      from '../utils/util'
import {getTravelTime}       from '../utils/util'
import {linearInterpolation} from '../utils/functions'
import {generateTimes}       from '../utils/functions'

type Signal = {
  t0: number,
  color: string
}

class Conduction extends Element {

  width: number
  color: string
  t0: number
  signal: Signal
  velocity: number
  tStop: number
  path: any
  length: number
  travelTime  : number
  signalLength: number
  timePoints  : any
  duration    : number   
  r           : number


  constructor(points) {
    super(points)
    this.color        = 'rgb(255,178,0)'
    this.t0           = 0
    this.signal       = {t0: this.t0, color:this.color}
    this.width        = conductionWidth
    this.velocity     = signalVelocity
    this.tStop        = 10000
    this.path         = []
    this.length       = 0
    this.travelTime   = 0
    this.signalLength = 50
    this.timePoints   = []
    this.duration     = this.points.length
    this.r            = 20
    // this.timeFunction = (t) => t
  }

  #setPath() {
    // this.path = getRoundedPath(this.points, 30)
    this.path = this.points.map( item => getRoundedPath(item, this.r))
  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.path, this.transform)
  }

  setLength() {
    this.length = getTotalLength(this.path[this.duration-1])
  }

  setTravelTime() {
    this.travelTime = getTravelTime(this.length, this.velocity)
  }

  setSecondaries() {
    this.#setPath()
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


