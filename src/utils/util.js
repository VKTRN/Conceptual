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
	return `rgb(${v}, ${v}, 0)`
}

export const yellowStep = (t, t0) => {
	const v = smoothStepUp(t, t0) * 255
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
    return {x: point.x * Math.cos(angle) - point.y * Math.sin(angle), y: point.x * Math.sin(angle) + point.y * Math.cos(angle)}
  })
  return newPoints
}

export const scalePoints = (points, c) => {
  const newPoints = points.map(point => {
    return {x: point.x * c, y: point.y * c}
  })
  return newPoints
}

export const setTransform = (rotation, scale, translation) => {
  const transform = {rotation, scale, translation}
  return transform
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