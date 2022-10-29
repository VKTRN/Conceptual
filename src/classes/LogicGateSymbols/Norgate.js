import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'
import {makeArc} from '../../utils/util'
import {Circle}  from '../Circle.js'
import {linearInterpolation} from '../../utils/functions'
import {generateTimes} from '../../utils/functions'


const a = 90
const b = 70
const c = 100

const p1 = {x: 0, y: -b/2}
const pc = {x: a, y: 0}
const p2 = {x: 0, y: b/2}

const arc1 = makeArc(p1, pc, c, true)
const arc2 = makeArc(pc, p2, c, true)
const arc3 = makeArc(p2, p1, c, false)


const points = [
  ...arc1,
  ...arc2,
  ...arc3,
]

class Norgate extends Polygon{
  constructor() {
    super(points)
    this.transform = {}
    this.width     = 6
    this.fill      = '#736235'
    this.text      = new Text({x: 12, y: 2}, 'NOR')
    this.circle    = new Circle({x: c, y: 0}, 7)
    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
    this.timePoints = []

  }

  setSecondaries() {
    this.circle.signal = this.signal
    this.text.signal = this.signal
  }

  startAt(t0) {
    this.timePoints = generateTimes(t0, 0)
  }

  turnOff() {
    this.timePoints = generateTimes(10000,0)
  }

  getProps() {

    const timeFunction = this.timePoints.length !== 0? linearInterpolation(this.timePoints) : (t) => t

    const props ={
      points: this.points,
      strokeWidth: this.width,
      signal: this.signal,
      transform: this.transform,
      fill: this.fill,
      circle: this.circle.getProps(),
      text: this.text.getProps(),
      timeFunction: timeFunction

    } 

    return props
  }
}

export {Norgate}



