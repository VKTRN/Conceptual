// require('file-loader?name=[name].[ext]!./index.html');
import React      from 'react'
import ReactDOM   from 'react-dom'
import {App} from './Animator'
import               './App.scss'
 
const root = document.getElementById('root')

ReactDOM.render(<App/>, root) 
