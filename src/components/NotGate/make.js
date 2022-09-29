import {getPoints}         from './points'
import {transformPoints}   from '../../utils/util'
import {getRoundedPath}    from '../../utils/util'

const makeNotGate = (config) => {

  const points         = getPoints(config.conduction.width/2, config.input.length)
  const s              = config.transform.scale

  const conduction     = {
    points:       getRoundedPath(transformPoints(points.conduction, config.transform),30), 
    strokeWidth:  config.conduction.width*s, 
    velocity:     config.velocity*s,
    signal:       {
      color: config.conduction.signal.color,
      t0:    config.timings.conduction
    },
    stop:         config.conduction.tStop,
  }
  
  const input          = {
    points:       transformPoints(points.input, config.transform),      
    strokeWidth:  config.input.width*s,      
    velocity:     config.velocity*s,
    signal:       {
      color: config.input.signal.color,
      t0:    config.timings.input
    },      
  }
  
  const transistor     = {
    points:       transformPoints(points.transistor, config.transform), 
    strokeWidth:  config.transistor.width*s, 
    signal:       {
      color: config.transistor.signal.color,
      t0:    config.timings.transistor
    },
  }

  const notGate = {conduction, input, transistor}

  return notGate
}

export {makeNotGate}