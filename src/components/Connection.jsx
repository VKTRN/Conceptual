import {useCurrentFrame} from 'remotion';
import {signalLength as signalLength_}    from '../constants';
import {getTotalLength}  from '../utils/util';

export const Connection = ({points, color='black', signal, strokeWidth=12, velocity=8, signalLength = signalLength_, timeFunction = (t) => t, stop=100000}) => {
	
	// const t   = Math.min(useCurrent	Frame(), stop)
	const t_ = useCurrentFrame()
	const t = timeFunction(t_)

	const points_ = points[t]
	const v 	= velocity
	const ls 	= signalLength
	const l 	= getTotalLength(points_)
	const t0a = signal.t0
	
	const t1a = t0a + l/v
	const t0b = t0a + ls/v
	const t1b = t0b + l/v

	const fa  = f(t,t0a,t1a)
	const fb  = f(t,t0b,t1b)

	const ga  = clip(fa)
	const gb  = clip(fb)

	const lengths    = getLengths(points_)
	const normalized = normalize(lengths)
	const cumulated  = cumulate(normalized) 
	
	const ia = getIndex(cumulated, ga)
	const ib = getIndex(cumulated, gb)

	const sa = ga - cumulated[ia]
	const sb = gb - cumulated[ib]

	const na = normalizeVector(points_[ia], points_[ia+1])
	const nb = normalizeVector(points_[ib], points_[ib+1])

	const pa = add(points_[ia], multiply(na, sa*l))
	const pb = add(points_[ib], multiply(nb, sb*l))
	
	const signalPoints = [pa, ...points_.slice(ib+1,ia+1).reverse() ,pb]

	return(
		<>
		 <polyline   points={getPolyline(points[t_])} fill='none' stroke={color} strokeWidth={strokeWidth}/>
		 <polyline  points={getPolyline(signalPoints)} fill='none'    stroke={signal.color} strokeWidth={strokeWidth} />
		</> 
	)
}

const getLength = (p1, p2) => {
	return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2))
}

const getLengths = (points) => {
	let lengths = []
	for (let i = 0; i < points.length - 1; i++) {
		lengths.push(getLength(points[i], points[i + 1]))
	}
	return lengths
}

const getPolyline = (points) => {
	const polyline = []
	for (let i = 0; i < points.length; i++) {
		polyline.push(`${points[i].x},${points[i].y}`)
	}
	return polyline.join(' ')
}

const add = (p1, p2) => {
	return {x: p1.x+p2.x, y: p1.y+p2.y}
}

const multiply = (p,c) => {
	return {x: p.x*c, y: p.y*c}
}

const f = (t,t0,t1) => {
	return (t-t0)/(t1-t0)
}

const clip = (f) => {
	return Math.min(Math.max(f,0),1)
}

const normalize = (values) => {
	const total = values.reduce((acc, curr) => acc + curr)
	return values.map(v => v/total)
}

const cumulate = (values) => {
	let cumulated = []
	let sum = 0
	for (let i = 0; i < values.length; i++) {
		sum += values[i]
		cumulated.push(sum)
	}
	return [0,...cumulated]
}

const getIndex = (cumulated, g) => {
	for (let i = 0; i < cumulated.length-1; i++) {
		if (g <= cumulated[i+1]) {
			return i
		}
	}
	return cumulated.length-2
}

const normalizeVector = (p1, p2) => {
	const length = getLength(p1, p2)
	return {x: (p2.x-p1.x)/length, y: (p2.y-p1.y)/length}
}