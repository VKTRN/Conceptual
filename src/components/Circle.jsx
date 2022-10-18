import {useCurrentFrame} from 'remotion'

export const Circle = ({position, radius, signal, fill, strokeWidth}) => {

	const t = useCurrentFrame()
	const color = signal.color(t, signal.t0)

	return <circle cx={position.x} cy={position.y} r={radius} fill = {fill} stroke = {color} strokeWidth = {strokeWidth}/>
}