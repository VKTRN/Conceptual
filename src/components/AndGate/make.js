import {points}          from './points'
import {widths}          from './widths'
import {velocities}      from './velocities'
import {colors}          from './colors'
import {clone}           from '../../utils/util'
import {setTransform}    from '../../utils/util'
import {transformPoints} from '../../utils/util'

const makeAndGate = (t0, t1, t2, t3, rotation, scale, x,y) => {

  // t0:       time of input signal
  // t1:       time of transistor signal
  // t2:       time of conduction signal
  // t3:       time of output signal
  // rotation: rotation of the not gate
  // scale:    scale of the not gate
  // x:        x-translation of the not gate
  // y:        y-translation of the not gate

  const newPoints      = clone(points)
  const translation    = {x,y}
  const transform      = setTransform(rotation, scale, translation)
  const {scale: s}     = transform
  const signals        = {}

  signals.input1        = {t0:t0, color: colors.input1}
  signals.input2        = {t0:t0, color: colors.input2}
  signals.transistor1   = {t0:t1, color: colors.transistor1}
  signals.transistor2   = {t0:t1, color: colors.transistor2}
  signals.conduction    = {t0:t2, color: colors.conduction}

  newPoints.conduction = transformPoints(newPoints.conduction, transform)
  newPoints.input1      = transformPoints(newPoints.input1, transform)
  newPoints.input2      = transformPoints(newPoints.input2, transform)
  newPoints.transistor1 = transformPoints(newPoints.transistor1, transform)
  newPoints.transistor2 = transformPoints(newPoints.transistor2, transform)

  const conduction     = {points: newPoints.conduction, strokeWidth: widths.conduction*s, signal: signals.conduction, velocity:velocities.conduction*s}
  const input1          = {points: newPoints.input1,      strokeWidth: widths.input1*s,      signal: signals.input1,      velocity:velocities.input1*s}
  const input2          = {points: newPoints.input2,      strokeWidth: widths.input2*s,      signal: signals.input2,      velocity:velocities.input2*s}
  const transistor1     = {points: newPoints.transistor1, strokeWidth: widths.transistor*s, signal: signals.transistor1}
  const transistor2     = {points: newPoints.transistor2, strokeWidth: widths.transistor*s, signal: signals.transistor2}

  const notGate        = {conduction, input1,input2, transistor1, transistor2}

  return notGate
}

export {makeAndGate}