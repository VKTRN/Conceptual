import {useCurrentFrame} from 'remotion';
import {interpolate}     from 'remotion';
import {Easing}          from 'remotion';
import {signalLength}    from '../constants';
import {signalVelocity}  from '../constants';
import {clone}           from '../utils/util';
import {getTotalLength}  from '../utils/util';

export const Line = ({points, signal, strokeWidth, style}) => {

	const t0 		= signal.t0
	const t     = useCurrentFrame()
	const color = signal.color(t, t0)
	
	return(
		<polyline  points={getPolyline(points)} fill='none'  stroke={color} strokeWidth={strokeWidth} style = {style}/>
	)
}

const smoothStepUp = (t, t0) => {
	const dt = 10
	if (t <= t0) {
		return 0
	}
	if (t >= t0 + dt) {
		return 1
	}
	return (t-t0)/dt
}

const smoothStepDown = (x) => {
	if (x <= 0) {
		return 1
	}
	if (x >= 1) {
		return 0
	}
	return 1-x*x*(3-2*(1-x))
}

const colorFunction = (v) => {
	return `rgb(${v}, ${v}, 0)`
}

const getPolyline = (points) => {
	const polyline = []
	for (let i = 0; i < points.length; i++) {
		polyline.push(`${points[i].x},${points[i].y}`)
	}
	return polyline.join(' ')
}

const yellowStep = (t, t0) => {
	const v = smoothStepUp(t, t0) * 255
	return colorFunction(v)
} 