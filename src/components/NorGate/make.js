import {cloneDeep}                 from 'lodash'
import {transformPoints}           from '../../utils/util'
import {makeNotGate}               from '../NotGate/make'
import {makeOrGate}                from '../OrGate/make'
import {config as notGateDefault_} from '../NotGate/config'
import {config as orGateDefault_}  from '../OrGate/config'
import {overwrite}                 from '../../utils/util'
import {points as points_}         from './points'

const makeNorGate = (config) => {

  const points         = cloneDeep(points_)
  const transform      = config.transform
 
  const notgateDefault = cloneDeep(notGateDefault_)
  const orGateDefault  = cloneDeep(orGateDefault_)

  const notgate_ = transformPoints(points.notgate, transform)
  const orgate_  = transformPoints(points.orgate,  transform)

  const notgateTimings = {
    conduction: config.timings.notgate3,
    input:      config.timings.input3,
    transistor: config.timings.transistor3,
  }

  const orgateTimings = {
    conduction1: config.timings.conduction1,
    conduction2: config.timings.conduction2,
    conduction3: config.timings.conduction3,
    conduction4: config.timings.conduction4,
    notgate1:    config.timings.notgate1,
    notgate2:    config.timings.notgate2,
    input1:      config.timings.input1,
    input2:      config.timings.input2,
    transistor1: config.timings.transistor1,
    transistor:  config.timings.transistor2,
  }    


  const notgateChange = {
    transform: {...config.transform, translation:notgate_[0]},
    timings: notgateTimings,
  }

  const orGateChange = {
    transform: {...config.transform, translation:orgate_[0]},
    timings: orgateTimings,
  }

  const notgateNew = overwrite(notgateDefault, notgateChange)
  const notgate = makeNotGate(notgateNew)

  const orGateNew = overwrite(orGateDefault, orGateChange)
  const orgate = makeOrGate(orGateNew)

  return { notgate, orgate }
}

export {makeNorGate}