import {transformPoints} from '../utils/util'
import {transform}       from '../constants'

class Element {
  constructor(points) {
    this.points = points
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

