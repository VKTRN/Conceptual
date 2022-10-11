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
      
      const transform1 = cloneDeep(transform)
      transform1.translation.x += points.notgate.x
      transform1.translation.y += points.notgate.y
      transform1.rotation = constant(90)
  
      this.notgate.transform = transform1

      this.notgate.tInput     = this.tInput1
      this.orgate.tConduction = this.tConduction
      this.orgate.tInput1     = this.tInput1
      this.orgate.tInput2     = this.tInput2
      this.orgate.setSecondaries()

      const travelTime         = this.orgate.conduction1.travelTime + this.orgate.conduction3.travelTime + this.orgate.notgate1.conduction.travelTime
      this.notgate.tInput      = this.tConduction + travelTime
      this.notgate.tConduction = this.notgate.tInput + 40

      this.notgate.setSecondaries()
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

    return {
      notgate: this.notgate.getProps(),
      orgate: this.orgate.getProps(),
      transform: this.transform
    }
  }
}

export {Norgate}