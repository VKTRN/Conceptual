import {getPolyline} from '../utils/util'
import {translate} from '../utils/util'
import {lerpPolyline} from '../utils/functions'
import {getInterpolationIndex} from '../utils/functions'

class TimeLine {
  constructor(timePoints) {
    this.values  = getPolyline(timePoints)
  }

  lerp(s) {
    const timePoint = this.values.map((line, i) => {
      return lerpPolyline(line, s)
    })

    return timePoint
  }

  insert(timeLine, s) {
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
  
}

export {TimeLine}