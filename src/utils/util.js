import {Conduction} from '../classes/Conduction'

export const getTotalLength = (points) => {
  let length = 0
  for (let i = 0; i < points.length - 1; i++) {
    length += Math.sqrt(Math.pow(points[i + 1].x - points[i].x, 2) + Math.pow(points[i + 1].y - points[i].y, 2))
  }
  return length
}

export const getDoubleConnection = (connection) => {
  const connection1 = clone(connection)
  const connection2 = clone(connection)

  const c = (connection.points[3].x < connection.points[0].x) ? -1 : 1

  if(false) {
    connection1.points[0].x -= 5
    connection2.points[0].x += 5
    connection1.points[1].y += 5 * c
    connection2.points[1].y -= 5 * c
    connection1.points[1].x -= 5
    connection2.points[1].x += 5
    connection1.points[2].y += 5 * c
    connection2.points[2].y -= 5 * c
    connection1.points[2].x -= 5
    connection2.points[2].x += 5
    connection1.points[3].x -= 5
    connection2.points[3].x += 5
  }
  else {
    connection1.points[0].y -= 5
    connection2.points[0].y += 5
    connection1.points[1].x += 5 * c
    connection2.points[1].x -= 5 * c
    connection1.points[1].y -= 5
    connection2.points[1].y += 5
    connection1.points[2].x += 5 * c
    connection2.points[2].x -= 5 * c
    connection1.points[2].y -= 5
    connection2.points[2].y += 5
    connection1.points[3].y -= 5
    connection2.points[3].y += 5
  }  

  return {connection1, connection2}
}

export const range = (end) => {
  const arr = []
  for (let i = 0; i < end; i++) {
    arr.push(i)
  }
  return arr
}

export const ones = (end) => {
  const arr = []
  for (let i = 0; i < end; i++) {
    arr.push(1)
  }
  return arr
}

export const clone = (x) => JSON.parse(JSON.stringify(x))

export const maximum = (a,b) => a.map((x,i) => Math.max(x,b[i]))

export const translate = (points,x,y) => {
  const newPoints = points.map(point => {
    return {x: point.x + x, y: point.y + y}
  })
  return newPoints
}

export const scale = (points, c) => {
  const newPoints = points.map(point => {
    return {x: point.x * c, y: point.y * c}
  })
  return newPoints
}

export const smoothStepUp = (t, t0) => {
	const dt = 10
	if (t <= t0) {
		return 0
	}
	if (t >= t0 + dt) {
		return 1
	}
	return (t-t0)/dt
}

export const colorFunction = (v) => {
	return `rgba(${255*v}, ${v*178}, ${v*0})`
}

export const yellowStep = (t, t0) => {
	const v = smoothStepUp(t, t0)
	return colorFunction(v)
} 

export const translatePoints = (points,x,y) => {
  const newPoints = points.map(point => {
    return {x: point.x + x, y: point.y + y}
  })
  return newPoints
}

export const rotatePoints = (points, angle) => {
  const newPoints = points.map(point => {
    return {
      x: point.x * Math.cos(angle) - point.y * Math.sin(angle), 
      y: point.x * Math.sin(angle) + point.y * Math.cos(angle)}
  })
  return newPoints
}

const rotateVector = (v, angle) => {
  return {
    x: v.x * Math.cos(angle) - v.y * Math.sin(angle),
    y: v.x * Math.sin(angle) + v.y * Math.cos(angle)
  }
}

export const scalePoints = (points, c) => {
  const newPoints = points.map(point => {
    return {x: point.x * c, y: point.y * c}
  })
  return newPoints
}

export const transformPoints = (points, transform) => {

  const {rotation, scale, translation} = transform
  const {x,y} = translation

  let transformedPoints = points

  transformedPoints = rotatePoints(transformedPoints, rotation)
  transformedPoints = scalePoints(transformedPoints, scale)
  transformedPoints = translatePoints(transformedPoints, x, y)

  return transformedPoints
}

