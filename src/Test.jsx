import {useEffect} from 'react'

const style = {
  // filter: 'drop-shadow(0 0 0.5rem #000)',
  // filter: 'grayscale(1) brightness(100)',
  filter: 'hue-rotate(0deg) saturate(0%) brightness(1000%)',
}

// a filter that turns yellow to white
const yellowFilter = {
}

const whiteFilter = {
}

export const Test = () => {

  useEffect(() => {
    const connections = document.querySelector('.connection')
    console.log(connections)
  }, [])


  return (
    <g style = {style}>
        <rect x="900px" y="300px" width="200px" height="200px"  fill = 'rgb(255,255,0)'/>
        <rect x="1300px" y="300px" width="200px" height="200px"  fill = 'black'/>
    </g>
  )
}

