import {durationInFrames as duration} from '../constants'
import {sigmoid}                      from '../utils/functions'
import {Point}                        from '../types'

class TimePoint {

  keyframes: Array<{t: number, x: number, y: number}>
  /**
   * The array of points that represents the position over time.
   * The array index represents the time in frames.
   */
  values: Point[]
  c: number

  /**
   * Represents a point in time. 
   * The positions are stored in an array of points. 
   * The array index represents the time in frames.
   * Add keyframes to it to create a path along time and space. 
   * The path gets eased using a sigmoid function.
   */
  constructor(x : number = 0, y : number = 0) {
    this.keyframes = []
    this.values = Array.from({length: duration}, () => ({x, y}))
    this.c = .2
  }

  /** 
   * 
   */
  setKeyframe(t: number, x: number, y: number) {
    this.keyframes.push({t, x, y})
    this.setValues(t, x, y)
    this.ease(t, x, y)
  }

  setValues(t: number, x: number, y: number) {
    this.values.fill({x, y}, t)
  }
  
  ease(t0: number, x1: number, y1: number){
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