import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

// Error boundary for better debugging
const rootElement = document.getElementById('root')

console.log('main.jsx: Starting app initialization')
console.log('main.jsx: Root element:', rootElement)

if (!rootElement) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="padding: 20px; font-family: sans-serif;"><h1>Error: Root element not found</h1><p>Please check the HTML structure.</p></div>'
} else {
  const root = ReactDOM.createRoot(rootElement)
  console.log('main.jsx: React root created')

  try {
    console.log('main.jsx: Attempting to render app')
    root.render(
      <React.StrictMode>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </React.StrictMode>
    )
    console.log('main.jsx: App render command sent')
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
