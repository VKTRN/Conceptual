import {cloneDeep} from 'lodash'
import {Notgate} from '../Notgate/Notgate'
import {Andgate} from '../Andgate/Andgate'
import {Conduction} from '../Conduction.js'
// import {points} from './points'
import {transform}  from '../../constants'

const points = {
  notgate: {x: 250, y: 1200},
}

class Nandgate {
  constructor() {
    this.transform  = {}
    this.notgate    = new Notgate()
    this.andgate     = new Andgate()

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
      transform1.rotation +=90
  
      this.notgate.transform = transform1

      this.notgate.tConduction = this.tInput1
      this.andgate.tConduction = this.tConduction
      this.andgate.tInput1     = this.tInput1
      this.andgate.tInput2     = this.tInput2
      this.andgate.setSecondaries()

      const travelTime         = this.andgate.travelTime
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

    const transform = this.getTransform()

    return {
      notgate: this.notgate.getProps(),
      andgate: this.andgate.getProps(),
      transform
    }
  }
}

export {Nandgate}