import { createRoot } from 'react-dom/client'
import CheckBox from './Components/HandlingCheckBox/CheckBox.jsx'
import RadioButton from './Components/HandlingRadioButton/RadioButton.jsx'
import DropDown from './Components/DropDownMenu/DropDown.jsx'
import Clock from './Components/DigitalClock/Clock.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <CheckBox/>
    <RadioButton/>
    <DropDown/>
    <Clock/>
  </>,
)
