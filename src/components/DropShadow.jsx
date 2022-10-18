const shadow = {
  filter: 'drop-shadow(18px 18px 10px rgba(0,0,0,0.6))',
}

const shadowFilter = {
  filter: 'brightness(0) invert(1)'
 }

export const DropShadow = ({id}) => {

  return (
    <g style = {shadow}>
      <mask id = 'mask'>
        <use  href = {`#${id}`} style = {shadowFilter}/>
      </mask>
      <rect  x="0" y="0" width="100%" height="100%" mask = 'url(#mask)'/>
    </g>
  )
}

