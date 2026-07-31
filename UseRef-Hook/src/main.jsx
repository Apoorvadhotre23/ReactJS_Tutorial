import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ClearInput from './Components/ClearInput.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ClearInput/>
  </>,
)
