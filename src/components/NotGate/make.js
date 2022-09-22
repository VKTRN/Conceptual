import {getPoints}         from './points'
import {transformPoints}   from '../../utils/util'

// const makeNotGate = (tInput, tTransistor, tConduction,tStop, rotation, scale, x,y, config = config_) => {


const makeNotGate = (config) => {

  const points         = getPoints(config.conduction.width/2, config.input.length)
  const s              = config.transform.scale

  const conduction     = {
    points:       transformPoints(points.conduction, config.transform), 
    strokeWidth:  config.conduction.width*s, 
    signal:       config.conduction.signal,
    velocity:     config.velocity*s,
    stop:         config.conduction.tStop,
  }
  
  const input          = {
    points:       transformPoints(points.input, config.transform),      
    strokeWidth:  config.input.width*s,      
    signal:       config.input.signal,      
    velocity:     config.velocity*s
  }
  
  const transistor     = {
    points:       transformPoints(points.transistor, config.transform), 
    strokeWidth:  config.transistor.width*s, 
    signal:       config.transistor.signal,
  }

  const notGate = {conduction, input, transistor}

  return notGate
}

export {makeNotGate}