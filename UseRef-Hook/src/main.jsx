import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ClearInput from './Components/ClearInput.jsx'
import ChangeBackground from './Components/ChangeBackground.jsx'
import PreviousValue from './Components/PreviousValue.jsx'
import VideoPlayPause from './Components/VideoPlayPause.jsx'
import UnControlled_Components from './Components/UnControlled_Components.jsx'
import ForwardRef from './Components/Forward_Ref_Example/ForwardRef.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <hr />
    <ClearInput/>
    <hr />
    <ChangeBackground/>
    <hr />
    <PreviousValue/>
    <hr />
    <VideoPlayPause/> 
    <hr />
    <UnControlled_Components/>
    <hr />
    <ForwardRef/>
  </>
)
