import {useCurrentFrame} from 'remotion';

const style = {
	filter: 'drop-shadow(6px 6px 7px rgb(0 0 0 / 0.4))',
	strokeLinejoin: 'round'
}

export const Polygon = ({points, color='yellow', signal, strokeWidth}) => {

	const t = useCurrentFrame()

	return(
		<>
		 <polygon points={getPolygon(points)} fill='none' stroke={color} strokeWidth={strokeWidth} style = {{...style}}/>
		</> 
	)
}

const getPolygon = (points) => {
	const polyline = []
	for (let i = 0; i < points.length; i++) {
		polyline.push(`${points[i].x},${points[i].y}`)
	}
	return polyline.join(' ')
}
