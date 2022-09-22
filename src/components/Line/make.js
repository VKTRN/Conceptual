import {transformPoints}   from '../../utils/util'
import {config as config_} from './config'
import {cloneDeep}         from 'lodash'

const makeLine = (config) => {

  const line     = {
    points:       transformPoints(config.points, config.transform), 
    strokeWidth:  config.width, 
    signal:       {
                    t0:    10, 
                    color: config.color
                  }, 
    velocity:     config.velocity*1,
    stop:         config.tStop,
  }

  return line
}

export {makeLine}