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

export function sigmoid(fMin, fMax, t0, fSlope) {
  
  const fn = t => {
    const f = fMin + (fMax - fMin) / (1 + Math.exp(-fSlope*(t-t0)))
    return f
  }
  
  return fn
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

  console.log(intervals)


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