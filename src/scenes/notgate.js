import {makeLine}                   from '../components/Line/make'
import {Line}                       from '../components/Line/Line'
import {config as lineDefault_}     from '../components/Line/config'

import {makeNotGate}                from '../components/NotGate/make'
import {NotGate}                    from '../components/NotGate/NotGate'
import {config as notGateDefault_}  from '../components/NotGate/config'

import {cloneDeep}                  from 'lodash'
import {overwrite}                  from '../utils/util'

  ///////////////////////
 /// Default Configs ///
///////////////////////

const lineDefault    = cloneDeep(lineDefault_)
const notGateDefault = cloneDeep(notGateDefault_)

  ///////////////
 /// Configs ///
///////////////

const p = [
  {x:  0,  y:  100},
  {x: 0, y:  0}, 
]

const outputConfig = {
  points: p,
  width:    14, 
  velocity: 4,
  
  transform: {
    translation: {x:760,y:293}
  },

  signal: {
    t0: 47,
  }

}

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

const output       = overwrite(lineDefault, outputConfig)
const notgate      = overwrite(notGateDefault, notGateConfig)

const outputProps  = makeLine(output)
const notGateProps = makeNotGate(notgate)

const Scene = () => {
  return (
    <>
      <Line line = {outputProps} />
      <NotGate {...notGateProps} />
    </>
  )
}

export {Scene}


