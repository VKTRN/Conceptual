import {getPoints}         from './points'
import {transformPoints}   from '../../utils/util'
import {config as config_} from './config'
import {makeNotGate}       from '../NotGate/make'

const makeAndGate = (tInput, tTransistor, tConduction, rotation, scale, x,y, config = config_) => {

  const newPoints      = getPoints()
  const translation    = {x,y}
  const transform      = {rotation, scale, translation}

  const p1             = transformPoints(newPoints.notgate1, transform)[0]
  const p2             = transformPoints(newPoints.notgate2, transform)[0]

  const notgate1       = makeNotGate(tInput, tTransistor, tConduction,    rotation, scale, p1.x, p1.y, config.notgate1)
  const notgate2       = makeNotGate(tInput, tTransistor, tConduction+73, rotation, scale, p2.x, p2.y,  config.notgate2)

  const andgate = {notgate1, notgate2}

  return andgate
}

export {makeAndGate}