import {durationInFrames as duration} from '../constants'
import {screen} from '../constants'
import {sigmoid} from '../utils/functions'

class TimePoint {
  constructor(x = 0, y = 0) {
    this.keyframes = []
    this.values  = Array.from({length: duration}, () => ({x, y}))
    this.c = .2
  }

  setKeyframe(t, x, y) {
    this.keyframes.push({t, x, y})
    this.setValues(t, x, y)
    this.ease(t, x, y)
  }

  setValues(t, x, y) {
    this.values.fill({x, y}, t)
  }
  
  ease(t0, x1, y1){
    this.values = this.values.map((point, t) => {
      if(Math.abs(t - t0) > 30) return point
      if(t0 === 0) return point
      const c = this.c
      const x0 = this.values[t0-1].x
      const y0 = this.values[t0-1].y
      const x = sigmoid(t, t0, x0, x1, c)
      const y = sigmoid(t, t0, y0, y1, c)
      return {x, y}
    })
  }

  getValues() {
    return this.values
  }
}

export {TimePoint}