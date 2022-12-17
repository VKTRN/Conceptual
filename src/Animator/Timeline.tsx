import React from "react"
import {durationInFrames} from "../constants"

export const Timeline = ({frame, setFrame}) => {

  return(
    <div className="timeline">
      <input type="range" min="0" step={1} max={durationInFrames-1} value={frame} onChange = {(e) => {setFrame(+e.target.value)}}/>
      <div>{frame}</div>
    </div>
  )
}