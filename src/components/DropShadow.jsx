import { v4 as uuidv4 } from 'uuid'
import {useEffect} from 'react'
import {useState} from 'react'

const style = {
  filter: 'drop-shadow(18px 18px 15px rgba(0,0,0,0.6))',
}

const whiteFilter = {
  filter: 'brightness(0) invert(1)'
 }

export const DropShadow = ({id}) => {

  const [ids, setIds] = useState([])

  let connectionIDs = []

  useEffect(() => {
    const connections = document.querySelectorAll('.connection')
    const connectionsArray = Array.from(connections)
    connectionIDs = connectionsArray.map(connection => `#${connection.id}`) 
    
    setIds(connectionIDs)

      
  }, [])

  return (
    <g style = {style}>

      <mask id = 'mask'>
        <g style = {whiteFilter}>
          <use  href = {`#${id}`} stroke = 'white'/>
        </g>
      </mask>

      <rect  x="0" y="0" width="100%" height="100%" stroke = 'white' fill = 'black'  mask = 'url(#mask)'  />

    </g>
  )
}

