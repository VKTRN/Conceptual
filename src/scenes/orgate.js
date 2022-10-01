import {cloneDeep}                 from 'lodash'
import {overwrite}                 from '../utils/util'
import {make}                      from '../utils/util'

import {makeOrGate}                from '../components/OrGate/make'
import {OrGate}                    from '../components/OrGate/OrGate'
import {config as orGateDefault_}  from '../components/OrGate/config'


  ///////////////////////
 /// Default Configs ///
///////////////////////

const orGateDefault = cloneDeep(orGateDefault_)

  ///////////////
 /// Configs ///
///////////////

const orGateConfig = {
  
  transform: {
    translation: {x:1920/2-750,y:500},
    rotation:    -Math.PI/2,
    scale: 1,
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

const orGateProps = make(orGateConfig, orGateDefault, makeOrGate)

const Scene = () => {
  return (
    <>
      <OrGate {...orGateProps} />
    </>
  )
}

export {Scene}




