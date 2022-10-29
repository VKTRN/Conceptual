import {Polygon} from '../Polygon.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'
import {linearInterpolation} from '../../utils/functions'
import {generateTimes} from '../../utils/functions'

const points = [
  {x: 0, y: -50},
  {x: 0, y: 50},
  {x: 100, y: 0},
]

class Buffer extends Polygon{
  constructor() {
    super(points)
    this.transform = {}
    this.width     = 6
    this.fill      = '#733535'
    this.text      = new Text({x: 8, y: 3}, 'Buffer')
    this.t0        = 0
    this.color     = yellowStep
    this.signal    = {t0: this.t0, color: this.color}
    this.timePoints = []

  }

  setSecondaries() {
    this.text.fontSize = 20
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

export {Buffer}