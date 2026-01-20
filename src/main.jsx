import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Error boundary for better debugging
const rootElement = document.getElementById('root')

if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;"><h1>Error: Root element not found</h1><p>Please check the HTML structure.</p></div>'
} else {
  const root = ReactDOM.createRoot(rootElement)

  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
  } catch (error) {
    console.error('Error rendering app:', error)
    root.render(
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Error loading application</h1>
        <p>Please refresh the page or contact support.</p>
        <pre>{error.toString()}</pre>
        <pre>{error.stack}</pre>
      </div>
    )
  }

  // Log when app successfully renders
  console.log('App mounted successfully')
}
