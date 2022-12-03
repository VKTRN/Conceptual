import {getPolyline}           from '../utils/util'
import {translate}             from '../utils/util'
import {lerpPolyline}          from '../utils/functions'
import {getInterpolationIndex} from '../utils/functions'
import {Point}                 from '../types'
import {TimePoint}             from './TimePoint'   

class TimeLine {

  values: Point[][]

  constructor(timePoints: TimePoint[]) {
    this.values  = getPolyline(timePoints)
  }

  lerp(s: number) {
    const timePoint = this.values.map((line, i) => {
      return lerpPolyline(line, s)
    })

    return timePoint
  }

  insert(timeLine: TimeLine, s: number) {
    const p = this.lerp(s)
    const l = this.values.length
    const v = this.values[l-1]
    const i = getInterpolationIndex(v, s)

    const newConductionTimeline = this.values.map( (points, index) => {
      const ps = translate(timeLine.values[index], p[index].x, p[index].y)
      points.splice(i,0,...ps)
      return points
    } )

    this.values = newConductionTimeline
  }

  translate(p: Point[]) {
    const newValues = this.values.map( (points, i) => {
      const translatedPoints = translate(points, p[i].x, p[i].y)
      return translatedPoints
    } )

    this.values = newValues
  }
  
}

export {TimeLine}