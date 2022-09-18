import {points}          from './points'
import {widths}          from './widths'
import {velocities}      from './velocities'
import {colors}          from './colors'
import {clone}           from '../../utils/util'
import {setTransform}    from '../../utils/util'
import {transformPoints} from '../../utils/util'

const config_ = {widths, velocities, colors}

const makeNotGate = (t0, t1, t2, t3, rotation, scale, x,y, config = config_) => {

  // t0:       time of input signal
  // t1:       time of transistor signal
  // t2:       time of conduction signal
  // t3:       time of output signal
  // rotation: rotation of the not gate
  // scale:    scale of the not gate
  // x:        x-translation of the not gate
  // y:        y-translation of the not gate

  const {widths, velocities, colors} = config

  const newPoints      = clone(points)
  const translation    = {x,y}
  const transform      = setTransform(rotation, scale, translation)
  const {scale: s}     = transform
  const signals        = {}

  signals.input        = {t0:t0, color: colors.input}
  signals.transistor   = {t0:t1, color: colors.transistor}
  signals.conduction   = {t0:t2, color: colors.conduction}

  newPoints.conduction = transformPoints(newPoints.conduction, transform)
  newPoints.input      = transformPoints(newPoints.input, transform)
  newPoints.transistor = transformPoints(newPoints.transistor, transform)

  const conduction     = {points: newPoints.conduction, strokeWidth: widths.conduction*s, signal: signals.conduction, velocity:velocities.conduction*s}
  const input          = {points: newPoints.input,      strokeWidth: widths.input*s,      signal: signals.input,      velocity:velocities.input*s}
  const transistor     = {points: newPoints.transistor, strokeWidth: widths.transistor*s, signal: signals.transistor}

  const notGate        = {conduction, input, transistor}

  return notGate
}

export {makeNotGate}