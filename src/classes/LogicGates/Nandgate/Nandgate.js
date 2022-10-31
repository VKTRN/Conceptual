import {cloneDeep} from 'lodash'
import {Notgate} from '../Notgate/Notgate'
import {Andgate} from '../Andgate/Andgate'
import {Conduction} from '../../Conduction.js'
// import {points} from './points'
import {transform}  from '../../../constants'

import {constant} from '../../../utils/functions'

const points = {
  notgate: {x: 250, y: 1200},
}

class Nandgate {
  constructor() {
    this.transform    = {}
    this.notgate      = new Notgate()
    this.andgate      = new Andgate()

    this.tInput1      = 0
    this.tInput2      = 0
    this.tConduction  = 0
    this.tConduction2 = 0
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
  
      this.andgate.setSecondaries()
      this.notgate.setSecondaries()

      // this.notgate.tConduction = this.tInput1
      // this.andgate.tConduction = this.tConduction
      // this.andgate.tInput1     = this.tInput1
      // this.andgate.tInput2     = this.tInput2

      // const travelTime         = this.andgate.travelTime
      // this.notgate.tInput      = this.tConduction + travelTime
      // this.notgate.tConduction = this.tConduction2
  }

  startFirstInputAt(t0) {
    this.tInput1 = t0
    this.andgate.startInput1At(t0)
    return this
  }

  startSecondInputAt(t0) {
    this.tInput2 = t0
    this.andgate.startInput2At(t0)
    return this
  }

  startConduction1At(t0) {
    this.tConduction = t0
    const dt = t0 + this.andgate.travelTime
    this.andgate.startConductionAt(t0)
    this.notgate.startInputAt(dt)
    return this
  }

  startConduction2At(t0) {
    this.notgate.startConductionAt(t0)
    return this
  }

  turnOffFirstInput() {
    this.andgate.turnOffInput1()
    return this
  }

  turnOffSecondInput() {
    this.andgate.turnOffInput2()
    return this
  }

  startFromFirstTransistor(t0) {
    this.tConduction = t0
    this.andgate.startFromFirstTransistor(t0)
    return this
  }

  startFromSecondTransistor(t0) {
    this.andgate.startFromSecondTransistor(t0)
    this.notgate.startInputAt(t0 + this.andgate.notgate2.conduction.travelTime/2)
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

  stopOnFirstTransistor() {
    this.andgate.stopOnFirstTransistor()
    this.notgate.turnOff()
    return this
  }

  stopOnSecondTransistor() {
    this.andgate.stopOnSecondTransistor()
    this.notgate.turnOff()
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

  startFromRightTransistor(t0) {
    this.notgate.startFromTransistor(t0)
    return this
  }

  getProps() {

    // const transform = this.getTransform()

    return {
      notgate: this.notgate.getProps(),
      andgate: this.andgate.getProps(),
      transform: this.transform
    }
  }
}

export {Nandgate}