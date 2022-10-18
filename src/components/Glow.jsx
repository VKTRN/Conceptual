const glow = {
  filter: 'drop-shadow(0 0 8px rgba(255,200,30,1))',
}

const glowFilter = {
  filter: 'saturate(0) contrast(10)',
 }

export const Glow = ({id}) => {

  return (
    <g style = {glow}>
      <mask id = 'mask'>
      <use  href = {`#${id}`} style = {glowFilter}/>
      </mask>
      <rect  x="0" y="0" width="100%" height="100%" mask = 'url(#mask)'/>
    </g>
  )
}

