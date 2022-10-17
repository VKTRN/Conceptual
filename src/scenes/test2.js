import {Notgate as NotgateComp} from '../components/LogicGateSymbols/Notgate'
import {Notgate}                from '../classes/LogicGateSymbols/Notgate'

import {Andgate as AndgateComp} from '../components/LogicGateSymbols/Andgate'
import {Andgate}                from '../classes/LogicGateSymbols/Andgate'



import {cloneDeep} from 'lodash'

import {constant} from '../utils/functions'
import {linear}   from '../utils/functions'
import {sigmoid}  from '../utils/functions'
import {DropShadow} from '../components/DropShadow'

import {yellowStep} from '../utils/util'


const notgate  = new Notgate()
const andgate  = new Andgate()

const x = constant(700)
const y = constant(300)

const signal = {
  color : yellowStep,
  t0 : 40,
}



const transform = {
  translation : {x: x, y: y},
  rotation : constant(0),
  scale : constant(3),
}

notgate.transform = cloneDeep(transform)
andgate.transform = cloneDeep(transform)
notgate.signal    = signal
andgate.signal    = signal

notgate.setSecondaries()
andgate.setSecondaries()

const notgateProps1  = notgate.getProps()
const andgateProps   = andgate.getProps()
notgateProps1.transform.translation.x = constant(1200)
const notgateProps2  = cloneDeep(notgate.getProps())
notgateProps2.transform.translation.x = linear(5)

const Scene = () => {
  return (
    <>
      <DropShadow id = 'notgate'/>
      <DropShadow id = 'andgate'/>
      <NotgateComp {...notgateProps1} />
      <AndgateComp {...andgateProps}/>
    </>
  )
}

export {Scene}