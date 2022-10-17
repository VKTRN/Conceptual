import {useEffect} from 'react'

const style = {
  filter: 'drop-shadow(0 0 0.5rem #000)',

}

const whiteFilter = {
 filter: 'brightness(0) invert(1)'
}

export const Test = () => {

  useEffect(() => {
    const connections = document.querySelector('.connection')
    console.log(connections)
  }, [])


  return (
    <g style = {style}>
      {/* <defs> */}
        <g>
          <rect id = 'r1' fill = 'red' x="415" y="415" width="30" height="30"/>
          <rect id = 'r2' fill = 'white' x="430" y="430" width="30" height="30"/>
          <line id = 'l1' x1="415" y1="415" x2="600" y2="600" strokeWidth="20"/>
          <g>
            <rect id = 'r3' fill = 'white' x="445" y="445" width="30" height="30"/>
          </g>
        </g>
      {/* </defs> */}

      <g style = {whiteFilter}>
        <rect x="800px" y="200px" width="200px" height="200px"  fill = 'coral'/>
        <rect x="900px" y="300px" width="200px" height="200px"  fill = 'coral'/>
        <g>
          <rect x="1000px" y="400px" width="200px" height="200px"  fill = 'coral'/>
        </g>
      </g>


        <use href = '#r1' x = '1000px' style = {whiteFilter}/>
      <mask id = 'mask'>
        <use href = '#r2' />
        <use href = '#r3' />
        <g fill = 'white'>
          <use href = '#l1' stroke = 'white' />
        </g>
      </mask>

      

      <rect id = 'screen' x="0" y="0" width="100%" height="100%" fill = 'white' mask = 'url(#mask)'  />

    </g>
  )
}

