import {getPoints}       from './points'
import {transformPoints} from '../../utils/util'
import {config as config_}          from './config'

const makeNotGate = (t0, t1, t2, rotation, scale, x,y, config = config_) => {

  // t0:       time of input signal
  // t1:       time of transistor signal
  // t2:       time of conduction signal
  // t3:       time of output signal
  // rotation: rotation of the not gate
  // scale:    scale of the not gate
  // x:        x-translation of the not gate
  // y:        y-translation of the not gate

  const newPoints      = getPoints(config.conduction.width/2, config.input.length)
  const translation    = {x,y}
  const transform      = {rotation, scale, translation}
  const s              = scale

  const conduction     = {points: transformPoints(newPoints.conduction, transform), strokeWidth: config.conduction.width*s, signal: {t0:t2, color: config.conduction.color}, velocity:config.conduction.velocity*s}
  const input          = {points: transformPoints(newPoints.input, transform),      strokeWidth: config.input.width*s,      signal: {t0:t0, color: config.input.color},      velocity:config.input.velocity*s}
  const transistor     = {points: transformPoints(newPoints.transistor, transform), strokeWidth: config.transistor.width*s, signal: {t0:t1, color: config.transistor.color}}

  const notGate = {conduction, input, transistor}

  return notGate
}

export {makeNotGate}