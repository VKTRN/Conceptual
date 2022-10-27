import {cloneDeep}  from 'lodash'
import {Notgate}    from '../Notgate/Notgate'
import {Conduction} from '../../Conduction.js'
import {points}     from './points'
import {transform}  from '../../../constants'
import {constant}   from '../../../utils/functions'

import {Andgate} from '../../LogicGateSymbols/Andgate'
import {Notgate} from '../../LogicGateSymbols/Notgate'
import {Orgate} from '../../LogicGateSymbols/Orgate'

import {getConductionFromConnectors} from '../../../utils/util'


class Xorgate {
  constructor() {
    this.transform   = {}

    this.andgate1 = new Andgate()
    this.andgate2 = new Andgate()
    this.notgate  = new Notgate()
    this.orgate   = new Orgate()

    this.conduction1 = new Conduction()
    this.conduction2 = new Conduction()
    this.conduction3 = new Conduction()
    this.conduction4 = new Conduction()
    this.conduction5 = new Conduction()
    this.conduction6 = new Conduction()
    this.conduction7 = new Conduction()
    this.conduction8 = new Conduction()

    this.switchOrder = false
    this.travelTime  = 0 
    this.tInput1     = 0
    this.tInput2     = 0
    this.tConduction = 0
  }

  setColor(color){
    console.log('setColor', color)
  }

  setSecondaries() {

    this.andgate1.transform = {
      translation : {x: constant(200), y: constant(0)},
      rotation : constant(0),
      scale : constant(2),
    }

    this.andgate2.transform = {
      translation : {x: constant(1200), y: constant(200)},
      rotation : constant(0),
      scale : constant(2),
    }

    this.notgate.transform = {
      translation : {x: constant(600), y: constant(0)},
      rotation : constant(0),
      scale : constant(2),
    }

    this.orgate.transform = {
      translation : {x: constant(600), y: constant(400)},
      rotation : constant(0),
      scale : constant(2),
    }



    this.andgate1.setSecondaries()
    this.andgate2.setSecondaries()
    this.notgate.setSecondaries()
    this.orgate.setSecondaries()

    this.conduction1.points = getConductionFromConnectors(this.andgate1.connectors.output, this.notgate.connectors.input, this.andgate1.transform, this.notgate.transform,.5)
    this.conduction2.points = getConductionFromConnectors(this.notgate.connectors.output, this.andgate2.connectors.input.a, this.notgate.transform, this.andgate2.transform,.5)
    this.conduction3.points = getConductionFromConnectors(this.orgate.connectors.output, this.andgate2.connectors.input.b, this.orgate.transform, this.andgate2.transform,.5)
    this.conduction4.points = getConductionFromConnectors({x:0, y:-30}, this.andgate1.connectors.input.a, transform, this.andgate1.transform,.5)
    this.conduction5.points = getConductionFromConnectors({x:0, y:30}, this.andgate1.connectors.input.b, transform, this.andgate1.transform,.5)
    
    this.conduction6.points = getConductionFromConnectors({x:120, y:-30}, this.orgate.connectors.input.a, transform, this.orgate.transform,.9,'y', true)
    this.conduction7.points = getConductionFromConnectors({x:60, y:30}, this.orgate.connectors.input.b, transform, this.orgate.transform,1,'y', true)
    this.conduction8.points = getConductionFromConnectors(this.andgate2.connectors.output, {y:200, x:1600}, this.andgate2.transform, transform,.5)


    this.conduction1.setSecondaries()
    this.conduction2.setSecondaries()
    this.conduction3.setSecondaries()
    this.conduction4.setSecondaries()
    this.conduction5.setSecondaries()
    this.conduction6.setSecondaries()
    this.conduction7.setSecondaries()
    this.conduction8.setSecondaries()

    this.travelTime = 120 
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
      transform: this.transform,
      switchOrder: this.switchOrder,
      andgate1: this.andgate1.getProps(),
      andgate2: this.andgate2.getProps(),
      notgate: this.notgate.getProps(),
      orgate: this.orgate.getProps(),
      conduction1: this.conduction1.getProps(),
      conduction2: this.conduction2.getProps(),
      conduction3: this.conduction3.getProps(),
      conduction4: this.conduction4.getProps(),
      conduction5: this.conduction5.getProps(),
      conduction6: this.conduction6.getProps(),
      conduction7: this.conduction7.getProps(),
      conduction8: this.conduction8.getProps(),

    }

    return props
  }
}

export {Xorgate}