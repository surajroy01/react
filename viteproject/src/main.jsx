import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import First from './first.jsx'

createRoot(document.getElementById('root')).render(

    // <App />
    // <First/>
    <>
      <h1>One parent element</h1>
      <p>can add more elements inside a fargment</p>
    </>
)
