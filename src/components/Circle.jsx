import {useCurrentFrame} from 'remotion'

export const Circle = ({position, radius, signal, fill, strokeWidth, timeFunction = (t) => t}) => {

	const t_ 	  = useCurrentFrame()
	const t 	  = timeFunction(t_)

	const color = signal.color(t, signal.t0)

	return <circle cx={position.x} cy={position.y} r={radius} fill = {fill} stroke = {color} strokeWidth = {strokeWidth}/>
}