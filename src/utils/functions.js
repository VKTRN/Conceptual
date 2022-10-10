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