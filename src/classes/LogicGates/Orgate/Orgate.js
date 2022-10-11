import {cloneDeep}  from 'lodash'
import {Notgate}    from '../Notgate/Notgate'
import {Conduction} from '../../Conduction.js'
import {points}     from './points'
import {transform}  from '../../../constants'

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

    const transform1 = cloneDeep(transform)
    const transform2 = cloneDeep(transform)
    transform1.translation.x += points.notgate1.x
    transform1.translation.y += points.notgate1.y

    transform2.translation.x += points.notgate2.x
    transform2.translation.y += points.notgate2.y

    this.notgate1.transform    = transform1
    this.notgate2.transform    = transform2

    this.notgate1.tInput = this.tInput1
    this.notgate2.tInput = this.tInput2

    this.conduction1.signal.t0 = this.tInput1 + this.tConduction
    this.conduction2.signal.t0 = this.tInput1 + this.tConduction
    this.conduction2.setSecondaries()
    this.conduction1.setSecondaries()

    this.notgate1.tConduction = this.tConduction + this.conduction1.travelTime
    this.notgate2.tConduction = this.tConduction + this.conduction2.travelTime
    this.notgate1.setSecondaries()
    this.notgate2.setSecondaries()

    this.conduction3.signal.t0 = this.notgate1.tConduction + this.notgate1.conduction.travelTime
    this.conduction4.signal.t0 = this.notgate2.tConduction + this.notgate2.conduction.travelTime
    this.conduction3.setSecondaries()
    this.conduction4.setSecondaries()
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

    const props = {
      notgate1: this.notgate1.getProps(),
      notgate2: this.notgate2.getProps(),
      conduction1: this.conduction1.getProps(),
      conduction2: this.conduction2.getProps(),
      conduction3: this.conduction3.getProps(),
      conduction4: this.conduction4.getProps(),
      transform: this.transform,
    }

    return props
  }
}

export {Orgate}