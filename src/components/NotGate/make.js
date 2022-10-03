import {getPoints}         from './points'
import {transformPoints}   from '../../utils/util'
import {getRoundedPath}    from '../../utils/util'
import {getTravelTime}     from '../../utils/util'

const makeNotGate = (config) => {

  const points         = getPoints(config.conduction.width/2, config.input.length)
  const s              = config.transform.scale
  const conduction_    = getRoundedPath(transformPoints(points.conduction, config.transform), 30)
  const input_         = getRoundedPath(transformPoints(points.input,      config.transform), 30)
  const transistor_    = getRoundedPath(transformPoints(points.transistor,  config.transform), 30)

  const deltaTinput    = getTravelTime(input_, config.velocity)

  const conduction     = {
    points:       conduction_, 
    strokeWidth:  config.conduction.width*s, 
    velocity:     config.velocity*s,
    signal:       {
      color: config.conduction.signal.color,
      t0:    config.timings.conduction
    },
    stop:         config.conduction.tStop,
  }
  
  const input          = {
    points:       input_,      
    strokeWidth:  config.input.width*s,      
    velocity:     config.velocity*s,
    signal:       {
      color: config.input.signal.color,
      t0:    config.timings.input
    },      
  }
  
  const transistor     = {
    points:       transistor_, 
    strokeWidth:  config.transistor.width*s, 
    signal:       {
      color: config.transistor.signal.color,
      t0:    config.timings.input + deltaTinput
    },
  }

  const notGate = {conduction, input, transistor}

  return notGate
}

export {makeNotGate}