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

  falseFalse() {
    this.xorgate.falseFalse()
    this.notgate.startAt(0)
    this.conduction.turnOff()
  }

  falseTrue() {
    this.xorgate.falseTrue()
    this.notgate.timePoints = timeTrapez(10,212)
    this.conduction.startAt(209)
  }

  trueFalse() {
    this.xorgate.trueFalse()
    this.notgate.timePoints = timeTrapez(10,212)
    this.conduction.startAt(209)
  }

  trueTrue() {
    this.xorgate.trueTrue()
    this.conduction.startAt(-1000)
    this.conduction.signalLength = (1000+249) * signalVelocity
    this.notgate.startAt(262)
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