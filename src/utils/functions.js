import {durationInFrames} from '../constants.js'
import {signalVelocity} from '../constants.js'

export function constant(c) {
  
  const fn = (t) => c
  
  return fn 
}

export function linear(c) {
  
  const fn = t => c*t
  
  return fn 
}

// export function sigmoid(fMin, fMax, t0, fSlope) {
  
//   const fn = t => {
//     const f = fMin + (fMax - fMin) / (1 + Math.exp(-fSlope*(t-t0)))
//     return f
//   }
  
//   return fn
// }

export const getLength = (p1, p2) => {
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

export const getLengths = (points) => {
	let lengths = []
	for (let i = 0; i < points.length - 1; i++) {
		lengths.push(getLength(points[i], points[i + 1]))
	}
	return lengths
}

export function sigmoid(t, t0, f0, f1, c) {
  return (f1-f0) / (1 + Math.exp(-c*(t-t0))) + f0
}

export function track(p1,p2, t0, t1){
  const fn = linear()
}

export function linearInterpolation(points){
  const intervals = []

  for (let i = 0; i < points.length - 1; i++) {
    const interval = {
      xL: points[i].x,
      xR: points[i+1].x,
      f: interpolate(points[i], points[i+1])
    }
    intervals.push(interval)
  }

  const interpolator = x => {
    const interval = intervals.find((item) => {
      const {xL, xR, f} = item
      
      return xL <= x && x <= xR
    })
    return interval.f(x)
  }

  return interpolator
}

export const interpolate = (p1,p2) => {
  const {x: x1, y: y1} = p1
  const {x: x2, y: y2} = p2
  const m = (y2 - y1) / (x2 - x1)
  const b = y1 - m*x1

  const f = x => m*x + b

  return f
}

export function lerp(p1, p2, t) {

  const x = p1.x + (p2.x - p1.x) * t
  const y = p1.y + (p2.y - p1.y) * t

  return {x, y}
}

export function lerpPolyline(points, t) {
  const n = points.length - 1
  const i = Math.floor(t*n)
  const j = Math.min(i + 1, n)
  const u = n*t - i
  const p = lerp(points[i], points[j], u)
  return p
}

export function timeTrapez(h, dx){
  const p1 = {x: -1000, y: h}
  const p2 = {x: h + dx, y: h}
  const p3 = {x: h + dx + h, y: 0}
  const p4 = {x:10000, y:0}

  const points = [p1, p2, p3, p4]

  return points
} 

export const generateTimes = (t0, dt, tEnd = durationInFrames) => {
  const times = []

  times.push({x: 0, y: dt})
  if (t0 !== 0){times.push({x: t0, y: dt})}
  if (tEnd !== durationInFrames){times.push({x: tEnd, y: dt+tEnd-t0})}
  times.push({x: durationInFrames, y: dt+tEnd-t0})

  return times
}

export const normalize = (values) => {
	const total = values.reduce((acc, curr) => acc + curr, 0)
	return values.map(v => v/total)
}

export const cumulate = (values) => {
	let cumulated = [0]
	let sum = 0
	for (let i = 0; i < values.length; i++) {
		sum += values[i]
		cumulated.push(sum)
	}
	return cumulated
}

export const getCumulatedLengths = (points) => {
  let lengths = getLengths(points)
  return cumulate(lengths)
}

export const getInterpolationIndex = (polyline, s) => {
  const lengths = getLengths(polyline)
  const normalizedLengths = normalize(lengths)
  const normalizedCumulatedLengths = cumulate(normalizedLengths)
  const index = normalizedCumulatedLengths.findIndex((item) => item > s)
  return index
}

