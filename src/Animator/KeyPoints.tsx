import React from 'react'

export const KeyPoints = ({points, handleMousedown}) => {
  return(
    <>
      {
        points.map((point, i) => {
          return (
            <g onMouseDown={() => handleMousedown(i)}>
              <circle key={i} cx={point.x} cy={point.y} r={10} fill='red'/>
              <text style={{userSelect: 'none'}} x={point.x-4} y={point.y+5} fill='white' fontSize={12}>{i}</text>
            </g>
          ) 
          
        })
      }
    </>
  )
}