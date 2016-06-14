import React from 'react'
import ReactDOM from 'react-dom'
import HelloWorld from './components/hello_world.jsx'
import HelloWorldProps from './components/hello_world_props.jsx'
import Counter from './components/counter.jsx'
import FechasMundo from './components/fechas_mundo.jsx'
import ChangeColor from './components/change_color.jsx'

window.onload = function(){
  ReactDOM.render(<Counter /> , document.getElementById('app'))
}
