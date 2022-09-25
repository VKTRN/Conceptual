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
import {getRoundedPathPoints}       from '../utils/util'
import {getRoundedPath}             from '../utils/util'




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
const lineDefault2 = cloneDeep(lineDefault_)
const notGateDefault = cloneDeep(notGateDefault_)
const andGateDefault = cloneDeep(andGateDefault_)

  ///////////////
 /// Configs ///
///////////////

const p = [{x:0,y:0},{x:100, y:0}, {x: 100,y:100}]

const pathPoints = getRoundedPathPoints(p[0], p[1], p[2], 50)
const path = getRoundedPath(pathPoints)

console.log(path)


const lineConfig = {
  points: path,
  width:    14, 
  velocity: 8,
  tStop:    50,
  transform: {
    translation: {x:300,y:200}
  },
}

const lineConfig2 = {
  points: p,
  width:    14, 
  velocity: 8,
  tStop:    50,
  transform: {
    translation: {x:300,y:200}
  },
}

// const notGateConfig = {
//   transform: {
//     translation: {x:900,y:200}
//   }
// }

// const andGateConfig = {
//   transform: {
//     translation: {x:800,y:300},
//     rotation: -Math.PI/2,
//   }
// }

//   ///////////////
//  ///////////////
// ///////////////

const line1        = overwrite(lineDefault, lineConfig)
const line2        = overwrite(lineDefault2, lineConfig2)
// const notgate1     = overwrite(notGateDefault, notGateConfig)
// const andgate1     = overwrite(andGateDefault, andGateConfig)

const lineProps    = makeLine(line1)
const lineProps2    = makeLine(line2)
// const notGateProps = makeNotGate(notgate1)
// const andGateProps = makeAndGate(andgate1)

const Scene = () => {
  return (
    <>
      <Line line = {lineProps} />
      {/* <Line line = {lineProps2} /> */}
      {/* <NotGate {...notGateProps} /> */}
      {/* <AndGate {...andGateProps} /> */}
    </>
  )
}

export {Scene}


