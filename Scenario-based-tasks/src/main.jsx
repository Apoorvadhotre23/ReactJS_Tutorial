import { createRoot } from 'react-dom/client'
import CheckBox from './Components/HandlingCheckBox/CheckBox.jsx'
import RadioButton from './Components/HandlingRadioButton/RadioButton.jsx'
import DropDown from './Components/DropDownMenu/DropDown.jsx'
import Clock from './Components/DigitalClock/Clock.jsx'
import StopWatch from './Components/StopWatch/StopWatch.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <CheckBox/>
    <hr />
    <RadioButton/>
    <hr />
    <DropDown/>
    <hr />
    <Clock/>
    <hr />
    <StopWatch/>
    <hr />
  </>,
)
