import {cloneDeep} from 'lodash'
import {Notgate} from '../Notgate/Notgate'
import {Conduction} from '../Conduction.js'
import {points} from './points'

class Orgate {
  constructor() {
    this.transform   = {}
    this.notgate1    = new Notgate()
    this.notgate2    = new Notgate()
    this.conduction1 = new Conduction(points.conduction1)
    this.conduction2 = new Conduction(points.conduction2)
    this.conduction3 = new Conduction(points.conduction3)
    this.conduction4 = new Conduction(points.conduction4)

    this.tInput1     = 0
    this.tInput2     = 0
    this.tConduction = 0
  }

  setColor(color){
    console.log('setColor', color)
  }

  setSecondaries() {

    const transform1 = cloneDeep(this.transform)
    const transform2 = cloneDeep(this.transform)
    transform1.translation.x += points.notgate1.y
    transform1.translation.y -= points.notgate1.x
    transform2.translation.x += points.notgate2.y
    transform2.translation.y -= points.notgate2.x

    this.notgate1.transform    = transform1
    this.notgate2.transform    = transform2
    this.conduction1.transform = this.transform
    this.conduction2.transform = this.transform
    this.conduction3.transform = this.transform
    this.conduction4.transform = this.transform

    this.notgate1.t0 = this.tInput1
    this.notgate2.t0 = this.tInput2

    this.conduction1.signal.t0 = this.tInput1 + this.tConduction
    this.conduction2.signal.t0 = this.tInput1 + this.tConduction
    this.conduction2.setSecondaries()
    this.conduction1.setSecondaries()

    this.notgate1.t1 = this.tConduction + this.conduction1.travelTime
    this.notgate2.t1 = this.tConduction + this.conduction2.travelTime
    this.notgate1.setSecondaries()
    this.notgate2.setSecondaries()

    this.conduction3.signal.t0 = this.notgate1.t1 + this.notgate1.conduction.travelTime
    this.conduction4.signal.t0 = this.notgate2.t1 + this.notgate2.conduction.travelTime
    this.conduction3.setSecondaries()
    this.conduction4.setSecondaries()
  }

  getProps() {

    const props = {
      notgate1: this.notgate1.getProps(),
      notgate2: this.notgate2.getProps(),
      conduction1: this.conduction1.getProps(),
      conduction2: this.conduction2.getProps(),
      conduction3: this.conduction3.getProps(),
      conduction4: this.conduction4.getProps(),
    }

    return props
  }
}

export {Orgate}