export const computeTransform = (transform, t) => {
  const translation = {
    x : transform.translation.x(t),
    y : transform.translation.y(t),
  }
  const rotation = transform.rotation(t)
  const scale = transform.scale(t)
  return {translation, rotation, scale}
}

export function isPlainObject(input) {
  return input && !Array.isArray(input) && typeof input === 'object';
}

export const overwrite = (objectA, objectB) => {
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

const getLength = (v) => {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}

const getAngle = (v1, v2) => {
  const dot = v1.x * v2.x + v1.y * v2.y
  const det = v1.x * v2.y - v1.y * v2.x
  return Math.atan2(det, dot)

}

const getVector = (p1, p2) => {
  return {x: p2.x - p1.x, y: p2.y - p1.y}
}

const getPointOnLine = (p, n, l) => {
  const x = p.x + n.x * l
  const y = p.y + n.y * l
  return {x,y}
}

const getUnitVector = (v) => {
  const l = getLength(v)
  return {x: v.x / l, y: v.y / l}
}

const getOrthogonalUnitVector = (v, sign) => {
  const l = -getLength(v)*sign
  return {x: -v.y / l, y: v.x / l}
}

const linspace = (a,b,n) => {
  const arr = []
  const step = (b-a) / (n-1)
  for (let i = 0; i < n; i++) {
    arr.push(a + i * step)
  }
  return arr
}

export function bezier(pL, p, pR, t){
  const x = (1-t)*(1-t)*pL.x + 2*(1-t)*t*p.x + t*t*pR.x
  const y = (1-t)*(1-t)*pL.y + 2*(1-t)*t*p.y + t*t*pR.y
  return {x, y}
}


export const getRoundedPathPoints = (pR, p, pL, radius) => {
  
  const vR     = getVector(p, pR)
  const vL     = getVector(p, pL)
  const nvR    = getUnitVector(vR)
  const nvL    = getUnitVector(vL)
  const alpha  = getAngle(vL, vR)

  const beta   = (Math.PI - Math.abs(alpha)) % Math.PI * Math.sign(alpha)
  const l      = Math.abs(radius / Math.tan(alpha / 2))
  const A      = getPointOnLine(p, nvR, l)
  const B      = getPointOnLine(p, nvL, l)
  const tA     = getOrthogonalUnitVector(nvR, Math.sign(alpha))
  const tB     = getOrthogonalUnitVector(nvL, Math.sign(alpha))
  const C      = getPointOnLine(A, tA, radius)

  const angles = linspace(0, beta, 10)

  const points = angles.map(angle => {
    const t = scaleVector(tA, -1)
    const v = rotateVector(t, angle)
    return getPointOnLine(C, v, radius)
  })

  return points

}

export const getRoundedPathPoints2 = (pR, p, pL, radius) => {
  
  const vR     = getVector(p, pR)
  const vL     = getVector(p, pL)
  const nvR    = getUnitVector(vR)
  const nvL    = getUnitVector(vL)
  const A      = getPointOnLine(p, nvR, radius)
  const B      = getPointOnLine(p, nvL, radius)

  const s = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]

  const points = s.map(t => {
    return bezier(A, p, B, t)
  })


  return points

}

export const getRoundedPath = (points, radius) => {
  
  const path = [points[0]]

  for (let i = 1; i < points.length-1; i++) {
    
    const pR = points[i-1]
    const p  = points[i]
    const pL = points[i+1]

    const length1 = getLength(getVector(pR, p))
    const length2 = getLength(getVector(p, pL))

    const r = Math.min(radius, length1/2, length2/2)

    if (r > 1) {
      const roundedPoints = getRoundedPathPoints2(pR, p, pL, r)
      path.push(...roundedPoints)
    }
  }

  path.push(points[points.length-1])

  return path
}

const scaleVector = (v, c) => {
  return {x: v.x * c, y: v.y * c}
}

