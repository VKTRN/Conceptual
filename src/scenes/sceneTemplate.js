import {cloneDeep}                 from 'lodash'
import {overwrite}                 from '../utils/util'

import {makeLine}                  from '../components/Line/make'
import {Line}                      from '../components/Line/Line'
import {config as lineDefault_}    from '../components/Line/config'


  ///////////////////////
 /// Default Configs ///
///////////////////////

const componentDefault   = cloneDeep(componentDefault_)

  ///////////////
 /// Configs ///
///////////////

const p = [
  {x:  0, y: 100},
  {x:  0, y:   0}, 
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

const orGateConfig = {
  
  transform: {
    translation: {x:1920/2-750,y:500},
    rotation:    -Math.PI/2,
  },

  timings: {
    conduction1: 40,
    conduction2: 40,
    conduction3: 228,
    conduction4: 179,
    notgate1:    156,
    notgate2:    106,
    input1:      0,
    input2:      0,
    transistor1: 11,
    transistor2: 11,
  }
}

  ///////////////
 ///////////////
///////////////

const output      = overwrite(lineDefault, outputConfig)
const orgate      = overwrite(orGateDefault, orGateConfig)

console.log('orgate', orgate)

const outputProps = makeLine(output)
const orGateProps = makeOrGate(orgate)

const Scene = () => {
  return (
    <>
      {/* <Line line = {outputProps} /> */}
      <OrGate {...orGateProps} />
    </>
  )
}

export {Scene}


