import {durationInFrames as duration} from '../constants'
import {screen} from '../constants'
import {diffusion} from '../utils/util'

class Point {
  constructor(x = screen.width/2, y = screen.height/2) {
    this.keyframes = []
    this.timeline  = Array.from({length: duration}, () => ({x, y}))
  }

  setKeyframe(t, x, y) {
    this.keyframes.push({t, x, y})
    this.setTimeline(t, x, y)
  }

  setTimeline(t, x, y) {
    this.timeline.fill({x, y}, t)
  }

  getTimeline() {
    return this.timeline
  }

  diffuse() {
    for (let i = 0; i < 80; i++) {
      this.timeline = diffusion(this.timeline)
    }
  }
}

export {Point}