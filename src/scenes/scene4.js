import {makeLine}                   from '../components/Line/make'
import {Line}                       from '../components/Line/Line'
import {cloneDeep}                  from 'lodash'
import {config as lineDefault_}  from '../components/Line/config'

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

const lineDefault = cloneDeep(lineDefault_)

const lineConfig = {
  points: [{x:0,y:0},{x:300, y:0}, {x: 300,y:300}],
  width:    14, 
  velocity: 8,
  tStop:    50,
  transform: {
    translation: {x:200,y:200}
  }
}

const line1     = overwrite(lineDefault, lineConfig)
const lineProps = makeLine(line1)

const Scene = () => {
  return (
    <>
      <Line line = {lineProps} />
    </>
  )
}

export {Scene}


