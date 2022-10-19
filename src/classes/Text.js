import {Element}         from './Element.js'
import {transistorWidth} from '../constants.js'
import {signalVelocity}  from '../constants.js'
import {signal}          from '../constants.js'
import {getRoundedPath}  from '../utils/util'
import {transformPoints} from '../utils/util'
import {yellowStep}      from '../utils/util'

class Text{
  constructor(position, text) {
    this.position = position
    this.color    = 'yellow'
    this.text     = text
    this.fontSize = 26
    this.t0       = 0
    this.signal   = {t0: this.t0, color: this.color}
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
      fontSize: this.fontSize,
      text: this.text,
      color : this.color,
      strokeWidth: this.width,
      signal: this.signal,
    }

    return props
  }

}

export {Text}


