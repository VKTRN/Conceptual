import {cloneDeep} from 'lodash'
import {Notgate} from '../Notgate/Notgate'
import {transform} from '../../../constants'
import {constant} from '../../../utils/functions'

class Andgate {
  constructor() {
    this.transform  = {}
    this.notgate1    = new Notgate()
    this.notgate2    = new Notgate()
    this.tInput1     = 0
    this.tInput2     = 0
    this.tConduction = 0
    this.travelTime  = 0
    this.tStop       = 9999
  }

  setColor(color){
    this.notgate1.setColor(color)
    this.notgate2.setColor(color)
  }

  setSecondaries() {
    const transform2 = cloneDeep(transform)
    transform2.translation.y = constant(500)
    this.notgate2.transform = transform2

    // this.notgate1.tStop = this.tStop
    // this.notgate2.tStop = this.tStop
    
    // this.notgate1.tInput = this.tInput1
    // this.notgate2.tInput = this.tInput2

    // this.notgate1.tConduction = this.tConduction
    this.notgate1.setSecondaries()
    
    // this.notgate2.tConduction = this.notgate1.tConduction + this.notgate1.conduction.travelTime 
    this.notgate2.setSecondaries()

    this.travelTime = this.notgate1.conduction.travelTime + this.notgate2.conduction.travelTime
  }

  startConductionAt(t0) {
    this.tConduction = t0
    const dt = this.notgate1.conduction.travelTime
    this.notgate1.startConductionAt(t0)
    this.notgate2.startConductionAt(t0 + dt)
    return this
  }

  startInput1At(t0) {
    this.tInput1 = t0
    this.notgate1.startInputAt(t0)
    return this
  }

  startInput2At(t0) {
    this.tInput2 = t0
    this.notgate2.startInputAt(t0)
    return this
  }

  turnOffInput1() {
    this.notgate1.turnOffInput()
    return this
  }

  turnOffInput2() {
    this.notgate2.turnOffInput()
    return this
  }

  stopOnFirstTransistor() {
    this.notgate1.stopOnTransistor()
    this.notgate2.startConductionAt(10000)
    return this
  }

  stopOnSecondTransistor() {
    this.notgate1.startConductionAt(this.tConduction)
    this.notgate2.stopOnTransistor()
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
      notgate1: this.notgate1.getProps(),
      notgate2: this.notgate2.getProps(),
      transform: this.transform
    }

    return props
  }
}

export {Andgate}