import {transformPoints}   from '../../utils/util'
import {config as config_} from './config'
import {cloneDeep}         from 'lodash'

const makeLine = (points,t0,stop, rotation, scale, x,y, config = config_) => {

  const newPoints      = cloneDeep(points)
  const translation    = {x,y}
  const transform      = {rotation, scale, translation}
  const s              = scale

  const line     = {
    points:       transformPoints(newPoints, transform), 
    strokeWidth:  config.width*s, 
    signal:       {
                    t0:    t0, 
                    color: config.color
                  }, 
    velocity:     config.velocity*s,
    stop:         stop,
  }

  return line
}

export {makeLine}