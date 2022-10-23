const shadow = {
  filter: 'drop-shadow(6px 6px 5px rgba(0,0,0,0.6))',
}

const shadowFilter = {
  filter: 'brightness(0) invert(1)'
  // filter: 'saturate(0) contrast(10)',

 }

export const DropShadow = ({id}) => {

  return (
    <g style = {shadow}>
      <mask id = 'mask2'>  
        <use  href = {`#${id}`} style = {shadowFilter}/>
      </mask>
      <rect  x="0" y="0" width="100%" height="100%" mask = 'url(#mask2)'/>
    </g>
  )
}

