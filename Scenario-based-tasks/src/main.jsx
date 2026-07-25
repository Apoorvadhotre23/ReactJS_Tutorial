import { createRoot } from 'react-dom/client'
import CheckBox from './Components/HandlingCheckBox/CheckBox.jsx'
import RadioButton from './Components/HandlingRadioButton/RadioButton.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <CheckBox/>
    <RadioButton/>
  </>,
)
