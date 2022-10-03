import {transformPoints} from '../utils/util'
import {transform}       from '../constants'

class Element {
  constructor() {
    this.points = []
    this.transformedPoints = []
    this.transform = transform
  }

  transformPoints() {
    this.transformedPoints = transformPoints(this.points, this.transform)
  }

  setSecondaries() {
    this.transformPoints()
  }
}

export {Element}

