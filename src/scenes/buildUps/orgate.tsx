import {Connection}              from '../../components/Connection'
import {Conduction}              from '../../classes/Conduction'
import {horizontalLineAnimation} from './timelines'
import {orgateAnimation}         from './timelines'
import {transistorAnimation}     from './timelines'
import {verticalLineAnimation}   from './timelines'
import                                '../../style.css'

const cx     = 1920/2
const cy     = 1080/2
const center = {x: cx, y: cy}

//////////////////
/// TIMELINES ///
////////////////

const timeLine_conductionUp   = orgateAnimation(center)
const timeLine_conductionDown = orgateAnimation(center)
const semiconductor1          = horizontalLineAnimation(200, 175)
const semiconductor2          = horizontalLineAnimation(200, 190)
const input1                  = verticalLineAnimation(100, 300)
const input2                  = verticalLineAnimation(100, 315)
const timeLine_transistor1    = transistorAnimation(225)
const timeLine_transistor2    = transistorAnimation(240)


timeLine_conductionDown.mirrorVertically(center)

timeLine_conductionUp.insert(timeLine_transistor1, .45)
timeLine_conductionDown.insert(timeLine_transistor2, .55)

const P1 = timeLine_conductionUp.lerp(.5)
const P2 = timeLine_conductionDown.lerp(.5)

input1.translate(P1)
input2.translate(P2)

semiconductor1.translate(P1)
semiconductor2.translate(P2)

///////////////////
/// CONDUCTIONS ///
///////////////////

const conductionUp     = new Conduction(timeLine_conductionUp.values)
const conductionDown   = new Conduction(timeLine_conductionDown.values)
const input1_          = new Conduction(input1.values)
const input2_          = new Conduction(input2.values)
const semiconductor1_  = new Conduction(semiconductor1.values)
const semiconductor2_  = new Conduction(semiconductor2.values)

semiconductor1_.width = 20
semiconductor2_.width = 20

conductionUp.setSecondaries()
conductionDown.setSecondaries()
input1_.setSecondaries()
input2_.setSecondaries()
semiconductor1_.setSecondaries()
semiconductor2_.setSecondaries()

conductionUp.turnOff()
conductionDown.turnOff()
input1_.turnOff()
input2_.turnOff()
semiconductor1_.turnOff()
semiconductor2_.turnOff()

const props_conductionUp   = conductionUp.getProps()
const props_conductionDown = conductionDown.getProps()
const props_input          = input1_.getProps()
const props_input2         = input2_.getProps()
const props_semiconductor1 = semiconductor1_.getProps()
const props_semiconductor2 = semiconductor2_.getProps()

//////////////////
/// COMPONENT ///
////////////////

export const Scene = () => {

  return (
    <>
      <Connection {...props_conductionUp}/>
      <Connection {...props_conductionDown}/>
      <Connection {...props_input}/>
      <Connection {...props_input2}/>
      <Connection {...props_semiconductor1}/>
      <Connection {...props_semiconductor2}/>
    </>
  )
}