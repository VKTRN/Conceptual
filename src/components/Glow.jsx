const shadow = {
  fill: 'rgb(255,178,0)'
}

const shadowFilter = {
  // // filter: 'brightness(0) invert(1)'
  filter: 'saturate(0) contrast(10)',

 }

export const Glow = ({id}) => {

  return (
    <g style = {shadow}>
      <mask id = 'mask'>  
        <use  href = {`#${id}`} style = {shadowFilter}/>
      </mask>
      <rect  x="0" y="0" width="100%" height="100%" mask = 'url(#mask)'/>
    </g>
  )
}

