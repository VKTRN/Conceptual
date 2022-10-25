import {Element}         from '../Element.js'
import {getPoints}       from './points'
import {Conduction}      from '../../Conduction.js'
import {Transistor}      from '../../Transistor.js'
import {addTransforms}   from '../../../utils/util'
import {linearInterpolation} from '../../../utils/functions'
import {generateTimes}    from '../../../utils/functions'

const points = getPoints(100, 11)

class Notgate {
  constructor() {
    this.transform        = {}
    this.conduction       = new Conduction(points.conduction)
    this.input            = new Conduction(points.input)
    this.transistor       = new Transistor(points.transistor)
    this.tInput           = 0
    this.tConduction      = 0
    this.tStop            = 9999
    // this.stopOnTransistor = false
  }

  setColor(color) {
    this.conduction.signal.color = color
    this.input.signal.color      = color
  }

  setSecondaries() {

    // this.conduction.tStop = this.tStop
    
    this.input.setSecondaries()
    this.conduction.setSecondaries()
    this.transistor.setSecondaries()
    
    
    // this.input.signal.t0      = this.tInput
    // this.transistor.signal.t0 = this.tInput + this.input.travelTime
    // this.conduction.signal.t0 = this.tConduction
  }

  startConductionAt(t0){
    this.tConduction = t0
    this.conduction.timePoints = generateTimes(t0, 0)
    return this
  }

  startInputAt(t0) {
    this.tInput = t0
    this.input.timePoints = generateTimes(t0, 0)
    this.transistor.timePoints = generateTimes(t0 + this.input.travelTime, 0)
    return this
  }

  stopOnTransistor() {
    const tEnd = this.tConduction + this.conduction.travelTime/2
    const times = generateTimes(this.tConduction, 0, tEnd)
    this.conduction.timePoints = times
    return this
  }

  startFromTransistor() {
    const tEnd = this.tConduction + this.conduction.travelTime/2
    const times = generateTimes(this.tConduction, this.conduction.travelTime/2)
    this.conduction.timePoints = times
    return this
  }

  turnOnInput() {
    const times                = generateTimes(0, this.input.travelTime + 10)
    this.input.timePoints      = times
    this.transistor.timePoints = times
    return this
  }

  turnOffInput() {
    const times                = generateTimes(100000, 0)
    this.input.timePoints      = times
    this.transistor.timePoints = times
    return this
  }

  getTransform() {

    if (Object.keys(this.transform).length === 0) {
      return {}
    }
    
    const x         = this.transform.translation.x
    const y         = this.transform.translation.y
    const rotation  = this.transform.rotation
    const s         = this.transform.scale

    const translate = `translate(${x}px, ${y}px)`
    const rotate    = `rotate(${rotation}deg)`
    const scale     = `scale(${s})`
    const transform = `${translate} ${rotate} ${scale}`
    
    return transform
  }

  getProps() {
    
    // const transform = this.getTransform()

    const props = {
      conduction: this.conduction.getProps(),
      input:      this.input.getProps(),
      transistor: this.transistor.getProps(),
      transform:  this.transform,
    }

    return props
  }
}

export {Notgate}


