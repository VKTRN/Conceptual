import {cloneDeep}                 from 'lodash'
import {make}                      from '../utils/util'

import {makeNorGate}                from '../components/NorGate/make'
import {NorGate}                    from '../components/NorGate/NorGate'
import {config as norGateDefault_}  from '../components/NorGate/config'

  ///////////////////////
 /// Default Configs ///
///////////////////////

const norGateDefault  = cloneDeep(norGateDefault_)

  ///////////////
 /// Configs ///
///////////////

const x = 100
const y = 500
const rotation = -Math.PI/2
const scale = .8

const norGateConfig = {
  
  transform: {
    translation: {x:x,y:y},
    rotation:    rotation,
    scale: scale,
  },

  timings: {
    conduction1: 40,
    conduction2: 40,
    conduction3: 204,
    conduction4: 163,
    notgate1:    132,
    notgate2:    92,
    input1:      0,
    input2:      0,
    transistor1: 11,
    transistor2: 11,
    notgate3:    255,
    input3:      0,
    transistor3: 11,
  }
}


  ///////////////
 ///////////////
///////////////

const norGateProps = make(norGateConfig, norGateDefault, makeNorGate)

console.log(norGateProps)

const Scene = () => {
  return (
    <>
      <NorGate {...norGateProps} />
    </>
  )
}

export {Scene}




