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
    conduction: 40,
    input1:      0,
    input2:      20,
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




