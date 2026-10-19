import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './Style.css'
import routeVal from './project-router.jsx'
createRoot(document.getElementById('root')).render(routeVal
)
