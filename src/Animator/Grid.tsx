import React from 'react'

export const Grid = ({a}) => {
  // this component returns a grid of lines. The distance between the lines is determined by the value of a. 
  return (
    <>
      <defs>
        <pattern id="smallGrid" width={a} height={a} patternUnits="userSpaceOnUse">
          <path d={`M ${a} 0 L 0 0 0 ${a}`} fill="none" stroke="gray" strokeWidth="0.5" />
        </pattern>
        <pattern id="grid" width={a} height={a} patternUnits="userSpaceOnUse">
          {/* <rect width={a*10} height={a*10} fill="url(#smallGrid)" /> */}
          <path d={`M ${a} 0 L 0 0 0 ${a}`} fill="none" stroke="gray" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </>
  )
}