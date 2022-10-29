import {Polygon} from '../Polygon.js'
import {Circle}  from '../Circle.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'
import {getArc} from '../../utils/util'
import {linearInterpolation} from '../../utils/functions'
import {generateTimes} from '../../utils/functions'


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

class Andgate extends Polygon{
  constructor() {
    super(points)
    this.transform = {}
    this.width     = 6
    this.fill      = '#355073'
    this.text      = new Text({x: 15, y: 2}, 'AND')
    this.connectors = {input: {a: {x:0, y:-15}, b: {x:0, y:15}}, output: {x: a+b/2, y: 0}}
    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
    this.timePoints = []
  }

  setSecondaries() {
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
      text: this.text.getProps(),
      timeFunction: timeFunction
    } 

    return props
  }
}

export {Andgate}



