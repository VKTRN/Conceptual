import {cloneDeep} from 'lodash'
import {Notgate} from '../Notgate/Notgate'
import {Orgate} from '../Orgate/Orgate'
import {Conduction} from '../Conduction.js'
// import {points} from './points'

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
      
      const transform = cloneDeep(this.transform)
      transform.translation.x += points.notgate.y
      transform.translation.y -= points.notgate.x
      transform.rotation += Math.PI/2
  
      this.notgate.transform = transform
      this.orgate.transform  = this.transform
  
      this.notgate.t0 = this.tInput1
      
      this.orgate.tConduction = this.tConduction
      this.orgate.tInput1 = this.tInput1
      this.orgate.tInput2 = this.tInput2
      this.orgate.setSecondaries()

      const travelTime = this.orgate.conduction1.travelTime + this.orgate.conduction3.travelTime + this.orgate.notgate1.conduction.travelTime
  
      this.notgate.t0 = this.tConduction + travelTime
      this.notgate.t1 = this.notgate.t0 + 40

      this.notgate.setSecondaries()
  }

  getProps() {
    return {
      transform: this.transform,
      notgate: this.notgate.getProps(),
      orgate: this.orgate.getProps(),
    }
  }
}

export {Norgate}