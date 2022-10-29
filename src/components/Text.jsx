import {useCurrentFrame} from 'remotion'

export const Text = ({text ,position, fontSize, signal, timeFunction = (t) => t}) => {

	const style = {font: `bold ${fontSize}px Rubik, sans-serif`}
	const t_ 	  = useCurrentFrame()
	const t 	  = timeFunction(t_)
	const t0 		= signal.t0
	const color = signal.color(t, t0)

	return <text dominantBaseline="middle"  x={position.x} y={position.y} fill = {color} style = {style} stroke = 'none'>{text}</text>
}