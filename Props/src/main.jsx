
import { createRoot } from 'react-dom/client'
import UserParent from './Components/Example1/UserParent.jsx'
import Example2Parent from './Components/Example2/Example2Parent.jsx'
import Example3Parent from './Components/Example3/Example3Parent.jsx'
import '/src/main.css'
import Default_Parent from './Components/Default_Props/Default_Parent.jsx'
import ArraysParent from './Components/ArraysInProps/ArraysParent.jsx'
import Parent from './Components/FunctionAsProps/Parent.jsx'
import ControlledComponent from './Components/ControlledComponents/ControlledComponent.jsx'
import TextInput from './Components/ControlledComponents/TextInput.jsx'
import DropDown from './Components/ControlledComponents/DropDown.jsx'


createRoot(document.getElementById('root')).render(
  
  <div className='box'>
    <UserParent/>
    <Example2Parent/>
    <Example3Parent/>
    <Default_Parent/>
    <ArraysParent/>
    <Parent/>
    <ControlledComponent/> <br />
    <TextInput/>
    <DropDown/>
  </div>

  
)
