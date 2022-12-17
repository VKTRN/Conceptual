import React              from 'react'
import axios              from 'axios'

import {useState}         from 'react'
import {useEffect}        from 'react'
import {useMemo}          from 'react'
import {TimePoint}        from './classes/TimePoint' 
import {durationInFrames} from './constants'
import {Timeline}         from './Animator/Timeline'
import {Grid }            from './Animator/Grid'
import {FileView}         from './Animator/FileView'
import {AnimatedPoints}   from './Animator/AnimatedPoints'
import {Lines}            from './Animator/Lines'
import {KeyPoints}        from './Animator/KeyPoints'

export type point = {
  x: number
  y: number
}

type pointInTime = {
  t: number
  x: number
  y: number
}

export const App = () => {

  const [frame, setFrame]           = useState(0)
  const [gridSize, setGridSize]     = useState(50)
  const [filename, setFilename]     = useState('')
  const [intervalID, setIntervalID] = useState<NodeJS.Timer>(null)
  const [points, setPoints]         = useState<point[]>([])
  const [fileList, setFileList]     = useState<string[]>([])
  const timePoints                  = useMemo(():TimePoint[] => [], [])

  const handleMousedown = (i: number) => {
    window.onmousemove = (e: MouseEvent) => handleMousemove(e,i)
    window.onmouseup   = handleMouseup
  }
    
  const handleMouseup = () => {
    window.onmousemove = null
  }

  const handleMousemove = (e: MouseEvent,i: number) => {
    const x = e.offsetX
    const y = e.offsetY

    const rx = x % gridSize
    const ry = y % gridSize

    let x_ = 0
    let y_ = 0

    if (rx < gridSize/2) {
      x_ = x - rx
    } else {
      x_ = x + (gridSize - rx)
    }

    if (ry < gridSize/2) {
      y_ = y - ry
    } else {
      y_ = y + (gridSize - ry)
    }
    
    setPoints(prev => {
      const newPoints = [...prev]
      newPoints[i] = { x: x_, y: y_ }
      return newPoints
    })
  }

  const setKeyframe = () => {

    timePoints.forEach((timePoint, i) => {
      timePoint.setKeyframe(frame,points[i].x,points[i].y)
    })
  }

  const stopPlayback = () => {
    clearInterval(intervalID)
    setIntervalID(null)
  }

  const playback = () => {
    const intervalID_ = setInterval(() => {
      setFrame(prev => prev + 1)
    }, 1000/60)

    setIntervalID(intervalID_)
  }

  const addPoint = () => {
    setPoints([...points, { x: 500, y: 500 }])
    timePoints.push(new TimePoint())
  }

  const frameStep = (step: number) => {
    setFrame(prev => prev + step)
  }

  const save = async () =>{
    const keyframes: pointInTime[][] = timePoints.map(timePoint => timePoint.keyframes)
    const res       = await axios.post('http://localhost:3002/', {keyframes, filename})
    
    setFileList(res.data)
  }

  const loadFileList = async () => {
    const res = await axios.get('http://localhost:3002/files')
    const fileList_: string[] = res.data

    setFileList(fileList_)
  }

  const loadData = (fileName: string) => {

    reset()

    axios.get('http://localhost:3002/', {params: {fileName}})
      .then(res => {
        
        const keyframes: pointInTime[][] = res.data

        keyframes.forEach(keyframes_ =>{
          const timePoint = new TimePoint()
          console.log('keyframes_',keyframes_)
          keyframes_.forEach(keyframe => {timePoint.setKeyframe(keyframe.t, keyframe.x, keyframe.y)})
          timePoints.push(timePoint)
        })

        const n = keyframes[0].length-1
        const points_ = keyframes.map(keyframes_ => ({x: keyframes_[n].x, y: keyframes_[n].y}))
        setPoints(points_)
      })
  }

  const reset = () => {
    timePoints.length = 0
    setPoints([])
    loadFileList()
  }

  const deleteFile = (fileName: string) => {
    axios.delete('http://localhost:3002/', {params: {fileName}})
      .then(res => {setFileList(res.data)})
  } 

  useEffect(() => {
    frame === durationInFrames-1 && setFrame(0)
  }, [frame])

  useEffect(() => {
    loadFileList()
  }, [])

  return(
    <div className='app'>
      <h1>Conceptual</h1>
      <div className='container1'>
        <svg className='screen'>
          <Grid a = {gridSize}/>
          <AnimatedPoints timePoints={timePoints} frame={frame}/>
          <Lines timePoints={timePoints} frame={frame}/>
          <KeyPoints points={points} handleMousedown={handleMousedown}/>
        </svg>
        <div className='settings'>
          <button onClick = {addPoint}     >add Point</button>
          <button onClick = {setKeyframe}  >set keyframe</button>
          <button onClick = {playback}     >play</button>
          <button onClick = {stopPlayback} >stop</button>
          <button onClick = {reset}        >reset</button>
          <FileView files={fileList} loadData={loadData} deleteFile={deleteFile}/>
          <div className='frame-step'>
            <button onClick={() => frameStep(-60)}>-60</button>
            <button onClick={() => frameStep(60)}>+60</button>
          </div>
          <div>
            <input type='text' value={filename} onChange={(e) => {setFilename(e.target.value)}}/>
            <button onClick={save}>save</button>
          </div>
          <input type="range" min="25" step={1} max="100" value={gridSize} onChange = {(e) => {setGridSize(+e.target.value)}}/>
        </div>
      </div>

      <Timeline frame = {frame} setFrame = {setFrame}/>
    </div>
  )
}