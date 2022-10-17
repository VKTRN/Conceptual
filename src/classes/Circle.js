import {Element}         from './Element.js'
import {transistorWidth} from '../constants.js'
import {signalVelocity}  from '../constants.js'
import {signal}          from '../constants.js'
import {getRoundedPath}  from '../utils/util'
import {transformPoints} from '../utils/util'
import {yellowStep}      from '../utils/util'

class Circle{
  constructor(position, radius) {
    this.position = position
    this.radius   = radius
    this.signal   = {}
    this.width    = 6
  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.points, this.transform)
  }

  setSecondaries() {
    // this.transformPoints()
  }

  getProps() {

    const props = {
      position: this.position,
      color : this.color,
      radius: this.radius,
      strokeWidth: this.width,
      signal: this.signal,
    }

    return props
  }

}

export {Circle}


