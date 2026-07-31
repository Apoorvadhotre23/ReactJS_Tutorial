import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ClearInput from './Components/ClearInput.jsx'
import ChangeBackground from './Components/ChangeBackground.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ClearInput/>
    <ChangeBackground/>
  </>,
)
