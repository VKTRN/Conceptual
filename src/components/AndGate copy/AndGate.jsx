import {NotGate}    from '../NotGate/NotGate'

export const AndGate = ({notgate1, notgate2}) => {
  return (
    <>
      <NotGate {...notgate1}/>
      <NotGate {...notgate2}/>
    </>
  )
} 