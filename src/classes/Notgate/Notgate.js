import {Element}         from '../Element.js'
import {getPoints}       from './points'
import {Conduction}      from '../Conduction.js'
import {Transistor}      from '../Transistor.js'

const points = getPoints(100, 11)

class Notgate {
  constructor() {
    this.transform  = {}
    this.conduction = new Conduction(points.conduction)
    this.input      = new Conduction(points.input)
    this.transistor = new Transistor(points.transistor)
    this.t0         = 0
    this.t1         = 0
  }

  setColor(color) {
    this.conduction.signal.color = color
    this.input.signal.color      = color
  }

  setSecondaries() {

    this.conduction.transform = this.transform
    this.input.transform      = this.transform
    this.transistor.transform = this.transform

    this.input.setSecondaries()
    this.conduction.setSecondaries()
    this.transistor.setSecondaries()

    this.input.signal.t0      = this.t0
    this.transistor.signal.t0 = this.t0 + this.input.travelTime
    this.conduction.signal.t0 = this.t1
  }

  getProps() {
    const x         = this.transform.translation.x
    const y         = this.transform.translation.y
    const rotation  = this.transform.rotation
    const s         = this.transform.scale

    const translate = `translate(${x}px, ${y}px)`
    const rotate    = `rotate(${rotation}deg)`
    const scale     = `scale(${s})`
    
    const transform = `${translate} ${rotate} ${scale}` 

    const props = {
      conduction: this.conduction.getProps(),
      input:      this.input.getProps(),
      transistor: this.transistor.getProps(),
      transform:  transform,
    }

    return props
  }
}

export {Notgate}


