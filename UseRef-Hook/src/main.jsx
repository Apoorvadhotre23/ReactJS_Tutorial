import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ClearInput from './Components/ClearInput.jsx'
import ChangeBackground from './Components/ChangeBackground.jsx'
import PreviousValue from './Components/PreviousValue.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <ClearInput/>
    <ChangeBackground/>
    <PreviousValue/>
  </>,
)
