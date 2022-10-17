import {useCurrentFrame} from 'remotion'

export const Circle = ({position, radius, signal, strokeWidth}) => {

	const t = useCurrentFrame()
	const color = signal.color(t, signal.t0)

	return <circle cx={position.x} cy={position.y} r={radius} fill = 'none' stroke = {color} strokeWidth = {strokeWidth}/>
}