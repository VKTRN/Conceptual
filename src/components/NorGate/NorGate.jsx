import {NotGate}    from '../NotGate/NotGate'
import {OrGate}     from '../OrGate/OrGate'

export const NorGate = ({notgate, orgate}) => {
  return (
    <>
      <NotGate {...notgate}/>
      <OrGate {...orgate}/>
    </>
  )
}