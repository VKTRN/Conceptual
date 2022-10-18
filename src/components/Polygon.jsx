import {useCurrentFrame} from 'remotion';

const style = {
	strokeLinejoin: 'round'
}

export const Polygon = ({points, signal, strokeWidth, fill = 'none'}) => {

	const t = useCurrentFrame()
	const t0 = signal.t0
	const color = signal.color(t, t0)

	return(
		 <polygon points={getPolygon(points)} fill={fill} stroke={color} strokeWidth={strokeWidth} style = {{...style}}/>
	)
}

const getPolygon = (points) => {
	const polyline = []
	for (let i = 0; i < points.length; i++) {
		polyline.push(`${points[i].x},${points[i].y}`)
	}
	return polyline.join(' ')
}
