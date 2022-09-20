import {getPoints}         from './points'
import {transformPoints}   from '../../utils/util'
import {config as config_} from './config'

const makeNotGate = (tInput, tTransistor, tConduction, rotation, scale, x,y, config = config_) => {

  const newPoints      = getPoints(config.conduction.width/2, config.input.length)
  const translation    = {x,y}
  const transform      = {rotation, scale, translation}
  const s              = scale

  const conduction     = {
    points:       transformPoints(newPoints.conduction, transform), 
    strokeWidth:  config.conduction.width*s, 
    signal:       {
                    t0:    tConduction, 
                    color: config.conduction.color
                  }, 
    velocity:     config.conduction.velocity*s
  }
  
  const input          = {
    points:       transformPoints(newPoints.input, transform),      
    strokeWidth:  config.input.width*s,      
    signal:       {
                    t0:    tInput, 
                    color: config.input.color
                  },      
    velocity:     config.input.velocity*s
  }
  
  const transistor     = {
    points:       transformPoints(newPoints.transistor, transform), 
    strokeWidth:  config.transistor.width*s, 
    signal:       {
                    t0:    tTransistor, 
                    color: config.transistor.color
                  }
  }

  const notGate = {conduction, input, transistor}

  return notGate
}

export {makeNotGate}