import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'
import {makeArc} from '../../utils/util'
import {Circle}  from '../Circle.js'


const a = 90
const b = 70
const c = 100

const p1 = {x: 0, y: 0}
const pc = {x: a, y: b/2}
const p2 = {x: 0, y: b}

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
    this.text      = new Text({x: 12, y: b/2+2}, 'NOR')
    this.circle    = new Circle({x: c, y: b/2}, 7)
    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
  }

  setSecondaries() {
    this.circle.setSecondaries()
    this.circle.signal = this.signal
    this.text.signal = this.signal
  }


  getProps() {

    const props ={
      points: this.points,
      strokeWidth: this.width,
      signal: this.signal,
      transform: this.transform,
      fill: this.fill,
      circle: this.circle.getProps(),
      text: this.text.getProps(),
    } 

    return props
  }
}

export {Norgate}



