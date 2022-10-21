// import './style.css';

const data = [
  {category: 'Input A', values: ['true', 'true','false','false']},
  {category: 'Input B', values: ['true', 'false','true','false']},
  {category: 'Output', values: ['false', 'true','true','false']},
]


export const Test = () => {

  return (
    <div className = 'table' >

      <div className = 'categories'>
        {data.map((item) => (<div className = 'item'>{item.category}</div>))}
      </div>

      <div className = 'content'>
        {data.map((column) => (
          <div className = 'column'>
            {column.values.map((item) => (<div className = {`item row ${item}`}>{item}</div>))}
          </div>
        ))}
      </div>
    </div>
  )
}

