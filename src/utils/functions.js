export function constant(c) {
  
  const fn = (t) => c
  
  return fn 
}

export function linear(c) {
  
  const fn = t => c*t
  
  return fn 
}