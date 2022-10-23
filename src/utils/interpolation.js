import {interpolate} from 'remotion'
import {Easing}      from 'remotion'

export const ease = (frame, start, end) => {
  const r = interpolate(frame, [start, end], [0, 1], {
    easing: Easing.bezier(.5, 0, .5, 1),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })
  
  return r
}

export const linear = (frame, start, end) => {
  const r = interpolate(frame, [start, end], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp"
  })
  
  return r
}

export const bump = (frame, start) => {
  let r = 1

  const dt = 20

  if (frame < start) {return r}
  if (frame > start+dt) {return r}

  const dx = dt/ 2
  const a  = (2*start+dt) / 2
  const b  = .1
  const m  = b/(dx*dx)
  r        = r - m*(frame - a)*(frame - a) + b

  return r
}

export const dampedSpring = (t) => {
  const w = 0.1
  const zeta = 1
  const A = -800
  const omega = Math.sqrt(1 - zeta**2)
  const b = 100
  const y0 = Math.max(A * Math.exp(-zeta * w * t) * Math.cos(omega * w * t), 0.05)
  if (Math.abs(y0) < 0.01) return b
  return y0 + b
} 