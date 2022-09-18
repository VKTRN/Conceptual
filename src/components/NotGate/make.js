import {getPoints}       from './points'
import {transformPoints} from '../../utils/util'
import {config}          from './config'

const makeNotGate = (t0, t1, t2, rotation, scale, x,y, Config = config) => {

  // t0:       time of input signal
  // t1:       time of transistor signal
  // t2:       time of conduction signal
  // t3:       time of output signal
  // rotation: rotation of the not gate
  // scale:    scale of the not gate
  // x:        x-translation of the not gate
  // y:        y-translation of the not gate

  const newPoints      = getPoints(Config.conduction.width/2, Config.input.length)
  const translation    = {x,y}
  const transform      = {rotation, scale, translation}
  const s              = scale

  const conduction     = {points: transformPoints(newPoints.conduction, transform), strokeWidth: Config.conduction.width*s, signal: {t0:t2, color: Config.conduction.color}, velocity:Config.conduction.velocity*s}
  const input          = {points: transformPoints(newPoints.input, transform),      strokeWidth: Config.input.width*s,      signal: {t0:t0, color: Config.input.color},      velocity:Config.input.velocity*s}
  const transistor     = {points: transformPoints(newPoints.transistor, transform), strokeWidth: Config.transistor.width*s, signal: {t0:t1, color: Config.transistor.color}}

  const notGate = {conduction, input, transistor}

  return notGate
}

export {makeNotGate}