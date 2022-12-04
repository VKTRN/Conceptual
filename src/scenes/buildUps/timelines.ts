import { TimeLine } from "../../classes/TimeLine"
import { TimePoint } from "../../classes/TimePoint"
import { Point } from "../../types"


export const transistorAnimation = (t0: number) => {

  const p1  = new TimePoint()
  const p2  = new TimePoint()
  const p3  = new TimePoint()
  const p4  = new TimePoint()
  
  p1.setKeyframe(0, 0, 0)
  p2.setKeyframe(0, 0, 0)
  p3.setKeyframe(0, 0, 0)
  p4.setKeyframe(0, 0, 0)
   
  p1.setKeyframe(t0, -150, 0)
  p2.setKeyframe(t0,  -50, 0)
  p3.setKeyframe(t0,   50, 0)
  p4.setKeyframe(t0,  150, 0)

  p1.setKeyframe(t0+20, -150,   0)
  p2.setKeyframe(t0+20,  -50, 100)
  p3.setKeyframe(t0+20,   50, 100)
  p4.setKeyframe(t0+20,  150,   0)


  const testPoints = [p1, p2, p3, p4]
  const timeLine   = new TimeLine(testPoints)

  return timeLine
}

export const verticalLineAnimation = (length: number, t1: number) => {
  const p1 = new TimePoint()
  const p2 = new TimePoint()

  p1.setKeyframe(0, 0, 0)
  p2.setKeyframe(0, 0, 0)

  p1.setKeyframe(t1, 0, 0)
  p2.setKeyframe(t1, 0, length)


  const timeLine = new TimeLine([p1, p2])
  return timeLine
}

export const horizontalLineAnimation = (length: number, t1: number) => {
  const p1 = new TimePoint()
  const p2 = new TimePoint()

  p1.setKeyframe(0, 0, 0)
  p2.setKeyframe(0, 0, 0)

  p1.setKeyframe(t1, -length/2, 0)
  p2.setKeyframe(t1, length/2, 0)


  const timeLine = new TimeLine([p1, p2])
  return timeLine
}

export const orgateAnimation = (center: Point) => {

  const a = 600
  const b = 750
  const c = 250

  const t1 = 50
  const t2 = 125

  const {x : cx, y: cy} = center

  const p1   = new TimePoint()
  const p2   = new TimePoint()
  const p3   = new TimePoint()
  const p4   = new TimePoint()
  const p5   = new TimePoint()
  const p6   = new TimePoint()

  p1.setKeyframe(0, cx, cy)
  p2.setKeyframe(0, cx, cy)
  p3.setKeyframe(0, cx, cy)
  p4.setKeyframe(0, cx, cy)
  p5.setKeyframe(0, cx, cy)
  p6.setKeyframe(0, cx, cy)

  p1.setKeyframe(t1, cx - b, cy)
  p2.setKeyframe(t1, cx - a, cy)
  p3.setKeyframe(t1, cx - a, cy)
  p4.setKeyframe(t1, cx + a, cy)
  p5.setKeyframe(t1, cx + a, cy)
  p6.setKeyframe(t1, cx + b, cy)

  p1.setKeyframe(t2, cx - b, cy)
  p2.setKeyframe(t2, cx - a, cy)
  p3.setKeyframe(t2, cx - a, cy + c)
  p4.setKeyframe(t2, cx + a, cy + c)
  p5.setKeyframe(t2, cx + a, cy)
  p6.setKeyframe(t2, cx + b, cy)

  const timePoints = [p1, p2, p3, p4, p5, p6]
  const timeLine   = new TimeLine(timePoints)

  return timeLine

}