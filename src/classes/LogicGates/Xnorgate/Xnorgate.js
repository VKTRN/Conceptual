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
import {Xorgate} from '../Xorgate/Xorgate'

import {getConductionFromConnectors} from '../../../utils/util'

class Xnorgate {
  constructor() {
    this.transform   = {}

    this.xorgate    = new Xorgate()
    this.notgate    = new Notgate()
    this.conduction = new Conduction([{x: 1295, y: 300}, {x: 1395, y: 300}]) 

    this.tInput1     = 0
    this.tInput2     = 0
  }

  setSecondaries() {

    this.xorgate.transform = {
      translation : {x: constant(100), y: constant(100)},
      rotation : constant(0),
      scale : constant(1),
    }

    this.notgate.transform = {
      translation : {x: constant(1400), y: constant(300)},
      rotation : constant(0),
      scale : constant(2),
    }

    this.conduction.transform = {
      translation : {x: constant(1300), y: constant(300)},
      rotation : constant(0),
      scale : constant(1),
    }

    this.xorgate.setSecondaries()
    this.notgate.setSecondaries()
    this.conduction.setSecondaries()
  }

  falseFalse(t0=0) {
    this.xorgate.falseFalse(t0)
    this.notgate.startAt(t0)
    this.conduction.turnOff()
  }

  falseTrue(t0=0) {
    this.xorgate.falseTrue(t0)
    this.notgate.timePoints = timeTrapez(10,212+t0)
    this.conduction.startAt(209+t0)
  }

  trueFalse(t0=0) {
    this.xorgate.trueFalse(t0)
    this.notgate.timePoints = timeTrapez(10,212+t0)
    this.conduction.startAt(209+t0)
  }

  trueTrue(t0=0) {
    this.xorgate.trueTrue(t0)
    this.conduction.startAt(-1000)
    this.conduction.signalLength = (1000+249+t0) * signalVelocity
    this.notgate.startAt(262+t0)
  }

  getProps() {

    const props = {
      transform: this.transform,
      xorgate: this.xorgate.getProps(),
      notgate: this.notgate.getProps(),
      conduction: this.conduction.getProps(),
    }

    return props
  }
}

export {Xnorgate}