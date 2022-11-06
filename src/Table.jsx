import {useCurrentFrame} from 'remotion'
import {dampedSpring} from './utils/interpolation'
import {ease} from './utils/interpolation'

const opacity = (t, t0) => {
  const t1 = t0 + 10
  if (t < t0) return 0
  if (t > t1) return 1
  return (t - t0) / (t1 - t0)
}



export const Table = ({data, timeFunction = (t) => t}) => {

  const t_  = useCurrentFrame()
	const t   = timeFunction(t_)
  const top = dampedSpring(t)

  const highlighting = {top: ease(t_, 0, 20)*20}

  return (
    <div className = 'table'>
      <div className = 'categories'>
        {data.categories.map((category) => (<div className = 'item'>{category}</div>))}
      </div>

      <div className = 'content'>
        {data.values.map((column, i) => (
          <div className = 'row'>
            {column.map((item, j) => (
              <div className = {`item column ${item}`} >
                <div className = {`${item}`} style = {{opacity: `${opacity(t,120+30*((3*i)+j))}`}}>
                  {item}
                </div>
              </div>))}
          </div>
        ))}
      </div>
    </div>
  )
}