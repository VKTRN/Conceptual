import {Connection} from '../Connection'
// import {Line}       from '../Line'
import { v4 as uuidv4 } from 'uuid'

export const Line = ({line}) => {
  return (
    <Connection {...line}/>
  )
}