import {useCurrentFrame} from 'remotion'

function getTransform(transform, t) {

  console.log(typeof transform.translation?.y)

  if (Object.keys(transform).length === 0) {
    return {}
  }
  
  const x         = transform.translation.x
  const y         = transform.translation.y
  const rotation  = transform.rotation
  const s         = transform.scale

  const translate = `translate(${x(t)}px, ${y(t)}px)`
  const rotate    = `rotate(${rotation(t)}deg)`
  const scale     = `scale(${s(t)})`
  const transformString = `${translate} ${rotate} ${scale}`
  
  return transformString
}

export const Transform = ({children, transform = {}}) => {

  const t = useCurrentFrame()
  const transformString = getTransform(transform, t)

  return (
    <g style = {{transform: transformString}}>
      {...children}
    </g>
  )
} 