import {makeLine}                   from '../components/Line/make'
import {Line}                       from '../components/Line/Line'
import {config as lineDefault_}     from '../components/Line/config'

import {makeAndGate}                from '../components/AndGate/make'
import {AndGate}                    from '../components/AndGate/AndGate'
import {config as andGateDefault_}  from '../components/AndGate/config'

import {cloneDeep}                  from 'lodash'
import {overwrite}                  from '../utils/util'

  ///////////////////////
 /// Default Configs ///
///////////////////////

const lineDefault    = cloneDeep(lineDefault_)
const andGateDefault  = cloneDeep(andGateDefault_)

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

  transform: {
    translation: {x:1420,y:293}
  },
  signal: {
    t0: 181,
  }
}

const andGateConfig = {
  
  transform: {
    translation: {x:1920/2-500,y:400},
    rotation:    -Math.PI/2,
  },

  timings: {
    conduction1: 40,
    conduction2: 113,
    input1:      0,
    input2:      0,
    transistor1: 11,
    transistor2: 11,
  }
}

  ///////////////
 ///////////////
///////////////

const output       = overwrite(lineDefault, outputConfig)
const andgate      = overwrite(andGateDefault, andGateConfig)

const outputProps  = makeLine(output)
const andGateProps = makeAndGate(andgate)

console.log(andGateProps)

const Scene = () => {
  return (
    <>
      <Line line = {outputProps} />
      <AndGate {...andGateProps} />
    </>
  )
}

export {Scene}


