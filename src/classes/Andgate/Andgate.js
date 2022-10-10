import {cloneDeep} from 'lodash'
import {Notgate} from '../Notgate/Notgate'
import {transform} from '../../constants'
import {constant} from '../../utils/functions'

class Andgate {
  constructor() {
    this.transform  = {}
    this.notgate1    = new Notgate()
    this.notgate2    = new Notgate()
    this.tInput1     = 0
    this.tInput2     = 0
    this.tConduction = 0
    this.travelTime  = 0
  }

  setColor(color){
    this.notgate1.setColor(color)
    this.notgate2.setColor(color)
  }

  setSecondaries() {

    const transform2 = cloneDeep(transform)
    transform2.translation.y = constant(500)
    this.notgate2.transform = transform2
    
    this.notgate1.tInput = this.tInput1
    this.notgate2.tInput = this.tInput2

    this.notgate1.tConduction = this.tInput1 + this.tConduction
    this.notgate1.setSecondaries()
    
    this.notgate2.tConduction = this.notgate1.tConduction + this.notgate1.conduction.travelTime 
    this.notgate2.setSecondaries()

    this.travelTime = this.notgate1.conduction.travelTime + this.notgate2.conduction.travelTime
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