import {cloneDeep}  from 'lodash'
import {Notgate}    from '../Notgate/Notgate'
import {Conduction} from '../../Conduction.js'
import {points}     from './points'
import {transform}  from '../../../constants'
import {signalVelocity}  from '../../../constants'
import {constant}   from '../../../utils/functions'
import {timeTrapez}   from '../../../utils/functions'

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

    this.and1ToNot = new Conduction()
    this.notToAnd2 = new Conduction()
    this.orToAnd2 = new Conduction()
    this.upperInputToAnd = new Conduction()
    this.lowerInputToAnd = new Conduction()
    this.upperInputToOr = new Conduction()
    this.lowerInputToOr = new Conduction()
    this.output = new Conduction()

    this.switchOrder = false
    this.travelTime  = 0 
    this.tInput1     = 0
    this.tInput2     = 0
  }

  setSecondaries() {

    this.andgate1.transform = {
      translation : {x: constant(200), y: constant(0)},
      rotation : constant(0),
      scale : constant(2),
    }

    this.andgate2.transform = {
      translation : {x: constant(1000), y: constant(200)},
      rotation : constant(0),
      scale : constant(2),
    }

    this.notgate.transform = {
      translation : {x: constant(550), y: constant(0)},
      rotation : constant(0),
      scale : constant(2),
    }

    this.orgate.transform = {
      translation : {x: constant(400), y: constant(400)},
      rotation : constant(0),
      scale : constant(2),
    }

    this.andgate1.setSecondaries()
    this.andgate2.setSecondaries()
    this.notgate.setSecondaries()
    this.orgate.setSecondaries()

    this.and1ToNot.points       = getConductionFromConnectors(this.andgate1.connectors.output, this.notgate.connectors.input, this.andgate1.transform, this.notgate.transform,.5)
    this.notToAnd2.points       = getConductionFromConnectors(this.notgate.connectors.output, this.andgate2.connectors.input.a, this.notgate.transform, this.andgate2.transform,.5)
    this.orToAnd2.points        = getConductionFromConnectors(this.orgate.connectors.output, this.andgate2.connectors.input.b, this.orgate.transform, this.andgate2.transform,.71)
    this.upperInputToAnd.points = getConductionFromConnectors({x:0, y:-30}, this.andgate1.connectors.input.a, transform, this.andgate1.transform,.5)
    this.lowerInputToAnd.points = getConductionFromConnectors({x:0, y:30}, this.andgate1.connectors.input.b, transform, this.andgate1.transform,.5)
    this.upperInputToOr.points  = getConductionFromConnectors({x:120, y:-23}, this.orgate.connectors.input.a, transform, this.orgate.transform,.9,'y', true)
    this.lowerInputToOr.points  = getConductionFromConnectors({x:60, y:37}, this.orgate.connectors.input.b, transform, this.orgate.transform,1,'y', true)
    // this.output.points = getConductionFromConnectors(this.andgate2.connectors.output, {y:200, x:1300}, this.andgate2.transform, transform,.5)

    this.and1ToNot.setSecondaries()
    this.notToAnd2.setSecondaries()
    this.orToAnd2.setSecondaries()
    this.upperInputToAnd.setSecondaries()
    this.lowerInputToAnd.setSecondaries()
    this.upperInputToOr.setSecondaries()
    this.lowerInputToOr.setSecondaries()
    // this.output.setSecondaries()


    this.travelTime = 120 
  }

  startAt(t0) {
    this.tInput1 = t0
    this.upperInputToAnd.startAt(t0)
    this.lowerInputToAnd.startAt(t0)
    this.upperInputToOr.startAt(t0+15)
    this.lowerInputToOr.startAt(t0+9)
    this.andgate1.startAt(t0 + 25)
    this.and1ToNot.startAt(t0 + 25)
    this.notgate.startAt(t0 + 50)
    this.notToAnd2.startAt(t0 + 70)
    this.orgate.startAt(t0 + 123)
    this.orToAnd2.startAt(t0 + 153)
    this.andgate2.startAt(t0 + 223)
    // this.output.startAt(t0 + 253)
  }

  falseFalse() {
    this.andgate1.turnOff()
    this.andgate2.turnOff()
    this.orgate.turnOff()
    this.notgate.startAt(0)
    this.and1ToNot.turnOff()
    this.notToAnd2.startAt(0)
    this.orToAnd2.turnOff()
    this.upperInputToAnd.turnOff()
    this.lowerInputToAnd.turnOff()
    this.upperInputToOr.turnOff()
    this.lowerInputToOr.turnOff()
    // this.output.turnOff()
  }

  falseTrue() {
    this.andgate1.turnOff()
    this.andgate2.startAt(189)
    this.orgate.startAt(99)
    this.notgate.startAt(-10)
    this.notToAnd2.startAt(-68)
    this.and1ToNot.turnOff()
    this.orToAnd2.startAt(119)
    this.upperInputToAnd.turnOff()
    this.lowerInputToAnd.startAt(0)
    this.upperInputToOr.turnOff()
    this.lowerInputToOr.startAt(8)
    // this.output.startAt(214)
  }

  trueFalse() {
    this.andgate1.turnOff()
    this.andgate2.startAt(188)
    this.orgate.startAt(98)
    this.notgate.startAt(-10)
    this.notToAnd2.startAt(-68)
    this.and1ToNot.turnOff()
    this.orToAnd2.startAt(118)
    this.upperInputToAnd.startAt(0)
    this.lowerInputToAnd.turnOff()
    this.upperInputToOr.startAt(15)
    this.lowerInputToOr.turnOff()
    // this.output.startAt(214)
  }

  trueTrue() {
    this.upperInputToAnd.startAt(-1000)
    this.upperInputToOr.startAt(-1000)
    this.lowerInputToOr.startAt(8)
    this.lowerInputToAnd.startAt(0)
    this.andgate1.startAt(25)
    this.orgate.startAt(-1000)
    this.notgate.timePoints = timeTrapez(10,170)
    this.notToAnd2.startAt(-1000)
    this.notToAnd2.signalLength = (1000+190) * signalVelocity
    this.and1ToNot.startAt(160)
    this.orToAnd2.startAt(-1000)
    this.andgate2.timePoints = timeTrapez(10,229)
    // this.output.startAt(-1000)
    // this.output.signalLength = (1000+274) * signalVelocity
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
      conduction1: this.and1ToNot.getProps(),
      conduction2: this.notToAnd2.getProps(),
      conduction3: this.orToAnd2.getProps(),
      conduction4: this.upperInputToAnd.getProps(),
      conduction5: this.lowerInputToAnd.getProps(),
      conduction6: this.upperInputToOr.getProps(),
      conduction7: this.lowerInputToOr.getProps(),
      // conduction8: this.output.getProps(),
    }

    return props
  }
}

export {Xorgate}