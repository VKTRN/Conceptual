import {Polygon} from '../Polygon.js'
import {Text}    from '../Text.js'
import {yellowStep} from '../../utils/util'

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
  }

  setSecondaries() {
    this.text.fontSize = 20
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

export {Buffer}