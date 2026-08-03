
import { createRoot } from 'react-dom/client'
import CounterApp from './Components/Custom_Hooks/CounterApp.jsx'
import ToggleApp from './Components/Custom_Hooks/ToggleHook.jsx/ToggleApp.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <CounterApp/>
    <hr />
    <ToggleApp/>
    <hr />
  </>,
)
