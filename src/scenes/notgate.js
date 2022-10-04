import {Line as LineComp}           from '../components/Line/Line'

import {makeNotGate}                from '../components/NotGate/make'
import {NotGate}                    from '../components/NotGate/NotGate'
import {config as notGateDefault_}  from '../components/NotGate/config'

import {cloneDeep}                  from 'lodash'
import {overwrite}                  from '../utils/util'

import {Line} from '../classes/Conduction'

  ///////////////////////
 /// Default Configs ///
///////////////////////

const notGateDefault = cloneDeep(notGateDefault_)

  ///////////////
 /// Configs ///
///////////////

const p = [
  {x:  0,  y:  100},
  {x: 0, y:  0}, 
]

const output = new Line()

output.points = p
output.transform.translation.x = 750
output.transform.translation.y = 293
output.setSecondaries()

const notGateConfig = {
  transform: {
    translation: {x:1920/2-250,y:400},
    rotation:    -Math.PI/2,
  },

  timings: {
    input:      0,
    conduction: 40,
    transistor: 11,
  }
}

  ///////////////
 ///////////////
///////////////

const notgate      = overwrite(notGateDefault, notGateConfig)

const outputProps = output.getProps()
const notGateProps = makeNotGate(notgate)

const Scene = () => {
  return (
    <>
      <LineComp line = {outputProps} />
      <NotGate {...notGateProps} />
    </>
  )
}

export {Scene}


