/* 
The highest level file that actually creates the rest of the website. Calls the app.
*/

//Grabbing the react components and app to properly generate the website.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//Creating the website.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
