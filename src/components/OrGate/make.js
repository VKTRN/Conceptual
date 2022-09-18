import {points}          from './points'
import {widths}          from './widths'
import {velocities}      from './velocities'
import {colors}          from './colors'
import {clone}           from '../../utils/util'
import {setTransform}    from '../../utils/util'
import {transformPoints} from '../../utils/util'
import {makeNotGate}     from '../NotGate/make'


const notGateConfig = {widths: widths.notGate, velocities: velocities.notGate, colors:colors.notGate}

const makeOrGate = (t0, t1, t2, rotation, scale, x,y) => {

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
  const transform      = {rotation, scale, translation}
  const {scale: s}     = transform
  const signals        = {}

  signals.conduction1   = {t0:t2, color: colors.conduction}
  signals.conduction2   = {t0:t2, color: colors.conduction}

  signals.conduction3   = {t0:t2+192, color: colors.conduction}
  signals.conduction4   = {t0:t2+142, color: colors.conduction}

  newPoints.conduction1 = transformPoints(newPoints.conduction1, transform)
  newPoints.conduction2 = transformPoints(newPoints.conduction2, transform)
  newPoints.conduction3 = transformPoints(newPoints.conduction3, transform)
  newPoints.conduction4 = transformPoints(newPoints.conduction4, transform)
  newPoints.notGate1    = transformPoints(newPoints.notGate1,    transform)
  newPoints.notGate2    = transformPoints(newPoints.notGate2,    transform)

  const p1 = newPoints.notGate1[0]
  const p2 = newPoints.notGate2[0]

  
  const conduction1 = {points: newPoints.conduction1, strokeWidth: widths.conduction*s, signal: signals.conduction1, velocity:velocities.conduction*s}
  const conduction2 = {points: newPoints.conduction2, strokeWidth: widths.conduction*s, signal: signals.conduction2, velocity:velocities.conduction*s}
  const conduction3 = {points: newPoints.conduction3, strokeWidth: widths.conduction*s, signal: signals.conduction3, velocity:velocities.conduction*s}
  const conduction4 = {points: newPoints.conduction4, strokeWidth: widths.conduction*s, signal: signals.conduction4, velocity:velocities.conduction*s}
  const notGate1    = makeNotGate(t0, t1, t2+119, 1111, rotation, scale,  p1.x, p1.y, notGateConfig)
  const notGate2    = makeNotGate(t0, t1, t2+69, 1111, rotation, scale,  p2.x, p2.y, notGateConfig)

  const orGate        = {conduction1, conduction2,conduction3,conduction4, notGate1, notGate2}

  return orGate
}

export {makeOrGate}