import React from 'react'

export const FileView = ({files, loadData, deleteFile}) => {
  return(
    <div className="file-view">
      {
        files.map((file, i) => {
          return(
            <div onClick={() => loadData(file)} className="file" key={i}>
              <div className="file-name">{file}</div>
              <button onClick={() => deleteFile(file)}>X</button>
            </div>
          )
        })
      }
    </div>
  )
}