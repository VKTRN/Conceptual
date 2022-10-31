import {cloneDeep} from 'lodash'
import {Notgate} from '../Notgate/Notgate'
import {Orgate} from '../Orgate/Orgate'
import {Conduction} from '../../Conduction.js'
import {transform}  from '../../../constants'
import {constant} from '../../../utils/functions'

const points = {
  notgate: {x: 250, y: 1700},
}

class Norgate {
  constructor() {
    this.transform  = {}
    this.notgate    = new Notgate()
    this.orgate     = new Orgate()

    this.tInput1     = 0
    this.tInput2     = 0
    this.tConduction = 0
  }

  setColor(color){
    console.log('setColor', color)
  }

  setSecondaries() {
      
      const transform1         = cloneDeep(transform)
      transform1.translation.x = constant(points.notgate.x)
      transform1.translation.y = constant(points.notgate.y)
      transform1.rotation      = constant(90)
      this.notgate.transform   = transform1
  
      this.orgate.setSecondaries()
      this.notgate.setSecondaries()

      // this.notgate.tInput     = this.tInput1

      // this.orgate.tConduction = this.tConduction
      // this.orgate.tInput1     = this.tInput1
      // this.orgate.tInput2     = this.tInput2

      // const travelTime         = this.orgate.conduction1.travelTime + this.orgate.conduction3.travelTime + this.orgate.notgate1.conduction.travelTime
      // this.notgate.tInput      = this.tConduction + travelTime
      // this.notgate.tConduction = this.notgate.tInput + 40

  }

  startConduction1At(t0) {
    this.tConduction = t0
    const dt = t0 + this.orgate.travelTime
    this.orgate.startConductionAt(t0)
    this.notgate.startInputAt(dt)
    return this
  }

  startConduction2At(t0) {
    this.notgate.startConductionAt(t0)
    return this
  }

  turnOffNotgate() {
    this.notgate.turnOff()
    return this
  }

  startUpperInputAt(t0) {
    this.orgate.startUpperInputAt(t0)
    return this
  }

  startLowerInputAt(t0) {
    this.orgate.startLowerInputAt(t0)
    return this
  }

  stopOnUpperTransistor() {
    this.orgate.stopOnUpperTransistor()
    return this
  }

  stopOnLowerTransistor() {
    this.orgate.stopOnLowerTransistor()
    return this
  }

  turnOffUpperInput() {
    this.orgate.turnOffUpperInput()
    return this
  }

  turnOffLowerInput() {
    this.orgate.turnOffLowerInput()
    return this
  }

  turnOffNotgateInput() {
    this.notgate.turnOffInput()
    return this
  }

  stopOnRightTransistor() {
    this.notgate.stopOnTransistor()
    return this
  }

  falseFalse() {
    this.orgate.falseFalse()
    this.notgate.false(180)
  }

  falseTrue() {
    this.orgate.falseTrue()
    this.notgate.startInputAt(142)
    this.notgate.startFromTransistor(182)
  }

  trueFalse() {
    this.orgate.trueFalse()
    this.notgate.startInputAt(192)
    this.notgate.startFromTransistor(232)
  }

  trueTrue() {
    this.orgate.trueTrue()
    this.notgate.startInputAt(-1000)
    this.notgate.startFromTransistor(-1000)
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

    return {
      notgate: this.notgate.getProps(),
      orgate: this.orgate.getProps(),
      transform: this.transform
    }
  }
}

export {Norgate}