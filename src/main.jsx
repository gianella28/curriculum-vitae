import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { CurriculumApp } from './CurriculumApp.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CurriculumApp />
    </BrowserRouter>
  </React.StrictMode>,
)
