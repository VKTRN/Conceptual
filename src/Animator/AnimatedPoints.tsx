import React from 'react'

export const AnimatedPoints = ({timePoints, frame}) => {

  return(
    <>
      {
        timePoints.map((timePoint, i) => {
          return <circle key={i} cx={timePoint.values[frame].x} cy={timePoint.values[frame].y} r={10} fill='lime' />
        })
      }
    </>
  )

}