import React from 'react'

type point = {
  x: number
  y: number
}

const getPolyline = (points: point[]) => {
	const polyline = []
	for (let i = 0; i < points.length; i++) {
		polyline.push(`${points[i].x},${points[i].y}`)
	}
	return polyline.join(' ')
}

export const Lines = ({timePoints, frame}) => {
  return (
    <>
      {timePoints.length > 1 && <polyline points={getPolyline(timePoints.map(point => point.values[frame]))} fill='none' stroke='orange' strokeWidth={3}/>}
    </>
  )
}