import {useCurrentFrame} from 'remotion'



export const Text = ({text ,position, size, signal}) => {

	const style = {font: 'bold 26px sans-serif'}

	const t = useCurrentFrame()
	const t0 = signal.t0
	const color = signal.color(t, t0)

	return <text dominantBaseline="middle" x={position.x} y={position.y} fill = {color} style = {style} stroke = 'none'>{text}</text>
}