import {getPoints}         from './points'
import {transformPoints}   from '../../utils/util'
import {config as config_} from './config'
import {makeNotGate}       from '../NotGate/make'

import {config as notGateDefault_} from '../NotGate/config'
import {cloneDeep} from 'lodash'
import {makeNotGate} from '../NotGate/make'

import {overwrite} from '../../utils/util'

const makeAndGate = (config) => {

  const points = getPoints()

  const points1          = transformPoints(points.notgate1, config.transform) 
  const points2          = transformPoints(points.notgate2, config.transform)
  const transform1       = cloneDeep(config.transform)
  const transform2       = cloneDeep(config.transform)
  
  transform1.translation = points1[0]
  transform2.translation = points2[0]
  
  const notgate1Default  = cloneDeep(notGateDefault_)
  const notgate2Default  = cloneDeep(notGateDefault_)

  const notgate1Change   = {
    transform: transform1,
    velocity: config.velocity,
  }
  
  const notgate2Change   = {
    transform: transform2,
    velocity: config.velocity,
  }

  const notgate1New = overwrite(notgate1Default, notgate1Change)
  const notgate2New = overwrite(notgate2Default, notgate2Change)

  const notgate1    = makeNotGate(notgate1New)
  const notgate2    = makeNotGate(notgate2New)

  return {notgate1, notgate2}
}

export {makeAndGate}