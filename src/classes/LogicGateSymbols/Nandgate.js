import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'
import {getArc} from '../../utils/util'

const a = 60
const b = 70

const arc = getArc( {x: a, y: 0}, b/2, Math.PI/2, -Math.PI/2, false)


const points = [
  {x: 0, y: -b/2},
  {x: a, y: -b/2},
  ...arc,
  {x: a, y: b/2},
  {x: 0, y: b/2},
]

class Nandgate extends Polygon{
  constructor() {
    super(points)
    this.transform = {}
    this.width     = 6
    this.fill      = '#355073'
    this.text      = new Text({x: 8, y: 2}, 'NAND')
    this.circle    = new Circle({x: 1.75*a, y: 0}, 7)
    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
  }

  setSecondaries() {
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

export {Nandgate}



