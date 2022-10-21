import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'
import {makeArc} from '../../utils/util'

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

class Orgate extends Polygon{
  constructor() {
    super(points)
    this.transform = {}
    this.width     = 6
    this.fill      = '#3a7335'
    this.text      = new Text({x: 15, y: 2}, 'OR')
    this.connectors = {input: {a: {x:0, y:-15}, b: {x:0, y:15}}, output: {x: a, y: 0}}

    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
  }

  setSecondaries() {
    this.text.signal = this.signal
  }


  getProps() {

    const props ={
      points: this.points,
      strokeWidth: this.width,
      signal: this.signal,
      transform: this.transform,
      fill: this.fill,
      text: this.text.getProps(),
    } 

    return props
  }
}

export {Orgate}



