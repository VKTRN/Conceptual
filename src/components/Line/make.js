import {transformPoints}   from '../../utils/util'

const makeLine = (config) => {

  const s = config.transform.scale

  const line     = {
    points:       transformPoints(config.points, config.transform), 
    strokeWidth:  config.width, 
    signal:       config.signal,
    velocity:     config.velocity*s,
    stop:         config.tStop,
  }

  return line
}

export {makeLine}

