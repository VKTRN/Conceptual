import {useEffect} from 'react'

const style = {
  filter: 'drop-shadow(0 0 0.5rem #000)',

}

export const Test = () => {

  useEffect(() => {
    const connections = document.querySelector('.connection')
    console.log(connections)
  }, [])


  return (
    <g style = {style}>
      <clipPath id = 'mask'>
        {/* <rect id = 'group' fill = 'coral' x="400" y="400" width="30" height="30"/> */}
        <g id = 'group'>
          <rect fill = 'white' x="415" y="415" width="30" height="30"/>
        </g>      
        {/* <use href="#group"/> */}
      </clipPath>
      <rect id = 'screen' x="0" y="0" width="100%" height="100%" fill = 'white' clipPath = 'url(#mask)'  />

      <use clipPath = 'url(#mask)' href = '#screen'/>
    </g>
  )
}