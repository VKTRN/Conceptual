import {cloneDeep} from 'lodash'
import {Notgate} from '../Notgate/Notgate'

class Andgate {
  constructor() {
    this.notgate1    = new Notgate()
    this.notgate2    = new Notgate()
    this.tInput1     = 0
    this.tInput2     = 0
    this.tConduction = 0
  }

  setColor(color){
    this.notgate1.setColor(color)
    this.notgate2.setColor(color)
  }

  setSecondaries() {

    const transform1 = cloneDeep(this.transform)
    const transform2 = cloneDeep(this.transform)
    transform2.translation.x += 500

    this.notgate1.transform = transform1
    this.notgate2.transform = transform2
    
    this.notgate1.t0 = this.tInput1
    this.notgate2.t0 = this.tInput2

    this.notgate1.t1 = this.tInput1 + this.tConduction
    this.notgate1.setSecondaries()
    
    this.notgate2.t1 = this.notgate1.t1 + this.notgate1.conduction.travelTime 
    this.notgate2.setSecondaries()


  }

  getProps() {

    const props = {
      notgate1: this.notgate1.getProps(),
      notgate2: this.notgate2.getProps(),
    }

    return props
  }
}

export {Andgate}