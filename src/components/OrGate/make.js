import {points}            from './points'
import {widths}            from './widths'
import {velocities}        from './velocities'
import {colors}            from './colors'
import {clone}             from '../../utils/util'
import {setTransform}      from '../../utils/util'
import {transformPoints}   from '../../utils/util'
import {makeNotGate}       from '../NotGate/make'
import {config as config_} from './config'

const makeOrGate = (t0, t1, t2, rotation, scale, x,y, config = config_) => {

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
  const s              = scale

  const conduction1   = {points: transformPoints(newPoints.conduction1, transform), strokeWidth: config.conduction.width*s, signal: {t0:t2, color: config.conduction.color}, velocity:config.conduction.velocity*s}
  const conduction2   = {points: transformPoints(newPoints.conduction2, transform), strokeWidth: config.conduction.width*s, signal: {t0:t2, color: config.conduction.color}, velocity:config.conduction.velocity*s}
  const conduction3   = {points: transformPoints(newPoints.conduction3, transform), strokeWidth: config.conduction.width*s, signal: {t0:t2+192, color: config.conduction.color}, velocity:config.conduction.velocity*s}
  const conduction4   = {points: transformPoints(newPoints.conduction4, transform), strokeWidth: config.conduction.width*s, signal: {t0:t2+142, color: config.conduction.color}, velocity:config.conduction.velocity*s}

  const p1 = transformPoints(newPoints.notGate1, transform)[0]
  const p2 = transformPoints(newPoints.notGate2, transform)[0]

  const notGate1      = makeNotGate(t0, t0+86, t2+119,999, rotation, scale, p1.x, p1.y, config.notgate1)
  const notGate2      = makeNotGate(t0, t0+24, t2+69,999, rotation, scale, p2.x,p2.y, config.notgate2)

  const orGate        = {conduction1, conduction2,conduction3,conduction4, notGate1, notGate2}

  return orGate
}

export {makeOrGate}