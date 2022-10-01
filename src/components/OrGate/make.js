import {cloneDeep}                 from 'lodash'
import {points as points_}         from './points'
import {transformPoints}           from '../../utils/util'
import {makeNotGate}               from '../NotGate/make'
import {config as notGateDefault_} from '../NotGate/config'
import {overwrite}                 from '../../utils/util'
import {getRoundedPath}            from '../../utils/util'

const makeOrGate = (config) => {

  const points       = cloneDeep(points_)
  const conduction1_ = getRoundedPath(transformPoints(points.conduction1, config.transform), 30)  
  const conduction2_ = getRoundedPath(transformPoints(points.conduction2, config.transform), 30) 
  const conduction3_ = getRoundedPath(transformPoints(points.conduction3, config.transform), 30) 
  const conduction4_ = getRoundedPath(transformPoints(points.conduction4, config.transform), 30) 
  const notgate1_    = transformPoints(points.notGate1,    config.transform)
  const notgate2_    = transformPoints(points.notGate2,    config.transform)

  const notgate1Default = cloneDeep(notGateDefault_)
  const notgate2Default = cloneDeep(notGateDefault_)

  const s = config.transform.scale

  const notgate1Change  = {
    transform: {...config.transform, translation:notgate1_[0]},
    velocity: config.velocity,
    
    timings: {
      conduction: config.timings.notgate1,
      input:      config.timings.input1,
      transistor: config.timings.transistor1,
    },
  }
  
  const notgate2Change  = {
    transform: {...config.transform, translation:notgate2_[0]},
    velocity: config.velocity,

    timings: {
      conduction: config.timings.notgate2,
      input:      config.timings.input2,
      transistor: config.timings.transistor2,
    },
  }

  const conduction1     = {
    points:       conduction1_, 
    signal:      {
      color: config.signal.color,
      t0: config.timings.conduction1,
    } ,
    strokeWidth : config.width1*s,
    velocity:    config.velocity,
  }
  
  const conduction2     = {
    points:       conduction2_, 
    signal:      {
      color: config.signal.color,
      t0: config.timings.conduction2,
    } ,
    strokeWidth:  config.width1*s,
    velocity:     config.velocity,
  }
  
  const conduction3     = {
    points:       conduction3_, 
    signal:      {
      color: config.signal.color,
      t0: config.timings.conduction3,
    } ,
    strokeWidth : config.width1*s,
    velocity:    config.velocity,
  }
  
  const conduction4     = {
    points:       conduction4_, 
    signal:      {
      color: config.signal.color,
      t0: config.timings.conduction4,
    } ,
    strokeWidth : config.width1*s,
    velocity:    config.velocity,
  }

  const notgate1New = overwrite(notgate1Default, notgate1Change)
  const notgate1    = makeNotGate(notgate1New)
  
  const notgate2New = overwrite(notgate2Default, notgate2Change)
  const notgate2    = makeNotGate(notgate2New)

  return {conduction1, conduction2, conduction3, conduction4, notgate1, notgate2}
}

export {makeOrGate}