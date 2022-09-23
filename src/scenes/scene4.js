import {makeLine}                   from '../components/Line/make'
import {Line}                       from '../components/Line/Line'
import {config as lineDefault_}     from '../components/Line/config'

import {makeNotGate}                from '../components/NotGate/make'
import {NotGate}                    from '../components/NotGate/NotGate'
import {config as notGateDefault_}  from '../components/NotGate/config'

import {makeAndGate}                from '../components/AndGate/make'
import {AndGate}                    from '../components/AndGate/AndGate'
import {config as andGateDefault_}  from '../components/AndGate/config'

import {cloneDeep}                  from 'lodash'

function isPlainObject(input) {
  return input && !Array.isArray(input) && typeof input === 'object';
}

const overwrite = (objectA, objectB) => {
  for (const key in objectB) {
    if (objectB.hasOwnProperty(key)) {
      const element = objectB[key];
      if (isPlainObject(element)) {
        overwrite(objectA[key], element)
      } else {
        objectA[key] = element
      }
    }
  }
  return objectA
}

const lineDefault    = cloneDeep(lineDefault_)
const notGateDefault = cloneDeep(notGateDefault_)
const andGateDefault = cloneDeep(andGateDefault_)

  ///////////////
 /// Configs ///
///////////////

const lineConfig = {
  points: [{x:0,y:0},{x:300, y:0}, {x: 300,y:300}],
  width:    14, 
  velocity: 8,
  tStop:    50,
  transform: {
    translation: {x:300,y:200}
  },
}

const notGateConfig = {
  transform: {
    translation: {x:300,y:200}
  },
  velocity: 2,
}

const andGateConfig = {
  transform: {
    translation: {x:800,y:300},
    rotation: -Math.PI/2,
  },
  velocity: 2,
}

  ///////////////
 ///////////////
///////////////

const line1        = overwrite(lineDefault, lineConfig)
const notgate1     = overwrite(notGateDefault, notGateConfig)
const andgate1     = overwrite(andGateDefault, andGateConfig)

const lineProps    = makeLine(line1)
const notGateProps = makeNotGate(notgate1)
const andGateProps = makeAndGate(andgate1)

console.log(andGateProps)

const Scene = () => {
  return (
    <>
      <Line line = {lineProps} />
      <NotGate {...notGateProps} />
      <AndGate {...andGateProps} />
    </>
  )
}

export {Scene}