export const make = (config, defaultConfig, makeProps) => {
  const overwritten = overwrite(defaultConfig, config)
  const props = makeProps(overwritten)
  return props
}

export const getTravelTime = (length, velocity) => {
  return length/velocity
}

export const addTransforms = (transformA, transformB) => {
  const {rotation: rotationA, scale: scaleA, translation: translationA} = transformA
  const {rotation: rotationB, scale: scaleB, translation: translationB} = transformB
  const rotation = rotationA + rotationB
  const scale = scaleA * scaleB
  const translation = {
    x: translationA.x + translationB.x,
    y: translationA.y + translationB.y
  }
  return {rotation, scale, translation}
}

export function getMiddlePoint(p1, p2){
  return {x: (p1.x + p2.x)/2, y: (p1.y + p2.y)/2}
} 

export function getArc(position, radius, startAngle, endAngle, anticlockwise){
  const start = startAngle
  const end   = endAngle
  const phis  = anticlockwise? linspace(start, end, 30) : linspace(end, start, 30)  

  const points = phis.map(phi => {
    const x = position.x + radius * Math.cos(phi)
    const y = position.y + radius * Math.sin(phi)
    return {x,y}
  })

  return points
}

export function makeArc(p1, p2, distance, flip){
  const middle = getMiddlePoint(p1, p2)
  const v      = getVector(p1, p2)
  const d      = getLength(v)
  const nv     = getUnitVector(v)
  const t      = getOrthogonalUnitVector(nv, flip? -1 : 1)
  const C      = getPointOnLine(middle, t, distance)
  const vr     = getVector(C, p1)
  const r      = getLength(vr) 
  const beta   = 2*Math.asin(d/(2*r))
  const beta0  = Math.atan2(vr.y, vr.x)
  const angles = flip? linspace(beta0, beta0 + beta, 30) : linspace(beta0, beta0 - beta, 30)
  
  const points = angles.map(angle => {
    const x = C.x + r * Math.cos(angle)
    const y = C.y + r * Math.sin(angle)
    return {x,y}
  })

  return points
}

export const generatePointsY = (start, end, offset) => {
	const midY = start.y + (end.y - start.y) * offset
	const points = []
	points.push(start)
	points.push({x: start.x, y: midY})
	points.push({x: end.x, y: midY})
	points.push(end)
	return points
}

export const generatePointsX = (start, end, offset) => {
  if (start.y === end.y) {
    return [start, end]
  }
    
	const midX = start.x + (end.x - start.x) * offset
	const points = []
	points.push(start)
	points.push({x: midX, y: start.y})
	points.push({x: midX, y: end.y})
	points.push(end)
  
	return points
}

export const Lshape = (start, end) => {

  const points = []
  points.push(start)
  points.push({x: start.x, y: end.y})
  points.push(end)
  
	return points
}

export const getConductionFromConnectors = function (connector1, connector2, transform1, transform2, offset, direction='x', lShape=false) {
  const p1_        = transformPoints([connector1], computeTransform(transform1, 0))[0]
  const p2_        = transformPoints([connector2], computeTransform(transform2, 0))[0]
  
  let points

  if (!lShape) {
    points = direction === 'y'? generatePointsY(p1_, p2_, offset) : generatePointsX(p1_, p2_, offset)
  } else {
    points = Lshape(p1_, p2_)
  }

  return points
}

export function diffusion(array){
  const newArray = array.map((point, index) => {
    if(index === array.length - 1 || index === 0) return point
    return {
      x: (array[index-1].x + array[index].x + array[index+1].x)/3,
      y: (array[index-1].y + array[index].y + array[index+1].y)/3
    }
  })
  return newArray
}

export function getPolyline(points){
  const timelines = points.map(point => point.getValues())
  const timeline = []
  for (let i = 0; i < timelines[0].length; i++) {
    const points = []
    for (let j = 0; j < timelines.length; j++) {
      points.push(timelines[j][i])
    }
    timeline.push(points)
  }
  return timeline
}


